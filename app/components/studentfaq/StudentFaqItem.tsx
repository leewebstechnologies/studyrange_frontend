"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./studentFaq.module.css";

const StudentFaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button
        className={styles.faqQuestion}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          className={`${styles.faqChevron} ${isOpen ? styles.open : ""}`}
          size={18}
        />
      </button>
      <div
        className={`${styles.faqAnswerWrapper} ${isOpen ? styles.open : ""}`}
      >
        <div className={styles.faqAnswer}>
          <div className={styles.faqAnswerInner}>{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default StudentFaqItem;
