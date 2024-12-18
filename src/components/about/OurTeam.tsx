import { useTranslate } from "../../hooks/useTranslate";
import ceo from "./../../assets/images/about/ceo.jpg";
import teamMember1 from "./../../assets/images/about/teamMember1.jpg";
import teamMember2 from "./../../assets/images/about/teamMember2.jpg";
import TeamMemberCard from "./TeamMemberCard";
import { motion } from "framer-motion";

const OurTeam = () => {
  const { t } = useTranslate();
  return (
    <motion.section
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 150 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20 pb-[500px] bg-faq-section-gradient"
    >
      <h1 className="text-[56px] sm:text-[29px] font-semibold  sm:mb-8 text-center 2xl:px-6 ">
        {t("our_team_members")}
      </h1>

      <div className="">
        <div className="h-32 md:hidden"></div>
        <div className="max-w-[1440px] mx-auto 2xl:px-6 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-6">
          <TeamMemberCard image={ceo} position="CEO" fullname="Steve Jobs" />
          <TeamMemberCard
            image={teamMember1}
            position={t("designer")}
            fullname="Jessie Fernandez"
          />
          <TeamMemberCard
            image={teamMember2}
            position={t("marketing_manager")}
            fullname="Mark Zuckerberg"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default OurTeam;
