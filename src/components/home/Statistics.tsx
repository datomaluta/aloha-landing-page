import { CiCircleCheck } from "react-icons/ci";
import { IoCloudDownloadOutline, IoStarOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Counter from "../statistic/Counter";
import { useTranslate } from "../../hooks/useTranslate";

const Statistics = () => {
  const { t } = useTranslate();
  return (
    <motion.section className="py-20 bg-secondary-tint text-white overflow-hidden">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-[1440px] mx-auto xl:px-6"
      >
        <h1 className="text-[56px] font-semibold text-center text-white md:text-[30px]">
          {t("explore_our_statistics")}
        </h1>

        <div className="flex justify-center items-center gap-28 xl:gap-16 sm:gap-5 mt-16 md:mt-6">
          <div className="text-center min-w-[150px] md:min-w-[110px] sm:min-w-0">
            <span className="text-[53px] md:text-[30px] sm:text-[18px] leading-[60px] md:leading-[40px] sm:leading-[30px] mb-2">
              +<Counter end={200} />
            </span>
            <div className="flex items-center gap-2 opacity-50 justify-center text-2xl md:text-lg sm:text-sm">
              <IoCloudDownloadOutline />
              <span>{t("download")}</span>
            </div>
          </div>

          <span className="h-[82px] md:h-[60px] w-[2px] bg-white opacity-20"></span>

          <div className="text-center min-w-[150px] md:min-w-[110px] sm:min-w-0">
            <span className="text-[53px] md:text-[30px] sm:text-[18px] leading-[60px] md:leading-[40px] sm:leading-[30px] mb-2 ">
              +<Counter end={480} />
            </span>
            <div className="flex items-center gap-2 opacity-50 justify-center text-2xl md:text-lg sm:text-sm">
              <CiCircleCheck />
              <span>{t("clients")}</span>
            </div>
          </div>

          <span className="h-[82px] md:h-[60px] w-[2px] bg-white opacity-20"></span>

          <div className="text-center min-w-[150px] md:min-w-[110px] sm:min-w-0">
            <span className="text-[53px] md:text-[30px] sm:text-[18px] leading-[60px] md:leading-[40px] sm:leading-[30px] mb-2">
              +<Counter end={180} />
            </span>
            <div className="flex items-center gap-2 opacity-50 justify-center text-2xl md:text-lg sm:text-sm">
              <IoStarOutline />
              <span>{t("rating")}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Statistics;
