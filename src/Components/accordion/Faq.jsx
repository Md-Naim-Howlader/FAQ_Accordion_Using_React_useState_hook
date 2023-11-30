import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Faq = ({ faq }) => {
  const [toggle, setToggle] = useState(false);
  const { title, description } = faq;

  return (
    <article className="faq" onClick={() => setToggle(!toggle)}>
      <div className="faqTitle">
        <h4>{title}</h4>
        <button
          className={`${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <IoIosArrowForward />
        </button>
      </div>
      {toggle && <p>{description}</p>}
    </article>
  );
};

export default Faq;
