import React from "react";
import PropTypes from "prop-types";
import "./Navigation.scss";
import "../../assets/styles/gridSystem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAlignJustify } from "@fortawesome/free-solid-svg-icons";

function Navigation(props) {
  return (
    <div className="navigation sticky ">
      <div className=" parent">
        <ul>
          <li className="dropdown ">
            <a className="dropdown__dropbtn home" href="">
              <FontAwesomeIcon icon={faHome} />
            </a>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Thời sự
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Chính trị</a>
              </li>
              <li>
                <a href="#">Dân sinh</a>
              </li>
              <li>
                <a href="#">Giao Thông</a>
              </li>
              <li>
                <a href="#">Mekong</a>
              </li>
              <li>
                <a href="#">Quỹ hi vọng</a>
              </li>
              <li>
                <a href="#">Tất cả yêu Thương</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Góc nhìn
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Bình Luận nhiều</a>
              </li>
              <li>
                <a href="#">Covid 19</a>
              </li>
              <li>
                <a href="#">Chính Trị & chính sách</a>
              </li>
              <li>
                <a href="#">Kinh doanh</a>
              </li>
              <li>
                <a href="#">Giáo dục Và tri thức</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Thế giới
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Video
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Postcasts
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Kinh doanh
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Khoa học
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Giải trí
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Thế thao
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Pháp luật
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Giáo dục
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Sức khỏe
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Đời sống
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Du lịch
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Số hóa
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Xe
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Ý Kiến
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Tâm sự
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn" href="">
              Hài
            </a>

            <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown__dropbtn dropdown__all " href="">
              <span> Tất cả</span>
              <FontAwesomeIcon
                icon={faAlignJustify}
                style={{ color: "#bdbdbd" }}
              />
            </a>

            {/* <ul className="dropdown__dropbtn__content">
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

Navigation.propTypes = {};

export default Navigation;
