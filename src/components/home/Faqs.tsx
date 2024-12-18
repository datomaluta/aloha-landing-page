import faqImg from "../../assets/images/faqs/faqImg.png";
import { useTranslate } from "../../hooks/useTranslate";
import Accordion from "../ui/accordion/Accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    header: "how_do_i_register",
    text: "how_do_i_register_answer",
  },
  {
    id: 2,
    header: "how_do_i_collect_stickers",
    text: "how_do_i_register_answer",
  },
  {
    id: 3,
    header: "how_can_i_view_voucher_history",
    text: "how_do_i_register_answer",
  },
  {
    id: 4,
    header: "how_i_transfer_my_vouchers_to_a_friend",
    text: "how_do_i_register_answer",
  },
  {
    id: 5,
    header: "what_happens_if_my_voucher_expires",
    text: "how_do_i_register_answer",
  },
];

const Faqs = () => {
  const { t } = useTranslate();
  return (
    <section className="py-20 2xl:px-6 bg-faq-section-gradient pb-[500px]">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-[56px] lg:text-[40px] sm:text-[29px] font-semibold text-center mb-20 lg:mb-10 sm:mb-6"
      >
        {t("frequently_asked_questions")}
      </motion.h1>

      <div className="max-w-[1440px] mx-auto flex gap-10 h-[670px] sm:h-[600px] xs:h-[680px]">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-[40%] lg:hidden"
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
