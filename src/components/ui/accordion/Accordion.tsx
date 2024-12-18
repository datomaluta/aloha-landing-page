import { useState } from "react";
import AccordionItemOne from "./AccordionItemOne";

export type FAQ = {
    header: string;
    id: number;
    text: string;
  };
  

const Accordion = ({ faqs }: { faqs: FAQ[] }) => {
  const [active, setActive] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <div>
      {faqs.map((faq) => {
        return (
          <AccordionItemOne
            key={faq.id}
            active={active}
            handleToggle={handleToggle}
            faq={faq}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
