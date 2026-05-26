import React from "react";
import FinancialFaqItem from "./FinancialFaqItem";
import { API_BASE_URL } from "@/config/config";
import styles from "./financialFaq.module.css";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const stripHtml = (html: string) => {
  return html.replace(/<[^>]+>/g, "");
};

const getFinancialFaqs = async (): Promise<FAQItem[]> => {
  const res = await fetch(`${API_BASE_URL}/financialfaq`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch financial FAQs");
  }

  return res.json();
};

const FinancialFaq = async () => {
  const faqs = await getFinancialFaqs();

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div className={styles.faqContainer}>
      {faqs.map((item) => (
        <FinancialFaqItem
          key={item.id}
          question={stripHtml(item.question)}
          answer={stripHtml(item.answer)}
        />
      ))}
    </div>
  );
};

export default FinancialFaq;
