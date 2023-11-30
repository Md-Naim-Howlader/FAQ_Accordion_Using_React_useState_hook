import { useState } from "react";
import faqdata from "./faqData.json";
import Faq from "./Faq";
const Accordion = () => {
  const [faqData] = useState(faqdata);
  return (
    <div className="faqsContainer">
      <div className="faqs">
        <h2>FAQ</h2>
        {faqData.map((faq) => (
          <Faq key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
