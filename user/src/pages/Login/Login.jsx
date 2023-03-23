/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../components/Header/Header";
import {PHONE_REGEX, DATE_REGEX, EMAIL_REGEX} from "../../constants";
import LoginForm from "../../components/LoginForm";

const schema = yup
  .object({
    fullName: yup.string().required("Họ tên không được để trống"),
    email: yup.string().required("Email không được để trống").matches(EMAIL_REGEX, "Email không hợp lệ"),
    password: yup
      .string()
      .required("Mật khẩu không được để trống")
      .min(6, "Mật khẩu tối thiểu 6 ký tự"),
    confirmPassword: yup
      .string()
      .required("Xác nhận mật khẩu không được để trống")
      .oneOf([yup.ref("password"), null], "Mật khẩu không khớp"),
    phoneNumber: yup.string().matches(PHONE_REGEX, "Số điện thoaị không hợp lệ"),
    dateOfBirth: yup.string().matches(DATE_REGEX, "Ngày sinh không hợp lệ")
  })
  .required();

const Login = ({currentUser}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      sex: "",
      phoneNumber: "",
    },
    resolver: yupResolver(schema),
  });

  const handleRegister = async (data) => {
    const url = process.env.REACT_APP_HOST + "/users";
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("user_id", data.id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate("/movies");
  };

  return (
    <>
      <Header  currentUser={currentUser} />
      <div className="container">
        {/* TABS */}
        <div
          id="BodyContent_ctl00_ctl02_divLogin"
          className="col-lg-8 col-md-8 col-sm-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-2 tab-style-1 margin-bottom-20 margin-top-20"
        >
          <ul className="nav nav-tabs text-uppercase tab-information">
            <li
              className={
                activeTab === "login" ? "text-center active" : "text-center"
              }
              style={{ width: "50%" }}
              onClick={() => setActiveTab("login")}
            >
              <a className="font-16" href="#login" data-toggle="tab">
                Đăng nhập
              </a>
            </li>
            <li
              style={{ width: "50%" }}
              className={
                activeTab === "register" ? "text-center active" : "text-center"
              }
              onClick={() => setActiveTab("register")}
            >
              <a className="font-16" href="#register" data-toggle="tab">
                Đăng ký
              </a>
            </li>
          </ul>
          <div
            className="tab-content font-family-san font-16"
            style={{ backgroundColor: "#fff" }}
          >
            <LoginForm activeTab={activeTab} />
          </div>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className={
                activeTab === "register"
                  ? "tab-pane fade in active"
                  : "tab-pane fade"
              }
              id="register"
            >
              {/* BEGIN FORM*/}
              <div className="form-group">
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-16 margin-bottom-10">
                  <label className="control-label font-16">
                    <span style={{ color: "red" }}>*</span>&nbsp;Họ tên
                  </label>
                  {errors?.fullName && (
                    <span className="d-block color-red">
                      {errors?.fullName?.message}
                    </span>
                  )}
                  <input
                    type="text"
                    style={{ height: 30 }}
                    id="txtName"
                    className="form-control"
                    placeholder="Họ tên"
                    {...register("fullName")}
                  />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-16 margin-bottom-10">
                  <label className="control-label font-16">
                    <span style={{ color: "red" }}>*</span>&nbsp;Email
                  </label>
                  {errors?.email && (
                    <span className="d-block color-red">
                      {errors?.email?.message}
                    </span>
                  )}
                  <div className="input-icon">
                    <i className="fa fa-envelope" />
                    <input
                      type="text"
                      style={{ height: 30 }}
                      id="txtEmail"
                      className="form-control"
                      placeholder="Email"
                      {...register("email")}
                    />
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="form-group">
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-16 margin-bottom-10">
                  <label className="control-label font-16">
                    <span style={{ color: "red" }}>*</span>&nbsp;Mật khẩu
                  </label>
                  {errors?.password && (
                    <span className="d-block color-red">
                      {errors?.password?.message}
                    </span>
                  )}
                  <div className="input-icon">
                    <i className="fa fa-lock" />
                    <input
                      type="password"
                      style={{ height: 30 }}
                      id="txtMatKhau"
                      className="form-control"
                      placeholder="Mật khẩu"
                      {...register("password")}
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-16 margin-bottom-10">
                  <label className="control-label font-16">
                    <span style={{ color: "red" }}>*</span>&nbsp;Xác nhận lại
                    mật khẩu
                  </label>
                  {errors?.confirmPassword && (
                    <span className="d-block color-red">
                      {errors?.confirmPassword?.message}
                    </span>
                  )}
                  <div className="input-icon">
                    <i className="fa fa-lock" />
                    <input
                      type="password"
                      style={{ height: 30 }}
                      id="txtXacNhanMatKhau"
                      className="form-control"
                      placeholder="Xác nhận lại mật khẩu"
                      {...register("confirmPassword")}
                    />
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="form-group">
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-16 margin-bottom-10">
                  <label className="control-label font-16">Ngày sinh</label>
                  {errors?.dateOfBirth && (
                    <span className="d-block color-red">
                      {errors?.dateOfBirth?.message}
                    </span>
                  )}
                  <div className="input-icon">
                    <i className="fa fa-calendar" />
                    <input
                      id="txtNgaySinh"
                      style={{ height: 30 }}
                      className="datepicker form-control"
                      placeholder="Ngày sinh"
                      data-date-format="dd/mm/yyyy"
                      {...register("dateOfBirth")}
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-16 margin-bottom-10">
                  <label className="control-label font-16">Giới tính</label>
                  <div className="input-icon">
                    <i className="fa fa-male" />
                    <select
                      id="cboSex"
                      style={{ height: 30 }}
                      className="form-control"
                      data-placeholder="Giới tính"
                      tabIndex={1}
                      {...register("sex")}
                    >
                      <option className="option-item" value={0}>
                        Giới tính
                      </option>
                      <option className="option-item" value={1}>
                        Nam
                      </option>
                      <option className="option-item" value={2}>
                        Nữ
                      </option>
                      <option className="option-item" value={3}>
                        Khác
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="form-group">
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-16 margin-bottom-10">
                  <label className="control-label font-16">Số điện thoại</label>
                  {errors?.phoneNumber && (
                    <span className="d-block color-red">
                      {errors?.phoneNumber?.message}
                    </span>
                  )}
                  <div className="input-icon">
                    <i className="fa fa-phone-square" />
                    <input
                      type="text"
                      style={{ height: 30 }}
                      id="txtDienThoai"
                      className="form-control"
                      placeholder="Số điện thoại"
                      {...register("phoneNumber")}
                    />
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="form-group">
                <div className="col-md-16">
                  <div className="form-group">
                    <input type="checkbox" id="chk" defaultValue={1} />
                    <span style={{ display: "normal" }}>
                      Tôi cam kết tuân theo{" "}
                      <a
                        href="#chinhsachbaomat-pop-up"
                        className="fancybox-fast-view"
                      >
                        chính sách bảo mật
                      </a>{" "}
                      và{" "}
                      <a
                        href="#dieukhoansudung-pop-up"
                        className="fancybox-fast-view"
                      >
                        điều khoản sử dụng
                      </a>{" "}
                      của Betacineplex.
                    </span>
                    <span style={{ display: "none" }}>
                      I have read and accecpt the{" "}
                      <a
                        href="#chinhsachbaomat-pop-up"
                        className="fancybox-fast-view"
                      >
                        Privacy policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="#dieukhoansudung-pop-up"
                        className="fancybox-fast-view"
                      >
                        Terms and conditions
                      </a>{" "}
                      of Betacineplex.
                    </span>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="form-group">
                <div className="col-md-16 text-center">
                  <div className="form-group">
                    <button type="submit" className="btn btn-3 btn-mua-ve">
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              {/* END FORM*/}
            </form>
          </div>
        </div>
        {/* END TABS */}
      </>
  );
};

export default Login;
