import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslate } from "../../hooks/useTranslate";

const TeamMemberCard = ({
  position,
  fullname,
  image,
  linkedinUrl,
}: {
  position: string;
  fullname: string;
  image: string;
  linkedinUrl: string;
}) => {
  const { t } = useTranslate();
  return (
    <div className="bg-secondary-tint  rounded-[20px] max-w-[357px] w-full overflow-hidden hover:-translate-y-6 hover:shadow-2xl transition-all cursor-pointer">
      <div className="rounded-b-[20px] h-[260px] 2xl:h-[220px] lg:h-[240px] sm: overflow-hidden">
        <img
          className="w-full h-full object-top object-cover"
          src={image}
          alt={fullname}
        />
      </div>
      <div className="flex flex-col items-center p-8 lg:p-5">
        <h3 className=" text-lg lg:text-base h-[50px] text-center">
          {position}
        </h3>
        <h2 className="text-2xl text-center font-bold my-5 lg:my-3 mb-8 lg:text-lg h-[50px] ">
          {t(fullname)}
        </h2>
        <div className="flex gap-4 mt-auto">
          {/* <Link
            to="/"
            className="bg-secondary w-max p-2 rounded-full hover:bg-primary transition-all"
          >
            <FaFacebookF className="text-white" />
          </Link>
          <Link
            to={"/"}
            className="bg-secondary w-max p-2 rounded-full hover:bg-primary transition-all"
          >
            <FaInstagram className="text-white" />
          </Link> */}
          <Link
            target="_blank"
            to={linkedinUrl}
            className="bg-secondary w-max p-3 rounded-full hover:bg-primary transition-all"
          >
            <FaLinkedin className="text-white text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
