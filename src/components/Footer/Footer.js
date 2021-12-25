import React from "react";
import PropTypes from "prop-types";
import "./Footer.scss";
import icon_E from "../../assets/images/icon-E.png";
import logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <div className="grid wide footer">
      <div className="inner-footer width_common">
        <ul className="list-menu-footer">
          <li className="item-menu">
            <a href="https://vnexpress.net/">Trang chủ</a>
          </li>
          <li className="item-menu">
            <a href="https://video.vnexpress.net">Video</a>
          </li>
          <li className="item-menu">
            <a href="/podcast">Podcasts</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/anh">Ảnh</a>
          </li>
          <li className="item-menu line">
            <a href="https://vnexpress.net/infographics">Infographics</a>
          </li>
          <li className="item-menu border-top">
            <a href="https://vnexpress.net/tin-tuc-24h">Mới nhất</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/tin-xem-nhieu">Xem nhiều</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/tin-nong">Tin nóng</a>
          </li>
        </ul>
        <ul className="list-menu-footer">
          <li className="item-menu">
            <a href="https://vnexpress.net/thoi-su">Thời sự</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/goc-nhin">Góc nhìn</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/the-gioi">Thế giới</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/kinh-doanh">Kinh doanh</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/giai-tri">Giải trí</a>
          </li>
        </ul>
        <ul className="list-menu-footer">
          <li className="item-menu">
            <a href="https://vnexpress.net/the-thao">Thể thao</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/phap-luat">Pháp luật</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/giao-duc">Giáo dục</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/suc-khoe">Sức khỏe</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/doi-song">Đời sống</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/du-lich">Du lịch</a>
          </li>
        </ul>
        <ul className="list-menu-footer">
          <li className="item-menu">
            <a href="https://vnexpress.net/khoa-hoc">Khoa học</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/so-hoa">Số hóa</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/oto-xe-may">Xe</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/y-kien">Ý kiến</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/tam-su">Tâm sự</a>
          </li>
          <li className="item-menu">
            <a href="https://vnexpress.net/hai">Hài</a>
          </li>
        </ul>
        <ul className="list-menu-footer border-left">
          <li className="item-menu">
            <a href="#">Rao vặt</a>
          </li>

          <li className="item-menu">
            <a href="#">Shop VnExpress</a>
          </li>

          <li className="item-menu">
            <a href="https://startup.vnexpress.net/">Startup</a>
          </li>

          <li className="item-menu">
            <a href="https://vlight.vnexpress.net/lien-he">Mua ảnh VnExpress</a>
          </li>

          <li className="item-menu">
            <a href="#">Vhome</a>
          </li>

          <li className="item-menu"></li>
        </ul>
        <div className="wrap-contact">
          <div className="contact downloadapp">
            <p>Tải ứng dụng</p>
            <div className="downloadapp__dl">
              <a className="" href="">
                <img src={icon_E} alt="" />
                VnExpress
              </a>
              <a className="" href="">
                <img src={icon_E} alt="" />
                International
              </a>
            </div>
          </div>
          <div className="contact">
            <p>Liên hệ</p>
            <a href="https://vnexpress.net/lien-he-toa-soan" className="email">
              Tòa soạn
              <svg className="ic ic-mail">
                <use></use>
              </svg>
            </a>
            <a href="/" className="ads">
              Quảng cáo
            </a>{" "}
            <br />
            <a href="https://vlight.vnexpress.net/lien-he">
              <i className="ic-vlight"></i>Hợp tác bản quyền
            </a>
          </div>
          <div className="hotline">
            <p>Đường dây nóng</p>
            <div className="hotline-main">
              <div className="left">
                <strong>083.888.0123</strong>
                <p>(Hà Nội)</p>
              </div>
              <div className="right">
                <strong>082.233.3555</strong>
                <p>(TP. Hồ Chí Minh)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright ">
        <a href="">
          <img className="logo" src={logo} alt="" />
        </a>
        <div className="right flexbox">
          <a className="rss" href="/rss">
            RSS
          </a>
          <span className="txt-follow">Theo dõi VnExpress trên</span>

          <div className="icon">
            <a
              className="fb"
              href="https://www.facebook.com/congdongvnexpress/"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className="icon">
            {" "}
            <a className="tw" href="https://twitter.com/VnEnews">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="icon">
            <a className="yt" href="">
              {" "}
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright-footer ">
        <p>
          <p className="bold">Báo tiếng Việt nhiều người xem nhất</p>
          {/* <br /> */}
          Thuộc Bộ Khoa học Công nghệ
          <br />
          Số giấy phép: 06/GP-BTTTT ngày 03/01/2014
        </p>
        <p>
          Tổng biên tập: Phạm Hiếu
          <br />
          Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội
          <br />
          Điện thoại: 024 7300 8899 - máy lẻ 4500
        </p>
        <p>© 1997-2021. Toàn bộ bản quyền thuộc VnExpress</p>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
