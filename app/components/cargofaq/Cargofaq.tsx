"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./cargofaq.module.css";

const stripHtml = (html: string) => {
  return html.replace(/<[^>]+>/g, "");
};

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

interface CargofaqProps {
  faqs: FaqItem[];
}

const Cargofaq = ({ faqs }: CargofaqProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className={styles.faqSection}>
      <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
      <p className={styles.sectionSubtitle}>Get answers to common cargo shipping questions</p>

      <div className={styles.faqList}>
        {faqs.map((faq, i) => (
          <div className={styles.faqItem} key={faq.id}>
            <button
              className={styles.faqQuestion}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              {stripHtml(faq.question)}
              <ChevronDown
                size={20}
                className={`${styles.chevron} ${openFaq === i ? styles.rotated : ""}`}
              />
            </button>
            <div className={`${styles.faqAnswer} ${openFaq === i ? styles.open : ""}`}>
              <p>{stripHtml(faq.answer)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cargofaq;
