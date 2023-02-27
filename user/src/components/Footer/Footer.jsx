import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../img/logo.png";
import NotificationIcon from "../../img/dathongbao.png";
import "./style.scss";

const betaInformations = [
  "About us",
  "Careers",
  "Contact",
  "F.A.Q",
  "Social activity",
  "Terms and Conditions",
  "Advertising with us",
  "Privacy policy",
];

const betaTheaters = [
  "Beta Cinemas Empire Binh Duong - Hotline 0934 573 748",
  " Beta Cinemas Quang Trung, HCMC - Hotline 036 9939 722",
  "Beta Cinemas Giai Phong, Ha Noi - Hotline 0585 680 360",
  "Beta Cinemas Thanh Xuan, Ha Noi- Hotline 082 4812878",
  "Beta Cinemas My Dinh, Ha Noi - Hotline 0866 154 610",
  "Beta Cinemas Dan Phuong, Ha Noi - Hotline 0983 901 714",
  " Beta Cinemas Thai Nguyen - Hotline 0867 460 053",
  "Beta Cinemas Thanh Hoa - Hotline 0325 360 249",
  " Beta Cinemas Bac Giang - Hotline 0866 493 413",
  " Beta Cinemas Nha Trang, Khanh Hoa - Hotline 0399 475 165",
  " Beta Cinemas Bien Hoa, Dong Nai - Hotline 0347 517 650",
  " Beta Cinemas Long Khanh, Dong Nai - Hotline 0251 6270040",
  " Beta Cinemas Long Thanh, Dong Nai - Hotline 0927 168 911",
  " Beta Cinemas Phu My, Ba Ria Vung Tau - Hotline 0886 006 310",
  " Beta Cinemas Ho Tram, Ba Ria Vung Tau - Hotline 0254 3788601",
  " Beta Cinemas Tan Uyen, Binh Duong - Hotline 0934 521 161",
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="container pt-4 pb-5">
        <div className="row">
          <div className="col-md-2">
            <ul className="footer__list">
              <li className="footer__img">
                <img src={Logo} style={{ width: 120 }} alt="logo" />
              </li>
              {betaInformations.map((item, index) => (
                <li key={index} className="footer__item">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="footer__icon"
                  />
                  <a href="#" className="footer__link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="footer__list">
              <li className="footer__item">
                <h2 className="footer__title">Beta Threaters</h2>
              </li>
              {betaTheaters.map((item, index) => (
                <li key={index} className="footer__item">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="footer__icon"
                  />
                  <a href="#" className="footer__link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="footer__list">
              <li className="footer__item">
                <h2 className="footer__title">Connect with us</h2>
              </li>
              <li className="footer__item">
                <img src={NotificationIcon} alt="thong bao" />
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="footer__list footer__right">
              <li className="footer__item">
                <h2 className="footer__title">Contact</h2>
              </li>
              <li className="footer__sub-title">CÔNG TY CỔ PHẦN BETA MEDIA</li>
              <li>
                Giấy chứng nhận ĐKKD số: 0106633482 - Đăng ký lần đầu ngày
                08/09/2014 tại Sở Kế hoạch và Đầu tư Thành phố Hà Nội
              </li>
              <li>
                Địa chỉ trụ sở: Tầng 3, số 595, đường Giải Phóng, phường Giáp
                Bát, quận Hoàng Mai, thành phố Hà Nội
              </li>
              <li>Hotline: 0934 632 682</li>
              <li>Email: cskh@betacorp.vn</li>
              <li className="footer__sub-title">Liên hệ hợp tác kinh doanh:</li>
              <li className="footer__description">minh@betacorp.vn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
