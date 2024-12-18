import DefaultLayout from "../layout/DefaultLayout";
import CardText from "../components/pricing/CardText";
import { motion } from "framer-motion";
import { useTranslate } from "../hooks/useTranslate";

const Pricing = () => {
  const { t } = useTranslate();
  return (
    <DefaultLayout>
      <motion.section
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="2xl:px-6 pt-[150px] pb-[500px] bg-hero-gradient"
      >
        <div className="max-w-[1440px] mx-auto">
          {" "}
          <h1 className="text-[56px] sm:text-[29px] font-semibold text-center 2xl:px-6">
            {t("pricing")}
          </h1>
          <div className="mx-auto grid grid-cols-3 gap-10 items-start bg-secondary-tint lg:bg-transparent shadow-xl place-items-center rounded-[35px] p-10 lg:p-5 sm:p-0 pb-20 mt-16 sm:mt-8 lg:grid-cols-1 sm:bg-transparent sm:shadow-none">
            {/* BASIC PLAN */}
            <div className="max-w-[332px] mt-20 w-full px-6 py-9 group cursor-pointer hover:shadow-xl hover:-translate-y-4 hover:bg-secondary lg:hover:bg-secondary-tint rounded-[35px] transition-all flex flex-col h-full lg:mt-0 lg:shadow-xl  bg-secondary-tint">
              <h3 className="font-semibold  mb-4">{t("basic_plan")}</h3>
              <div className="flex gap-3 items-center">
                <h2 className=" text-5xl lg:text-3xl font-extrabold">$0</h2>
                <div className="text-sm lg:text-xs text-stone-400 flex flex-col">
                  <span>per editor/month</span>
                  <span>billed monthly</span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mt-10 mb-16 text-gray-300">
                <CardText text="User Registration Bonus" />
                <CardText text="Free Consultation" />
                <CardText text="Access to member gallery" />
                <CardText text="Optional credit top ups" />
                <CardText text="3 concurent fast jobs" />
                <CardText text="12 concurent fast jobs" />
                <CardText text="Optional credit top ups" />
                <CardText text="3 concurent fast jobs" />
                <CardText text="12 concurent fast jobs" />
              </ul>

              <button className="px-4 py-2 text-purple-200 bg-[#374161] opacity-60 group-hover:opacity-100 rounded-lg w-full mt-auto">
                {t("get_started")}
              </button>
            </div>

            {/* BUSINESS PLAN */}
            <div className="max-w-[332px] w-full h-full flex flex-col bg-gradient-to-b from-[#C84D4E] to-[#5668F7] text-white px-6 py-9 group cursor-pointer rounded-[35px] transition-all">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold ">{t("business_plan")}</h3>
                <span className="bg-white text-[#1D2127] px-2 py-1 rounded-lg text-sm lg:text-xs">
                  {t("most_popular")}
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <h2 className="text-5xl lg:text-3xl font-extrabold">$30</h2>
                <div className="text-sm lg:text-xs text-stone-300 flex flex-col">
                  <span>per editor/month</span>
                  <span>billed monthly</span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mt-10 mb-16">
                <CardText text="User Registration Bonus" />
                <CardText text="Free Consultation" />
                <CardText text="Access to member gallery" />
                <CardText text="Optional credit top ups" />
                <CardText text="3 concurent fast jobs" />
                <CardText text="12 concurent fast jobs" />
                <CardText text="Optional credit top ups" />
                <CardText text="3 concurent fast jobs" />
                <CardText text="12 concurent fast jobs" />
              </ul>

              <button className="px-4 py-2 text-white bg-[#308DFC] group-hover:opacity-100 rounded-lg w-full mt-auto">
                {t("get_started")}
              </button>
            </div>

            {/* PREMIUM PLAN */}
            <div className="max-w-[332px] mt-20 w-full h-full px-6 py-9 group cursor-pointer hover:shadow-xl hover:-translate-y-4 hover:bg-secondary lg:hover:bg-secondary-tint rounded-[35px] transition-all  flex flex-col  lg:mt-0 lg:shadow-xl   bg-secondary-tint">
              <h3 className="font-semibold mb-4">{t("premium_plan")}</h3>
              <div className="flex gap-3 items-center">
                <h2 className="text-5xl lg:text-3xl font-extrabold">$60</h2>
                <div className="text-sm lg:text-xs text-stone-400 flex flex-col">
                  <span>per editor/month</span>
                  <span>billed monthly</span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mt-10 mb-16 text-gray-300">
                <CardText text="User Registration Bonus" />
                <CardText text="Free Consultation" />
                <CardText text="Access to member gallery" />
                <CardText text="Optional credit top ups" />
                <CardText text="3 concurent fast jobs" />
                <CardText text="12 concurent fast jobs" />
                <CardText text="Optional credit top ups" />
                <CardText text="3 concurent fast jobs" />
                <CardText text="12 concurent fast jobs" />
              </ul>

              <button className="px-4 py-2 text-purple-200 bg-[#374161] opacity-60 group-hover:opacity-100 rounded-lg w-full mt-auto">
                {t("get_started")}
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </DefaultLayout>
  );
};

export default Pricing;
