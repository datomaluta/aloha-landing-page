import { useTranslate } from "../../hooks/useTranslate";
import apple from "./../../assets/images/Apple.svg";
import google from "./../../assets/images/Google.svg";
import iphones from "./../../assets/images/iphones-6.png";

const WhatAreYouWaiting = () => {
  const { t } = useTranslate();
  return (
    <section className="relative min-h-[600px] lg:min-h-0  flex">
      <div className="max-w-[1440px] w-full mx-auto flex gap-10 lg:flex-col items-center 2xl:px-6 ">
        <div>
          <h1 className="text-[42px] 2xl:text-[32px] lg:text-[28px] sm:text-[20px] font-bold text-center flex flex-col">
            <span className="whitespace-nowrap">
              {t("what_are_you_waiting_for")}
            </span>
            <span>{t("download_now")}</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mt-10  ">
            <button className="2xl:h-[40px]">
              <img className="h-full" src={apple} alt="apple-store" />
            </button>
            <button className="2xl:h-[40px]">
              <img className="h-full" src={google} alt="google-play" />
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <img src={iphones} alt="iphones" />
        </div>
      </div>

      <img
        className="absolute left-[40%] top-0 right-0 object-cover h-full lg:hidden"
        src={iphones}
        alt="iphones"
      />
    </section>
  );
};

export default WhatAreYouWaiting;
