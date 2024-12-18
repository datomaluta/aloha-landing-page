import whiteLogo from "./../../../assets/images/logo-white.svg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useTranslate } from "../../../hooks/useTranslate";
import LanguageDropdown from "./LanguageDropdown";

const Footer = () => {
  const { lang } = useSelector((state: RootState) => state.lang);
  const { t } = useTranslate();
  return (
    <footer className="max-w-[1920px] mx-auto absolute bottom-0 w-full backdrop-blur-3xl bg-secondary bg-opacity-40 text-white ">
      <div className="relative z-20 ">
        <div className="max-w-[1440px] mx-auto 2xl:px-6 sm:px-3 z-20 relative py-28 lg:py-20">
          <div className="lg:block hidden mb-8 shrink-0">
            <img className="mt-auto lg:h-[40px]" src={whiteLogo} alt="" />
          </div>

          <div
            className={`flex gap-28 2xl:gap-10 lg:gap-14 sm:gap-4 justify-between`}
          >
            <div className="flex lg:hidden">
              <img className="mt-auto" src={whiteLogo} alt="" />
            </div>

            <div>
              <h1 className="font-bold uppercase sm:text-xs">{t("company")}</h1>
              <ul
                className={`flex flex-col gap-3 opacity-70 mt-4 ${
                  lang === "en"
                    ? "text-sm sm:text-xs"
                    : "text-xs sm:text-[10px]"
                }`}
              >
                <li>
                  <Link to={"/"}>{t("about")}</Link>
                </li>
                <li>
                  <Link to={"/"}>{t("careers")}</Link>
                </li>
                <li>
                  <Link to={"/"}>{t("blog")}</Link>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold uppercase sm:text-xs">
                {t("services")}
              </h1>
              <ul
                className={`flex flex-col gap-3 opacity-70 mt-4 ${
                  lang === "en"
                    ? "text-sm sm:text-xs"
                    : "text-xs sm:text-[10px]"
                }`}
              >
                <li>
                  <Link to={"/"}>{t("rewards_program")}</Link>
                </li>
                <li>
                  <Link to={"/"}>{t("partners")}</Link>
                </li>
                <li>
                  <Link to={"/"}>{t("invite_friends")}</Link>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold uppercase sm:text-xs">{t("legal")}</h1>
              <ul
                className={`flex flex-col gap-3 opacity-70 mt-4 ${
                  lang === "en"
                    ? "text-sm sm:text-xs"
                    : "text-xs sm:text-[10px]"
                }`}
              >
                <li>
                  <Link to={"/"}>{t("privacy_policy")}</Link>
                </li>
                <li>
                  <Link to={"/"}>{t("terms_of_service")}</Link>
                </li>
                <li>
                  <Link to={"/"}>{t("cookie_service")}</Link>
                </li>
              </ul>
            </div>

            <div className="lg:mt-6 md:hidden">
              <div className="flex gap-4">
                <div className="bg-blue-500 w-max p-2 rounded-full">
                  <FaFacebookF />
                </div>
                <div className="bg-blue-500 w-max p-2 rounded-full">
                  <FaLinkedin />
                </div>
                <div className="bg-blue-500 w-max p-2 rounded-full">
                  <BsTwitterX />
                </div>
                <div className="bg-blue-500 w-max p-2 rounded-full">
                  <FaInstagram />
                </div>
              </div>
              <div className="pb-10">
                <LanguageDropdown />
              </div>
            </div>
          </div>

          <div className="hidden md:block mt-10">
            <div className="flex gap-4">
              <div className="bg-blue-500 w-max p-2 rounded-full">
                <FaFacebookF />
              </div>
              <div className="bg-blue-500 w-max p-2 rounded-full">
                <FaLinkedin />
              </div>
              <div className="bg-blue-500 w-max p-2 rounded-full">
                <BsTwitterX />
              </div>
              <div className="bg-blue-500 w-max p-2 rounded-full">
                <FaInstagram />
              </div>
            </div>
            <div className="pb-10">
              <LanguageDropdown />
            </div>
          </div>
        </div>
      </div>

      {/* <img
          className="absolute -bottom-[75%] w-[100%]  z-30"
          src={footerMainLayer}
          alt="footer-main-layer"
        /> */}
      {/* <img
        className="absolute top-0 w-full right-0 -translate-y-[65%] sm:-translate-y-[50%] z-10"
        src={iphoneWithLayer}
        alt="iphone-mockup"
      /> */}
    </footer>
  );
};

export default Footer;
