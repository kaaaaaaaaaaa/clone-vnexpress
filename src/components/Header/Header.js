import PropTypes from "prop-types";
import React from "react";
import "../../assets/styles/gridSystem.css";
import logo from "../../assets/images/logo.svg";
import icon_E from "../../assets/images/icon-E.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

import Moment from "react-moment";
import moment from "moment";

const iconStyle = {
  color: "#BDBDBD ",
};

const date = new Date();

function Header(props) {
  return (
    <div className="container">
      <div className="grid wide">
        <div className="header">
          <div className=" header__left ">
            <div className="header__logo">
              <img
                className="header__logo__bg"
                src="https://s1.vnecdn.net/vnexpress/restruct/i/v509/v2_2019/pc/graphics/mask-logo-pc.png"
                alt=""
              />
              <img className="header__logo__icon" src={logo} alt="" />
            </div>
            <div className=" header__left__time-now ">
              <Moment format="dddd DD/MM/YYYY">{moment(date).format()}</Moment>
            </div>
          </div>
          <div className="header__right">
            <a className="header__right__new" href="#">
              <FontAwesomeIcon icon={faClock} style={iconStyle} /> Mới Nhất
            </a>

            <div className="header__right__international">
              <a className="" href="">
                <img src={icon_E} alt="" />
                International
              </a>
            </div>

            <div className="header__right__search">
              <input type="text" placeholder="Search..." />
              <div className="header__right__search__icon">
                <FontAwesomeIcon style={iconStyle} icon={faSearch} />
              </div>
            </div>
            <div className="header__right__login">
              <span className="login__icon">
                <FontAwesomeIcon icon={faUser} style={iconStyle} />
              </span>
              <a href="">Đăng Nhập</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
