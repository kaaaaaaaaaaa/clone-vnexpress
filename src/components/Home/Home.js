import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/gridSystem.css";
import "./Home.scss";
import imageHome from "../../assets/images/home.jpg";
import author from "../../assets/images/author.png";
import storyItem from "../../assets/images/story-item.jpg";
import storyItem2 from "../../assets/images/story-item2.jpg";
import storyItem3 from "../../assets/images/story-item3.jpg";

import advertisement from "../../assets/images/advertisement.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faQuestionCircle,
  faCommentAlt,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import StoryItem from "../StoryItem/StoryItem";
function Home(props) {
  const stylesComment = {
    color: "#eee",
  };
  return (
    <div className="grid wide">
      <div className="container">
        {/* home-page */}
        <div className="home-page">
          <div className="home-page__main">
            <div className="row">
              <img className="col l-8 m-7 c-12" src={imageHome} alt="" />
              <div className="col l-4 m-4 c-12 news">
                <h2 className="news__title">
                  Vết nứt trên ngai vàng của tuyển Việt Nam
                </h2>
                <p className="news__description">
                  Trong khi Thái Lan giành một chiến thắng hoàn hảo, thầy trò
                  HLV Park Hang-seo gần như lạc lối từ trước khi bước vào trận
                  lượt đi bán kết AFF Cup 2020. Chưa bàn về các vấn đề chiến ...
                </p>
                <a href="">Thể thao</a>
                <FontAwesomeIcon
                  style={stylesComment}
                  icon={faCommentAlt}
                ></FontAwesomeIcon>
                <span className="news__icon">{219}</span>
              </div>
            </div>
            <div className="row news__bottom">
              <div className="col l-4 m-4 c-12">
                <h2 className="news__title-bottom">
                  Ông già Noel cưỡi môtô nước tặng quà ở xóm chài
                </h2>
                <p className="news__description">
                  HÀ NỘI - Gần 20 ông già Noel đi môtô nước và xuồng hơi tặng
                  nhiều phần quà cho người dân sống ở xóm chài trên sông
                  Hsotồng, chiều 24/12.
                </p>
              </div>
              <div className="col l-4 m-4 c-12">
                <h2 className="news__title-bottom">Dừng san ủi Hòn Rơm</h2>
                <p className="news__description">
                  Trong khi Thái Lan giành một chiến thắng hoàn hảo, thầy trò
                  HLV Park Hang-seo gần như lạc lối từ trước khi bước vào trận
                  lượt đi bán kết AFF Cup 2020.
                </p>
              </div>
              <div className="col l-3 m-4 c-12 ">
                <div className="goc-nhin">
                  <h2 className="link-page">Góc Nhìn</h2>
                  <h2 className="news__title-bottom">Tiền đâu mua đất?</h2>
                  <p className="news__description">
                    'Nhà báo thấy khu đất giá trị nào mà không thế chấp tại ngân
                    hàng để vay tiền không?',...
                  </p>
                  <div className="goc-nhin__author">
                    <div className="goc-nhin__author__detail">
                      <p>Nguyễn Đông</p>
                      <FontAwesomeIcon
                        style={stylesComment}
                        icon={faCommentAlt}
                      />
                      <span className="news__icon">21</span>
                    </div>
                    <img src={author} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* quảng cáo bỏ dô cho đỡ tróng trải hic */}
          <div className="home-page__advertisement">
            <img src={advertisement} alt="" />
          </div>
        </div>
        {/* top-story */}
        <div className="top-story">
          <div className="row">
            <div className="col l-5 m-6 c-12 top-story__left">
              <div className="aff-cup">
                <p className="aff-cup__info__topic">AFF CUP</p>

                <div className="aff-cup__info">
                  <span className="aff-cup__info__time">Ngày mai,19:30 </span>{" "}
                  &nbsp;&nbsp;
                  <span className="name-m">Thái Lan</span>&nbsp;&nbsp;
                  <img
                    src="https://is.vnecdn.net/objects/teams/1564.png"
                    alt="Thái Lan"
                  />
                  &nbsp;&nbsp;<strong className="vs">-</strong>&nbsp;&nbsp;
                  <img
                    src="https://s1.vnecdn.net/vnexpress/restruct/i/v509/banner/logo_vietnam_team.png"
                    alt="Việt Nam"
                  />
                  &nbsp;&nbsp;
                  <span className="name-m">Việt Nam</span>
                </div>
              </div>

              <StoryItem
                title="HLV Thái Lan: 'Có VAR, Việt Nam cũng không thay đổi được gì'"
                description="SINGAPORE - Theo ông Alexandre Polking, chiến thắng của Thái Lan ở lượt đi bán kết AFF Cup 2020 hoàn toàn xứng đáng, dù Việt Nam phàn nàn về chuyện trọng tài hay VAR."
                comment="137"
                img={storyItem}
              />
              <StoryItem
                title="Hơn 1.000 công nhân ngừng việc phản đối cách tính lương"
                description="TP HCMHơn 1.000 công nhân Nobland Việt Nam, quận 12, ngừng việc phản đối cách tính lương mới của công ty vì cho rằng bị thiệt, lương giảm một nửa."
                comment="127"
                img={storyItem2}
              />
              <StoryItem
                title="Các quận trung tâm Hà Nội cấm bán hàng ăn uống tại chỗ"
                description="Quận Hoàn Kiếm, Ba Đình, Tây Hồ, Hoàng Mai, Nam Từ Liêm yêu cầu chỉ bán mang về và hạn chế hoạt động đông người, một tuần sau khi Đống Đa, Hai Bà Trưng áp dụng biện pháp này."
                comment="127"
                img={storyItem3}
              />
            </div>

            {/* right  */}
            <div className="col l-7 m-6 c-12 top-story__right">
              <div className="top-story__right__medium">
                <nav className="top-story__right__medium__nav">
                  <button>Tư Vấn F0</button>
                  <button>Người bệnh nền</button>
                  <button>Sử dụng thuốc</button>
                  <button>Tạp thở, làm sạch phổi</button>
                  <button>Phục hồi sức khỏe </button>
                  <button>... Xem Thêm</button>
                </nav>
                <h3 className="top-story__right__medium-title">
                  Covid-19 tại Việt Nam
                </h3>

                <div className=" row top-story__right__medium-table">
                  <div className=" col l-6 medium__table ">
                    <div className="row medium__table__title">
                      <p className=" col l-4"> </p>
                      <p className=" col l-4" style={{ padding: "0 22px" }}>
                        Công bố hôm qua{" "}
                      </p>
                      <p className=" col l-4"> Tổng</p>
                    </div>
                    <div className="row medium__table__content">
                      <div className=" col l-4 bold">
                        <p className=" col l-4 bold">Nhiễm*</p>
                        <p className=" col l-4 bold">Khỏi</p>
                        <p className=" col l-4 bold">Tử vong</p>
                      </div>
                      <div className="col l-4">
                        <p className="red bold">16.142</p>
                        <p className="green bold">30.8333</p>
                        <p className="bold">255</p>
                      </div>
                      <div className=" col l-4">
                        <p className="red bold">1.612.142</p>
                        <p className="green bold">1.235.123</p>
                        <p>1.612.142</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="fake-tag"></div> */}

                  <div className="col l-6 table-scroll">
                    <div className="row table-scroll__title">
                      <p className="col l-4">Tỉnh</p>
                      <p className="col l-4">Công bố</p>
                      <p className="col l-4">Tổng nhiểm</p>
                    </div>

                    <div className=" row table-scroll__content">
                      <div className=" col l-4 table-scroll__province">
                        <p>Hà Nội</p>
                        <p>Vĩnh Long </p>
                        <p>cà Mau</p>
                        <p>Tiền Giang</p>
                        <p>Hà Nội</p>
                        <p>cà Mau</p>
                        <p>Tiền Giang</p>
                        <p>Hà Nội</p>
                        <p>cà Mau</p>
                        <p>Tiền Giang</p>
                      </div>
                      <div className=" col l-4 table-scroll__quality">
                        <p className="bold">+123</p>
                        <p className="bold">+1084</p>
                        <p className="bold">+847</p>
                        <p className="bold">+134</p>
                        <p className="bold">+123</p>
                        <p className="bold">+123</p>
                        <p className="bold">+1084</p>
                        <p className="bold">+847</p>
                        <p className="bold">+134</p>
                      </div>
                      <div className=" col l-4 table-scroll__total">
                        <p className="bold">+847</p>
                        <p className="bold">+134</p>
                        <p className="bold">+123</p>
                        <p className="bold">+123</p>
                        <p className="bold">+1084</p>
                        <p className="bold">+1084</p>
                        <p className="bold">+847</p>
                        <p className="bold">+134</p>
                        <p className="bold">+123</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text">
                * Ca nhiễm cộng đồng từ 27/4. Cập nhật: 18:06, 24/12
              </span>
              <a className="text float-right link" href="">
                Tin tức covid
              </a>
              <a className="text float-right link" href="">
                xem thêm
              </a>

              <div className="top-story__common">
                <div className="hoi-bac-si">
                  <button>
                    <FontAwesomeIcon
                      icon={faPlusSquare}
                      style={{ color: "#076DB6" }}
                    />
                    Bệnh Thông thường
                  </button>
                </div>

                <a href="">Triệu chứng bệnh viêm tuyến giáp dễ bị nhầm lẫn</a>
                <div className="btn-nav">
                  <FontAwesomeIcon
                    icon={faArrowAltCircleLeft}
                    style={{ color: "#076DB6" }}
                  />
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    style={{ color: "#076DB6" }}
                  />
                </div>
                <div className="hoi-bac-si">
                  <button>
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      style={{ color: "#076DB6" }}
                    />
                    Hỏi bác sĩ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
