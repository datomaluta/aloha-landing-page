import iphoneMockup from "../../assets/images/whyChooseUs/iphone.png";
import PartnersCarousel from "../ui/carousel/PartnersCarousel";
import { motion } from "framer-motion";
import { useTranslate } from "../../hooks/useTranslate";
import giftSvg from "../../assets/images/whyChooseUs/gift.svg";
import labelSvg from "../../assets/images/whyChooseUs/label.svg";
import gameSvg from "../../assets/images/whyChooseUs/game.svg";
import qrcodeSvg from "../../assets/images/whyChooseUs/qrcode.svg";
import FeaturesCarousel from "../ui/carousel/FeaturesCarousel";

const WhyChooseUs = ({
  carousel = false,
  about = false,
}: {
  carousel?: boolean;
  about?: boolean;
}) => {
  const { t } = useTranslate();
  return (
    <section
      className={`z-20 relative    ${
        about
          ? "bg-hero-gradient pt-[150px] py-20"
          : "bg-why-choose-us-gradient rounded-t-[30px] -mt-10 py-20 sm:py-10"
      } `}
    >
      <div className="flex lg:flex-col gap-12 sm:gap-5 items-center max-w-[1440px] mx-auto px-6">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[56px] lg:text-[40px] sm:text-[29px] px-10 xl:px-0 w-[45%] lg:w-full text-white font-semibold text-center sm:w-[70%]"
        >
          {t("why_should_you_choose_us")}
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 150 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" w-[55%] lg:w-full tracking-wider leading-[30px] px-10 lg:px-0 sm:text-sm sm:leading-[25px]"
        >
          {t("why_should_you_choose_us_paragraph")}
        </motion.p>
      </div>

      <div className="z-50 relative max-w-[1440px] mx-auto mt-20 flex items-center gap-32 xl:gap-16  2xl:px-6 xl:flex-col">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-[50%] xl:w-full "
        >
          <img
            className="mx-auto xl:w-[60%] sm:w-[90%]"
            src={iphoneMockup}
            alt="iphone-mockup"
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 150 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-[50%] xl:w-full mt-6 xl:mt-0"
        >
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-10 mt-10 sm:hidden">
            <div className="flex flex-col sm:flex-row gap-3 group cursor-pointer xl:items-center sm:items-start ">
              <span className="transition-all shrink-0">
                <img className="h-[40px] w-[40px]" src={giftSvg} alt="gift" />
              </span>
              <div className="flex flex-col xl:items-center sm:items-start">
                <h3 className="font-extrabold text-lg sm:text-base mb-3 sm:mb-1">
                  {t("exclusive_rewards")}
                </h3>
                <p className="text-sm text-zinc-500 w-[70%] sm:w-full xl:text-center sm:text-left">
                  {t("exclusive_rewards_paragraph")}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 group cursor-pointer xl:items-center sm:items-start">
              <span className=" transition-all shrink-0">
                <img className="h-[40px] w-[40px]" src={labelSvg} alt="label" />
              </span>
              <div className="flex flex-col xl:items-center sm:items-start">
                <h3 className="font-extrabold text-lg sm:text-base mb-3 sm:mb-1">
                  {t("easy_loyality_program")}
                </h3>
                <p className="text-sm text-zinc-500 w-[70%] sm:w-full xl:text-center sm:text-left">
                  {t("easy_loyality_program_paragraph")}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 group cursor-pointer xl:items-center sm:items-start">
              <span className=" transition-all shrink-0">
                <img className="h-[40px] w-[40px]" src={gameSvg} alt="game" />
              </span>
              <div className="flex flex-col xl:items-center sm:items-start">
                <h3 className="font-extrabold text-lg sm:text-base mb-3 sm:mb-1">
                  {t("discover_nearby")}
                </h3>
                <p className="text-sm text-zinc-500 w-[70%] sm:w-full xl:text-center sm:text-left">
                  {t("discover_nearby_paragraph")}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 group cursor-pointer xl:items-center sm:items-start">
              <span className=" transition-all shrink-0">
                <img
                  className="h-[40px] w-[40px]"
                  src={qrcodeSvg}
                  alt="qrcode"
                />
              </span>
              <div className="flex flex-col xl:items-center sm:items-start">
                <h3 className="font-extrabold text-lg sm:text-base mb-3 sm:mb-1">
                  {t("quick_redeem_with_qr_code")}
                </h3>
                <p className="text-sm text-zinc-500 w-[70%] sm:w-full xl:text-center sm:text-left">
                  {t("quick_redeem_with_qr_code_paragraph")}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden sm:block my-10">
            <FeaturesCarousel />
          </div>
        </motion.div>
      </div>

      {carousel && (
        <motion.div
          whileInView={{ y: 0 }}
          initial={{ y: 150 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="px-4 w-full 2xl:w-[90%] bg-secondary-tint max-w-[1440px] py-4 rounded mx-auto mt-20"
        >
          <PartnersCarousel />
        </motion.div>
      )}
    </section>
  );
};

export default WhyChooseUs;
