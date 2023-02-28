import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../../img/logo.png";
import UKImage from "../../img/united-kingdom.png";
import "./style.scss";

const Header = () => {
  return (
    <>
      <div className="bg-black">
        <div className="container">
          <ul className="d-flex justify-content-end align-items-center py-1">
            <li className="px-2">
              <a className="text-decoration-none text-white" href="/login">
                Đăng nhập
              </a>
            </li>
            <li className="px-2 border-start">
              <a
                className="text-decoration-none text-white"
                href="/login#register"
              >
                Đăng ký
              </a>
            </li>
            <li className="d-flex align-items-center px-2">
              <img src={UKImage} alt="united-kingdom" />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-bottom">
        <div className="container">
          <div className="d-flex justify-content-between align-items-stretch gap-5">
            <div className="d-flex align-items-center gap-5 py-2">
              <a className="" href="/">
                <img src={Logo} style={{ height: 55 }} alt="logo" />
              </a>
              <div className="top-cart-block">
                <div className="dropdown__info">
                  {/* BEGIN NAVIGATION */}
                  <div className="header-navigation font-transform-inherit font-family-san menu-cinema">
                    <ul>
                      <li className="dropdown">
                        <a
                          className="no-padding"
                          data-toggle="dropdown"
                          data-target="#"
                          href="#"
                        >
                          Beta Thái Nguyên{" "}
                          <FontAwesomeIcon icon={faAngleDown} />
                        </a>
                        <ul className="dropdown-menu">
                          <li className="dropdown-submenu">
                            <a className="d-flex justify-content-between">
                              Hà Nội
                              <FontAwesomeIcon icon={faAngleDown} />
                            </a>
                            <ul className="dropdown-menu" role="menu">
                              <li>
                                <a href="#">Beta Thanh Xuân</a>
                              </li>
                              <li>
                                <a href="#">Beta Mỹ Đình</a>
                              </li>
                              <li>
                                <a href="#">Beta Đan Phượng</a>
                              </li>
                              <li>
                                <a href="#">Beta Giải Phóng</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu">
                            <a className="d-flex justify-content-between">
                              TP. Hồ Chí Minh{" "}
                              <FontAwesomeIcon icon={faAngleDown} />
                            </a>
                            <ul className="dropdown-menu" role="menu">
                              <li>
                                <a href="#">Beta Quang Trung</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu">
                            <a className="d-flex justify-content-between">
                              Bắc Giang <FontAwesomeIcon icon={faAngleDown} />
                            </a>
                            <ul className="dropdown-menu" role="menu">
                              <li>
                                <a href="#">Beta Bắc Giang</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu">
                            <a className="d-flex justify-content-between">
                              Đồng Nai <FontAwesomeIcon icon={faAngleDown} />
                            </a>
                            <ul className="dropdown-menu" role="menu">
                              <li>
                                <a href="#">Beta Biên Hòa</a>
                              </li>
                              <li>
                                <a href="#">Beta Long Khánh</a>
                              </li>
                              <li>
                                <a href="#">Beta Long Thành</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu">
                            <a className="d-flex justify-content-between">
                              Khánh Hòa <FontAwesomeIcon icon={faAngleDown} />
                            </a>
                            <ul className="dropdown-menu" role="menu">
                              <li>
                                <a href="#">Beta Nha Trang</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu">
                            <a className="d-flex justify-content-between">
                              Thái Nguyên <FontAwesomeIcon icon={faAngleDown} />
                            </a>
                            <ul className="dropdown-menu" role="menu">
                              <li>
                                <a href="#">Beta Thái Nguyên</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu">
                            <a className="d-flex justify-content-between">
                              Thanh Hóa <FontAwesomeIcon icon={faAngleDown} />
                            </a>
                            <ul className="dropdown-menu" role="menu">
                              <li>
                                <a href="#">Beta Thanh Hóa</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu">
                            <a className="d-flex justify-content-between">
                              Bà Rịa - Vũng Tàu{" "}
                              <FontAwesomeIcon icon={faAngleDown} />
                            </a>
                            <ul className="dropdown-menu" role="menu">
                              <li>
                                <a href="#">Beta Phú Mỹ</a>
                              </li>
                              <li>
                                <a href="#">Beta Hồ Tràm</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu">
                            <a className="d-flex justify-content-between">
                              Bình Dương <FontAwesomeIcon icon={faAngleDown} />
                            </a>
                            <ul className="dropdown-menu" role="menu">
                              <li>
                                <a href="#">Beta Empire Bình Dương</a>
                              </li>
                              <li>
                                <a href="#">Beta Tân Uyên</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* END NAVIGATION */}
                </div>
              </div>
            </div>
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  LỊCH CHIẾU THEO RẠP
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  PHIM
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  RẠP
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  GIÁ VÉ
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  TIN MỚI VÀ ƯU ĐÃI
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  NHƯỢNG QUYỀN
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  THÀNH VIÊN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a href="#popup_choosecinema" className="fancybox-choosecinema" />
      <div
        id="popup_choosecinema"
        style={{ display: "none", width: 700, marginTop: "-200px" }}
      >
        <div className="modal-body text-center">
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label>Tỉnh/ Thành phố</label>
                <select
                  id="cboTinhThanh"
                  className="form-control"
                  data-placeholder="Chọn Tỉnh/ Thành phố"
                  tabIndex={1}
                >
                  <option className="option-item" value={0}>
                    Chọn Tỉnh/ Thành phố
                  </option>
                  <option
                    className="option-item"
                    value="5f672cb2-d9c2-442e-a8e7-12939fec65ab"
                  >
                    Hà Nội
                  </option>
                  <option
                    className="option-item"
                    value="1c5f58bb-f1ac-4ca0-8df8-b65869d69b7f"
                  >
                    TP. Hồ Chí Minh
                  </option>
                  <option
                    className="option-item"
                    value="66e64727-7b67-43f3-84db-0a1731528398"
                  >
                    Bắc Giang
                  </option>
                  <option
                    className="option-item"
                    value="a0f4b33c-58ce-4047-b54f-2fa28f47311e"
                  >
                    Đồng Nai
                  </option>
                  <option
                    className="option-item"
                    value="46015d6d-3f96-4dad-a487-415be85dd24d"
                  >
                    Khánh Hòa
                  </option>
                  <option
                    className="option-item"
                    value="3fd25e4b-8f3e-4d39-8a8a-a647627d8459"
                  >
                    Thái Nguyên
                  </option>
                  <option
                    className="option-item"
                    value="f4b0a1f8-95d0-46dd-8595-7b1d9e41985c"
                  >
                    Thanh Hóa
                  </option>
                  <option
                    className="option-item"
                    value="1b13f701-6fa6-4580-ae2e-d986ee5b9d42"
                  >
                    Bà Rịa - Vũng Tàu
                  </option>
                  <option
                    className="option-item"
                    value="c178132d-2d14-4d54-9673-ca054dd96d0c"
                  >
                    Bình Dương
                  </option>
                </select>
              </div>
            </div>
            {/*/span*/}
            <div className="col-md-8">
              <div className="form-group">
                <label>Tên rạp</label>
                <select
                  id="cboRap"
                  className="form-control"
                  data-placeholder="Chọn rạp phim"
                  tabIndex={1}
                ></select>
              </div>
            </div>
            {/*/span*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
