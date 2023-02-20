import React from 'react'

const Header = () => {
  return (
    <>
      <div className="pre-header">
        <div className="container">
          <div className="row">
            {/* BEGIN TOP BAR MENU */}
            <div className="col-md-16 col-sm-16 additional-nav">
              <div className="pull-right padding-left-10">
                <a id="BodyContent_ctl00_ctl03_hlEn" onclick="changelang('eng');">
                  <img
                    src="/Assets/Common/icons/united-kingdom.png"
                    className="img-responsive"
                  />
                </a>
              </div>
              <ul
                className="list-unstyled list-inline pull-right"
                style={{ marginBottom: 4, marginTop: 4 }}
              >
                <li id="BodyContent_ctl00_ctl03_liLogin">
                  <a href="/login">Đăng nhập</a>
                </li>
                <li
                  id="BodyContent_ctl00_ctl03_liRegister"
                  style={{
                    borderLeft: "1px solid",
                    paddingLeft: "10px !important"
                  }}
                >
                  <a href="/login.htm#register">Đăng ký</a>
                </li>
              </ul>
              {/* BEGIN TOP NAVIGATION MENU */}
              {/* END TOP NAVIGATION MENU */}
            </div>
            {/* END TOP BAR MENU */}
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="row">
            <a className="site-logo" href="/home.htm">
              <img
                alt=""
                style={{ height: 55 }}
                src="/Assets/Common/logo/logo.png"
              />
            </a>
            <a href="javascript:void(0);" className="mobi-toggler">
              <i className="fa fa-bars" />
            </a>
            <div className="top-cart-block">
              <div className="top-cart-info">
                {/* BEGIN NAVIGATION */}
                <div className="header-navigation font-transform-inherit font-family-san menu-cinema">
                  <ul>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle no-padding"
                        data-toggle="dropdown"
                        data-target="#"
                        href="javascript:;"
                      >
                        Beta Thái Nguyên <i className="fa fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-submenu">
                          <a>
                            Hà Nội <i className="fa fa-angle-right" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a onclick="ChooseCinema('1f0b7d55-9dd6-4c46-bd4d-3b50024d14ec', 'Beta Thanh Xuân');">
                                Beta Thanh Xuân
                              </a>
                            </li>
                            <li>
                              <a onclick="ChooseCinema('86fa4c35-8d26-4f60-9cf2-fbaaba0ee25d', 'Beta Mỹ Đình');">
                                Beta Mỹ Đình
                              </a>
                            </li>
                            <li>
                              <a onclick="ChooseCinema('8bdac2c9-2cc7-464b-8cff-4bc41403b74f', 'Beta Đan Phượng');">
                                Beta Đan Phượng
                              </a>
                            </li>
                            <li>
                              <a onclick="ChooseCinema('94d6c0ca-125b-43d0-8f65-9f0880b90beb', 'Beta Giải Phóng');">
                                Beta Giải Phóng
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a>
                            TP. Hồ Chí Minh <i className="fa fa-angle-right" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a onclick="ChooseCinema('0fdbe392-734d-402b-9399-d22bd37b6cee', 'Beta Quang Trung');">
                                Beta Quang Trung
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a>
                            Bắc Giang <i className="fa fa-angle-right" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a onclick="ChooseCinema('ed75f9eb-4f2c-4448-aef8-7804178df564', 'Beta Bắc Giang');">
                                Beta Bắc Giang
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a>
                            Đồng Nai <i className="fa fa-angle-right" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a onclick="ChooseCinema('6af5c313-0e3e-4e72-86d6-2e4ed45e7e35', 'Beta Biên Hòa');">
                                Beta Biên Hòa
                              </a>
                            </li>
                            <li>
                              <a onclick="ChooseCinema('d1678477-49ce-4417-bc39-a080cad0e9e8', 'Beta Long Khánh');">
                                Beta Long Khánh
                              </a>
                            </li>
                            <li>
                              <a onclick="ChooseCinema('00b76686-a994-4da5-aee3-c508099a89d4', 'Beta Long Thành');">
                                Beta Long Thành
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a>
                            Khánh Hòa <i className="fa fa-angle-right" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a onclick="ChooseCinema('b0e45ea2-443f-404f-9412-b97a6001f157', 'Beta Nha Trang');">
                                Beta Nha Trang
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a>
                            Thái Nguyên <i className="fa fa-angle-right" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a onclick="ChooseCinema('dfd9306f-fbc8-4807-a8c6-5e6c3f7ad71c', 'Beta Thái Nguyên');">
                                Beta Thái Nguyên
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a>
                            Thanh Hóa <i className="fa fa-angle-right" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a onclick="ChooseCinema('7d4980ac-eb8f-4bcb-97eb-77cbcd75dba2', 'Beta Thanh Hóa');">
                                Beta Thanh Hóa
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a>
                            Bà Rịa - Vũng Tàu <i className="fa fa-angle-right" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a onclick="ChooseCinema('3db16884-48c4-406d-b873-fa65147f939a', 'Beta Phú Mỹ');">
                                Beta Phú Mỹ
                              </a>
                            </li>
                            <li>
                              <a onclick="ChooseCinema('3aa17be3-387c-4271-a313-2e5bb069b509', 'Beta Hồ Tràm');">
                                Beta Hồ Tràm
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a>
                            Bình Dương <i className="fa fa-angle-right" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a onclick="ChooseCinema('a4ed71b7-2af3-46d4-acff-b7778fb2c91d', 'Beta Empire Bình Dương');">
                                Beta Empire Bình Dương
                              </a>
                            </li>
                            <li>
                              <a onclick="ChooseCinema('65966bb8-ec4a-4ef6-bd0d-429deb2b563e', 'Beta Tân Uyên');">
                                Beta Tân Uyên
                              </a>
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
            {/* BEGIN NAVIGATION */}
            <div className="header-navigation pull-right font-transform-inherit">
              <ul>
                <li id="BodyContent_ctl00_ctl03_rptMenu2_liNoChild_0">
                  <a href="/lich-chieu.htm">LỊCH CHIẾU THEO RẠP</a>
                </li>
                <li id="BodyContent_ctl00_ctl03_rptMenu2_liNoChild_1">
                  <a href="/movies">PHIM</a>
                </li>
                <li id="BodyContent_ctl00_ctl03_rptMenu2_liNoChild_2">
                  <a href="/thong-tin-rap.htm">RẠP</a>
                </li>
                <li id="BodyContent_ctl00_ctl03_rptMenu2_liNoChild_3">
                  <a href="/gia-ve.htm">GIÁ VÉ</a>
                </li>
                <li id="BodyContent_ctl00_ctl03_rptMenu2_liNoChild_4">
                  <a href="/tin-moi-va-uu-dai.htm">TIN MỚI VÀ ƯU ĐÃI</a>
                </li>
                <li id="BodyContent_ctl00_ctl03_rptMenu2_liNoChild_5">
                  <a href="/nhuong-quyen.htm">NHƯỢNG QUYỀN</a>
                </li>
                <li id="BodyContent_ctl00_ctl03_rptMenu2_liNoChild_6">
                  <a href="/thong-tin-tai-khoan.htm#thongtintaikhoan">THÀNH VIÊN</a>
                </li>
                {/* BEGIN TOP SEARCH */}
                {/* END TOP SEARCH */}
              </ul>
            </div>
            {/* END NAVIGATION */}
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
  )
}

export default Header
