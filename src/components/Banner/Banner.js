import PropTypes from "prop-types";
import bg from "../../assets/images/bg.png";
import bg3 from "../../assets/images/bg-1.png";
import bg1 from "../../assets/images/bg-2.png";
import bg2 from "../../assets/images/bg-3.png";
import "./Banner.scss";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Banner(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="grid">
      <Slider {...settings}>
        <div className="">
          <img src={bg} alt="" />
        </div>
        <div className="">
          <img src={bg1} alt="" />
        </div>
        <div className="">
          <img src={bg2} alt="" />
        </div>
        <div className="">
          <img src={bg3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

Banner.propTypes = {};

export default Banner;
