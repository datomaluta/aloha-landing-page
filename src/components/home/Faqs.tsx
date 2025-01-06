import { useSelector } from "react-redux";
import faqImg from "../../assets/images/faqs/faqImg.png";
import { useTranslate } from "../../hooks/useTranslate";
import Accordion from "../ui/accordion/Accordion";
import { motion } from "framer-motion";
import { RootState } from "../../redux/store";

const faqs = [
  {
    id: 1,
    header: "how_does_aloha_work",
    text: "how_does_aloha_work_answer",
    bullets: [
      "how_does_aloha_work_answer_bullet_1",
      "how_does_aloha_work_answer_bullet_2",
      "how_does_aloha_work_answer_bullet_3",
    ],
  },
  {
    id: 2,
    header: "what_can_i_do_with_the_rewards_i_earn",
    text: "what_can_i_do_with_the_rewards_i_earn_answer",
  },
  {
    id: 3,
    header: "is_aloha_free_to_use",
    text: "is_aloha_free_to_use_answer",
  },
  {
    id: 4,
    header: "how_do_i_invite_friends_and_what_do_i_get",
    text: "how_do_i_invite_friends_and_what_do_i_get_answer",
  },
  {
    id: 5,
    header: "what_makes_aloha_different_from_other_loyalty_apps",
    text: "what_makes_aloha_different_from_other_loyalty_apps_answer",
  },
  {
    id: 6,
    header: "which_businesses_can_i_use_aloha_with",
    text: "which_businesses_can_i_use_aloha_with_answer",
  },
  {
    id: 7,
    header: "is_my_personal_data_safe_with_aloha",
    text: "is_my_personal_data_safe_with_aloha_answer",
  },
];
const Faqs = () => {
  const { t } = useTranslate();
  const { lang } = useSelector((state: RootState) => state.lang);
  return (
    <section
      className={`py-20 px-32 lg:px-6 bg-faq-section-gradient pb-[500px] md:pb-[600px] ${
        lang === "ka" && "xl:pb-[700px]  md:pb-[750px]"
      }`}
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-[56px] lg:text-[40px] sm:text-[29px] font-semibold text-center mb-20 lg:mb-10 sm:mb-6"
      >
        {t("frequently_asked_questions")}
      </motion.h1>

      <div className="max-w-[1440px] mx-auto flex  gap-10 h-[670px] sm:h-[600px] xs:h-[680px]">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-[40%] lg:hidden my-auto"
        >
          <img src={faqImg} alt="faq" />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 150 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col gap-6 w-[60%] lg:w-full"
        >
          <Accordion faqs={faqs} />
        </motion.div>
      </div>
    </section>
  );
};

export default Faqs;
