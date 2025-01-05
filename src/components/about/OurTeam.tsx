import { useTranslate } from "../../hooks/useTranslate";
import temoSophromadze from "./../../assets/images/about/team/temoSophromadze.jpg";
import lashaSurguladze from "./../../assets/images/about/team/lashaSurguladze.jpg";
import shotaMartkhoplishvili from "./../../assets/images/about/team/shotaMartkhoplishvili.jpg";
import nutsaZurebiani from "./../../assets/images/about/team/nutsaZurebiani.jpg";
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
      className="py-20 pb-[500px] md:pb-[700px] bg-faq-section-gradient px-32 lg:px-6"
    >
      <h1 className="text-[56px] sm:text-[29px] font-semibold  sm:mb-8 text-center  mb-20">
        {t("our_team_members")}
      </h1>

      <div className="">
        {/* <div className="h-32 md:hidden"></div> */}
        <div className="max-w-[1440px] mx-auto 2xl:px-6 grid grid-cols-4 xl:grid-cols-2 sm:grid-cols-1 place-items-center gap-x-6 gap-y-20">
          <TeamMemberCard
            image={temoSophromadze}
            position="CEO"
            fullname="temoSophromadze"
            linkedinUrl={
              "https://www.linkedin.com/in/temo-sophromadze-328908145/"
            }
          />
          <TeamMemberCard
            image={lashaSurguladze}
            position={t("CTO")}
            fullname="lashaSurguladze"
            linkedinUrl="https://www.linkedin.com/in/lasha-surguladze-a15289179/"
          />
          <TeamMemberCard
            image={shotaMartkhoplishvili}
            position={t("CFO")}
            fullname="shotaMartkhoplishvili"
            linkedinUrl="https://www.linkedin.com/in/shota-martkophlishvili-657011190/"
          />
          <TeamMemberCard
            image={nutsaZurebiani}
            position={t("CMO")}
            fullname="nutsaZurebiani"
            linkedinUrl="https://www.linkedin.com/in/nutsa-zurebiani-a7b782247/"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default OurTeam;
