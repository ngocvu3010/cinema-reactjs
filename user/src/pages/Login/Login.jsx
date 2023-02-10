import React, {useState} from 'react';
import Header from '../../components/Header/Header';

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <>
      <Header />
      <div className="container">
        {/* TABS */}
        <div
          id="BodyContent_ctl00_ctl02_divLogin"
          className="col-lg-8 col-md-8 col-sm-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-2 tab-style-1 margin-bottom-20 margin-top-20"
        >
          <ul className="nav nav-tabs text-uppercase tab-information">
            <li className={activeTab == "login" ? "text-center active" : "text-center"} style={{ width: "50%" }} onClick={() => setActiveTab("login")}>
              <a className="font-16" href="#login" data-toggle="tab">
                Đăng nhập
              </a>
            </li>
            <li style={{ width: "50%" }} className={activeTab == "register" ? "text-center active" : "text-center"} onClick={() => setActiveTab("register")}>
              <a className="font-16" href="#register" data-toggle="tab">
                Đăng ký
              </a>
            </li>
          </ul>
          <div
            className="tab-content font-family-san font-16"
            style={{ backgroundColor: "#fff" }}
          >
            <div className={activeTab == "login" ? "tab-pane fade in active" : "tab-pane fade"} id="login">
              <div className="form-group">
                <div id="error-status" className="col-md-16 margin-bottom-10"></div>
              </div>
              <div className="clearfix" />
              <div className="form-group">
                <div className="col-md-16 margin-bottom-10">
                  <label className="control-label font-16">Email</label>
                  <div className="input-icon">
                    <i className="fa fa-user" />
                    <input
                      type="text"
                      id="txtLoginName"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="form-group">
                <div className="col-md-16 margin-bottom-20">
                  <label className="control-label font-16">Mật khẩu</label>
                  <div className="input-icon">
                    <i className="fa fa-lock" />
                    <input
                      type="password"
                      id="txtLoginPassword"
                      className="form-control"
                      placeholder="Mật khẩu"
                    />
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="form-group">
                <div className="col-md-16 margin-bottom-20">
                  <a href="#doimatkhau-pop-up" className="fancybox-fast-view">
                    Quên mật khẩu?
                  </a>
                </div>
              </div>
              <div className="clearfix" />
              <div className="form-group">
                <div className="col-md-16 text-center">
                  <div className="form-group">
                    <button
                      type="button"
                      style={{ minWidth: 220 }}
                      id="btnLogin"
                      onclick="login();"
                      className="btn btn-3 btn-mua-ve"
                    >
                      Đăng nhập bằng tài khoản
                    </button>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className={activeTab == "register" ? "tab-pane fade in active" : "tab-pane fade"} id="register">
              {/* BEGIN FORM*/}
              <div className="form-group">
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-16 margin-bottom-10">
                  <label className="control-label font-16">
                    <span style={{ color: "red" }}>*</span>&nbsp;Họ tên
                  </label>
                  <input
                    type="text"
                    style={{ height: 30 }}
                    id="txtName"
                    className="form-control"
                    placeholder="Họ tên"
                  />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-16 margin-bottom-10">
                  <label className="control-label font-16">
                    <span style={{ color: "red" }}>*</span>&nbsp;Email
                  </label>
                  <div className="input-icon">
                    <i className="fa fa-envelope" />
                    <input
                      type="text"
                      style={{ height: 30 }}
                      id="txtEmail"
                      className="form-control"
                      placeholder="Email"
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
                  <div className="input-icon">
                    <i className="fa fa-lock" />
                    <input
                      type="password"
                      style={{ height: 30 }}
                      id="txtMatKhau"
                      className="form-control"
                      placeholder="Mật khẩu"
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-16 margin-bottom-10">
                  <label className="control-label font-16">
                    <span style={{ color: "red" }}>*</span>&nbsp;Xác nhận lại mật khẩu
                  </label>
                  <div className="input-icon">
                    <i className="fa fa-lock" />
                    <input
                      type="password"
                      style={{ height: 30 }}
                      id="txtXacNhanMatKhau"
                      className="form-control"
                      placeholder="Xác nhận lại mật khẩu"
                    />
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="form-group">
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-16 margin-bottom-10">
                  <label className="control-label font-16">
                    <span style={{ color: "red" }}>*</span>&nbsp;Ngày sinh
                  </label>
                  <div className="input-icon">
                    <i className="fa fa-calendar" />
                    <input
                      id="txtNgaySinh"
                      style={{ height: 30 }}
                      className="datepicker form-control"
                      placeholder="Ngày sinh"
                      data-date-format="dd/mm/yyyy"
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
                  <label className="control-label font-16">
                    <span style={{ color: "red" }}>*</span>&nbsp;Số điện thoại
                  </label>
                  <div className="input-icon">
                    <i className="fa fa-phone-square" />
                    <input
                      type="text"
                      style={{ height: 30 }}
                      id="txtDienThoai"
                      className="form-control"
                      placeholder="Số điện thoại"
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
                    <button
                      type="button"
                      onclick="dangKy();"
                      className="btn btn-3 btn-mua-ve"
                    >
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              {/* END FORM*/}
            </div>
          </div>
        </div>
        {/* END TABS */}
      </div>
    </>
  )
}

export default Login;
