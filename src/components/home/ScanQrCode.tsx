import { useTranslate } from "../../hooks/useTranslate";
import GeneralCard from "../ui/GeneralCard";
import iphone from "./../../assets/images/scanQrCode/iphone.png";
import { motion } from "framer-motion";
import gameSvg from "../../assets/images/whyChooseUs/game.svg";
import friendsSvg from "../../assets/images/whyChooseUs/friends.svg";

const ScanQrCode = () => {
  const { t } = useTranslate();
  return (
    <section className="py-20 relative bg-scan-qr-gradient px-32 lg:px-6">
      <div className="flex items-center lg:flex-col-reverse gap-16 max-w-[1440px] mx-auto  relative z-30 ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-1/2 lg:w-full"
        >
          <img
            className="mx-auto w-[80%] lg:w-[60%] sm:w-full"
            src={iphone}
            alt="iphone-screen"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 150 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-1/2 lg:w-full  lg:mt-0"
        >
          <div className="w-[80%] mx-auto xl:w-full">
            <h1 className="font-semibold text-[37px] sm:text-[29px] text-center flex flex-col uppercase gap-0 leading-[50px] sm:leading-[29px] mb-10">
              <span>{t("play_and_win")}</span>
              <span>{t("invite_friends")}</span>
            </h1>

            <div className="flex flex-col gap-10">
              <GeneralCard
                icon={gameSvg}
                className="bg-faq-gradient"
                header={t("play_and_win")}
                text={t("play_and_win_paragraph")}
              />
              <GeneralCard
                icon={friendsSvg}
                className="bg-faq-gradient"
                header={t("invite_friends")}
                text={t("invite_friends_paragraph")}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScanQrCode;
