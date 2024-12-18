import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo-white.svg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslate } from "../../../hooks/useTranslate";

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { t } = useTranslate();

  return (
    <>
      <header className="fixed top-0 max-w-[1920px] w-full z-[999] mx-auto bg-secondary bg-opacity-30 backdrop-blur-3xl py-7 md:py-5 2xl:px-6 transition-all">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link to={"/"}>
            <img className="h-[51px] md:h-[35px]" src={logo} alt="logo" />
          </Link>
          <nav className="font-normal md:hidden">
            <ul className="flex gap-16 items-center">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-white "
                  }
                  to={"/"}
                >
                  {t("home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-white"
                  }
                  to={"/about"}
                >
                  {t("about")}
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-white"
                  }
                  to={"/pricing"}
                >
                  {t("pricing")}
                </NavLink>
              </li> */}
              <li>
                <Link
                  to={"/contact"}
                  className="bg-primary text-white px-8 py-[14px] rounded-[10px] font-medium"
                >
                  {t("try_for_free")}
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className="hidden md:block"
            onClick={() => setMobileMenuIsOpen(true)}
          >
            <IoMenu className="text-white h-8 w-8" />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {mobileMenuIsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-secondary fixed top-0 w-full h-screen z-[9999] right-0 bottom-0 left-0 flex justify-center items-center"
          >
            <button
              onClick={() => setMobileMenuIsOpen(false)}
              className="absolute top-5 right-5"
            >
              <IoMdClose className="text-3xl text-white" />
            </button>
            <nav className="mb-40 text-xl text-center">
              <ul className="flex flex-col gap-6">
                <li>
                  <Link to={"/"} className={"text-white"}>
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} className={"text-white"}>
                    {t("about")}
                  </Link>
                </li>
                {/* <li>
                  <Link to={"/pricing"} className={"text-white"}>
                    {t("pricing")}
                  </Link>
                </li> */}
                <li>
                  <Link
                    to={"/contact"}
                    className="bg-white text-primar px-6 py-2 rounded-[10px] text-secondary"
                  >
                    {t("try_for_free")}
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
