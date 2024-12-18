import iphone from "./../../assets/images/howItWorks/iphone.png";
import bottomLayer from "./../../assets/images/howItWorks/bottomLayer.png";
import { motion } from "framer-motion";
import { useTranslate } from "../../hooks/useTranslate";
import GeneralCard from "../ui/GeneralCard";

const HowItWorks = () => {
  const { t } = useTranslate();
  return (
    <section className=" bg-secondary  relative overflow-hidden py-20 sm:py-10">
      <div className="flex items-center lg:flex-col lg:gap-10 max-w-[1440px] mx-auto z-50 relative 2xl:px-6 ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-1/2 lg:w-full  lg:mt-0 "
        >
          <h1 className="text-[34px] sm:text-[18px] font-bold w-[80%] sm:w-full lg:mx-auto  mb-14 sm:mb-8 text-center uppercase">
            {t("how_it_works")}
          </h1>
          <ul className="flex flex-col gap-10 sm:gap-6 w-[80%] sm:w-full lg:mx-auto sm:text-sm">
            <li>
              <GeneralCard
                header="Creative Design"
                text={t("how_it_works_paragraph_1")}
              />
            </li>
            <li>
              <GeneralCard
                header="Creative Design"
                text={t("how_it_works_paragraph_2")}
              />
            </li>
          </ul>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 150 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-1/2 lg:w-full"
        >
          <img className="lg:mx-auto" src={iphone} alt="iphone-mockup" />
        </motion.div>
      </div>

      <img
        className="absolute -bottom-[10%] lg:bottom-0 w-full z-30 sm:w-[140%] sm:max-w-max"
        src={bottomLayer}
        alt="bottom-layer"
      />
    </section>
  );
};

export default HowItWorks;
