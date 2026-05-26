"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./services.module.css";

type FAQ = {
  question: string;
  answer: string;
};

const Faq = ({ faqs }: { faqs: FAQ[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className={styles.faqLabel}>Frequently Asked Questions</div>

      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`${styles.faqChevron} ${
                  openIndex === index ? styles.open : ""
                }`}
                size={18}
              />
            </button>

            <div
              className={`${styles.faqAnswerWrapper} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <div className={styles.faqAnswer}>
                <div className={styles.faqAnswerInner}>{faq.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
