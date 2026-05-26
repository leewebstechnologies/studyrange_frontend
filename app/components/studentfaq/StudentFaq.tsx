import React from "react";
import StudentFaqItem from "./StudentFaqItem";
import { API_BASE_URL } from "@/config/config";
import styles from "./studentFaq.module.css";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const stripHtml = (html: string) => {
  return html.replace(/<[^>]+>/g, "");
};

const getStudentFaqs = async (): Promise<FAQItem[]> => {
  const res = await fetch(`${API_BASE_URL}/studentfaq`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch student FAQs");
  }

  return res.json();
};

const StudentFaq = async () => {
  const faqs = await getStudentFaqs();

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div className={styles.faqContainer}>
      {faqs.map((item) => (
        <StudentFaqItem
          key={item.id}
          question={stripHtml(item.question)}
          answer={stripHtml(item.answer)}
        />
      ))}
    </div>
  );
};

export default StudentFaq;
