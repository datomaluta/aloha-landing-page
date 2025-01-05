const GeneralCard = ({
  header,
  text,
  icon,
  className,
}: {
  header: string;
  text: string;
  icon: string;
  className?: string;
}) => {
  return (
    <div
      className={`bg-secondary-tint py-5 px-4 rounded-xl flex items-start gap-4 ${className}`}
    >
      <img className="mt-4 h-8" src={icon} alt="svg" />
      <div>
        <h3 className="font-semibold uppercase mb-2 sm:text-sm">{header}</h3>
        <p className="opacity-50 font-light sm:text-sm">{text}</p>
      </div>
    </div>
  );
};

export default GeneralCard;
