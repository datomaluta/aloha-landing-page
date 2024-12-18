import { useTranslate } from "../hooks/useTranslate";
import DefaultLayout from "../layout/DefaultLayout";
import iphone from "./../assets/images/contact/iphone.png";
import letterSvg from "./../assets/images/contact/letter.svg";
import locationSvg from "./../assets/images/contact/location.svg";
import phoneSvg from "./../assets/images/contact/phone.svg";
import { motion } from "framer-motion";

const Contact = () => {
  const { t } = useTranslate();
  return (
    <DefaultLayout>
      <section className="relative mb-20 pt-[150px] bg-contact-section-gradient">
        <h1 className="text-[56px] sm:text-[29px] font-semibold text-center 2xl:px-6">
          {t("contact_us")}
        </h1>

        <div className="max-w-[1440px] mx-auto mt-16 sm:mt-10 flex gap-10 2xl:px-6 z-30 relative">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 lg:hidden"
          >
            <img className="mx-auto" src={iphone} alt="iphone-screen" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 lg:w-full bg-contact-gradient shadow-xl py-12 px-16 xl:py-8 xl:px-6 lg:py-12 lg:px-10 sm:px-4 rounded-2xl"
          >
            <h3 className="text-center  w-[60%] sm:w-full mx-auto text-xl xl:text-base">
              {t("contact_form_paragraph")}
            </h3>

            <form className="flex flex-col gap-6 mt-10 sm:text-sm">
              <input
                className="py-3 px-4 bg-secondary rounded-lg focus:border-primary outline-none"
                type="text"
                placeholder={t("what_is_your_number")}
              />
              <input
                className=" py-3 px-4 bg-secondary rounded-lg focus:border-primary outline-none"
                type="text"
                placeholder={t("what_is_your_email")}
              />
              <textarea
                className=" py-3 px-4 bg-secondary rounded-lg focus:border-primary outline-none resize-none"
                name=""
                id=""
                rows={5}
                placeholder={t("write_your_message_here")}
              ></textarea>
              <button className="bg-[#308DFC] px-3 py-2 w-max rounded-lg text-white mx-auto mt-4">
                {t("send_message")}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 mx-auto xl:px-6 mb-32 bg-contact-information-gradient pb-[500px]"
      >
        <h1 className="text-[56px] sm:text-[29px] font-semibold text-center 2xl:px-6">
          {t("our_contact_information")}
        </h1>

        <div className="flex sm:flex-col sm:items-center  gap-10 md:gap-6 sm:gap-10  justify-center mt-16">
          <div className="max-w-[370px] w-full bg-contact-gradient shadow-xl px-10 py-16 lg:py-8 lg:px-6 flex flex-col items-center rounded-[20px]">
            <img
              src={locationSvg}
              alt="location"
              className="h-16 w-16 lg:h-12 lg:w-12"
            />
            <h2 className="text-2xl font-medium my-7 md:text-lg md:my-4">
              {t("address")}
            </h2>
            <p className="text-gray-500">{t("actual_address_street")}</p>
            <p className="text-gray-500">{t("actual_address_city")}</p>
          </div>
          <div className="max-w-[370px] w-full bg-contact-gradient shadow-xl px-10 py-16 lg:py-8 lg:px-6 flex flex-col items-center rounded-[20px]">
            <img
              src={phoneSvg}
              alt="phone"
              className="h-16 w-16 lg:h-12 lg:w-12"
            />
            <h2 className="text-2xl font-medium my-7 md:text-lg md:my-4">
              {t("phone")}
            </h2>
            <p className="text-gray-500">+995 598 455 677</p>
            <p className="text-gray-500">+995 598 544 899</p>
          </div>
          <div className="max-w-[370px] w-full bg-contact-gradient shadow-xl px-10 py-16 lg:py-8 lg:px-6 flex flex-col items-center rounded-[20px]">
            <img
              src={letterSvg}
              alt="letter"
              className="h-16 w-16 lg:h-12 lg:w-12"
            />
            <h2 className="text-2xl font-medium my-7 md:text-lg md:my-4">
              {t("email")}
            </h2>
            <p className="text-gray-500">Info@aloha.com</p>
            <p className="text-gray-500">Support@aloha.com</p>
          </div>
        </div>
      </motion.section>
    </DefaultLayout>
  );
};

export default Contact;
