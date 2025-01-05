import logo1 from "../../../assets/images/whyChooseUs/partners/mcdonald.svg";
import logo2 from "../../../assets/images/whyChooseUs/partners/domino.png";
import logo3 from "../../../assets/images/whyChooseUs/partners/wendys.png";
import logo4 from "../../../assets/images/whyChooseUs/partners/kfc.svg";
import logo5 from "../../../assets/images/whyChooseUs/partners/startbucks.png";
import logo6 from "../../../assets/images/whyChooseUs/partners/pizahut.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

import Slider, { CustomArrowProps } from "react-slick";

// Custom Next Arrow Component
const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

const PartnersCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2000,
    cssEase: "ease",
    waitForAnimate: false, // A
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-[85%] mx-auto">
      <Slider {...settings}>
        <div className="!flex justify-center items-center h-[120px] md:h-[70px] hover:scale-[1.3] transition-all cursor-pointer">
          <img className="h-[70%]" src={logo1} alt="" />
        </div>
        <div className="!flex justify-center items-center h-[120px] md:h-[70px] hover:scale-[1.3] transition-all cursor-pointer">
          <img className="h-[70%]" src={logo2} alt="" />
        </div>
        <div className="!flex justify-center items-center h-[120px] md:h-[70px] hover:scale-[1.3] transition-all cursor-pointer">
          <img className="h-[70%]" src={logo3} alt="" />
        </div>
        <div className="!flex justify-center items-center h-[120px] md:h-[70px] hover:scale-[1.3] transition-all cursor-pointer">
          <img className="h-[70%]" src={logo4} alt="" />
        </div>
        <div className="!flex justify-center items-center h-[120px] md:h-[70px] hover:scale-[1.3] transition-all cursor-pointer">
          <img className="h-[70%]" src={logo5} alt="" />
        </div>
        <div className="!flex justify-center items-center h-[120px] md:h-[70px] hover:scale-[1.3] transition-all cursor-pointer">
          <img className="h-[70%]" src={logo6} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default PartnersCarousel;
