import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import giftSvg from "../../../assets/images/whyChooseUs/gift.svg";
import labelSvg from "../../../assets/images/whyChooseUs/label.svg";
import gameSvg from "../../../assets/images/whyChooseUs/game.svg";
import qrCodeSvg from "../../../assets/images/whyChooseUs/qrcode.svg";

import Slider from "react-slick";
import { useTranslate } from "../../../hooks/useTranslate";

const data = [
  {
    title: "exclusive_rewards",
    subTitle: "exclusive_rewards_paragraph",
    svg: giftSvg,
  },
  {
    title: "easy_loyality_program",
    subTitle: "easy_loyality_program_paragraph",
    svg: labelSvg,
  },
  {
    title: "discover_nearby",
    subTitle: "discover_nearby_paragraph",
    svg: gameSvg,
  },
  {
    title: "quick_redeem_with_qr_code",
    subTitle: "quick_redeem_with_qr_code_paragraph",
    svg: qrCodeSvg,
  },
];

const FeaturesCarousel = () => {
  const { t } = useTranslate();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 700,
    autoplaySpeed: 2000,
    cssEase: "ease",
    waitForAnimate: false,
  };

  return (
    <div className="slider-container w-[85%] mx-auto">
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 group cursor-pointer "
            >
              <div className="transition-all shrink-0 flex justify-center mb-3">
                <img className="h-[40px] w-[40px]" src={item.svg} alt="gift" />
              </div>
              <div className="flex flex-col items-center ">
                <h3 className="font-extrabold text-lg sm:text-base mb-3 sm:mb-3">
                  {t(item.title)}
                </h3>
                <p className="text-sm text-zinc-500 w-[70%] sm:w-full text-center">
                  {t(item.subTitle)}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FeaturesCarousel;
