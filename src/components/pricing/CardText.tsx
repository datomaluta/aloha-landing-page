import { FaCheck } from "react-icons/fa6";

const CardText = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center gap-2">
      <span className="bg-green-500 w-max p-1 rounded-full block">
        <FaCheck className="text-white text-xs" />
      </span>
      <p className="lg:text-sm">{text}</p>
    </li>
  );
};

export default CardText;
