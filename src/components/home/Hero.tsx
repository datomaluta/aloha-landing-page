import google from "./../../assets/images/Google.svg";
import apple from "./../../assets/images/Apple.svg";
// import heroCircle from "./../../assets/images/hero-circle.png";
import { motion } from "framer-motion";
import { useTranslate } from "../../hooks/useTranslate";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import iphones from "./../../assets/images/hero/iphones.png";

const Hero = () => {
  const { t } = useTranslate();
  const { lang } = useSelector((state: RootState) => state.lang);
  return (
    <section className="bg-hero-gradient text-white rounded-t-[12px] pt-[150px] pb-[300px] xl:pb-[400px] lg:pb-[200px] sm:pb-[100px] overflow-hidden relative min-h-screen">
      <div className="max-w-[1440px] mx-auto 2xl:px-6">
        <div className="flex lg:flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:items-center lg:w-full z-50 w-1/2 "
          >
            <h2 className="text-4xl 2xl:text-3xl sm:text-lg text-zinc-100 mb-3 italic font-light">
              {t("welcome_to_aloha")}
            </h2>

            <h1
              className={`text-zinc-100 font-bold text-[72px] 2xl:text-[56px] 2xl:leading-[60px] lg:text-5xl sm:text-3xl  flex flex-col gap-0 leading-[80px] mb-5 lg:items-center lg:text-center   ${
                lang === "ka" ? " tracking-normal" : "tracking-tight"
              }`}
            >
              <span>
                <span className="text-border sm:text-border-sm text-secondary">
                  {t("transforming")}{" "}
                </span>
                {t("loyalty")}
              </span>
              <span>{t("into_fun")}</span>
            </h1>
            <p className="opacity-50 max-w-[520px] tracking-wider leading-[35px] text-lg 2xl:text-base 2xl:leading-[30px] lg:text-center lg:text-base sm:text-sm sm:leading-[30px]">
              {t("hero_paragraph")}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="z-50 hidden lg:block  mt-10 px-6"
            >
              <img
                className="h-full sm:h-auto"
                src={iphones}
                alt="iphones-screens"
              />
            </motion.div>

            <div className="flex items-center gap-4 mt-10 lg:mb-16  z-50 ">
              <button className="2xl:h-[80%]">
                <img
                  className="h-full sm:h-[40px]"
                  src={apple}
                  alt="apple-store"
                />
              </button>
              <button className="2xl:h-[80%]">
                <img
                  className="h-full sm:h-[40px]"
                  src={google}
                  alt="google-play"
                />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 block relative z-50 lg:hidden "
          >
            <img className="h-full " src={iphones} alt="iphones-screens" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
