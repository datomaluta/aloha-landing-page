import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FAQ } from "./Accordion";
import { useTranslate } from "../../../hooks/useTranslate";

type FaqItem = {
  active: number | null;
  handleToggle: (index: number) => void;
  faq: FAQ;
};

const AccordionItemOne: React.FC<FaqItem> = ({ active, handleToggle, faq }) => {
  const { header, id, text, bullets } = faq;
  const { t } = useTranslate();

  return (
    <div className="rounded-md shadow-md  bg-secondary-tint sm:text-sm mb-4">
      <button
        className={`flex w-full gap-2 items-center justify-between p-6 sm:p-4 rounded-t-md transition-all ${
          active === id ? "active bg-faq-gradient" : ""
        }`}
        onClick={() => handleToggle(Number(id))}
      >
        <div className={`${active === id ? "" : ""}`}>
          <h4 className="text-left font-semibold">{t(header)}</h4>
        </div>

        <FaChevronDown
          className={`text-primary text-xl sm:text-base transition-all shrink-0 ${
            active === id ? "rotate-180 text-white" : ""
          }`}
        />
      </button>

      <div
        className={`mt-5 sm:mt-3 p-6 sm:p-4 transition-all font-light ${
          active === id ? "block" : "hidden"
        }`}
      >
        <p className=" ">{t(text)}</p>

        {bullets && (
          <ul className="mt-4">
            {bullets.map((item, index) => (
              <li className="text-sm mb-2" key={index}>
                • {t(item)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AccordionItemOne;
