import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import styles from "./admission.module.css";
import { API_BASE_URL } from "@/config/config";
import AdmissionFaq from "../admissionfaq/AdmissionFaq";

const stripHtml = (html: string) => {
  return html.replace(/<[^>]+>/g, "");
};

type AdmissionprocessItem = {
  id: number;
  content: string;
};

type AdmissionRequirementItem = {
  id: number;
  content: string;
};

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};



const getAdmissionFaqs = async (): Promise<FAQItem[]> => {
  const res = await fetch(`${API_BASE_URL}/faq`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch FAQs");
  }

  return res.json();
};

const getAdmissionservice = async () => {
  const res = await fetch(`${API_BASE_URL}/admissionservice`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

const getAdmissionprocess = async (): Promise<AdmissionprocessItem[]> => {
  const res = await fetch(`${API_BASE_URL}/admissionprocess`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data;
};

const getAdmissionrequirement = async (): Promise<AdmissionRequirementItem[]> => {
  const res = await fetch(`${API_BASE_URL}/admissionrequirement`, {
    cache: "no-store",
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch admission requirements");
  }
  
  return res.json();
};

type AdmissionTimelineItem = {
  id: number;
  content: string;
};

const getAdmissiontimeline = async (): Promise<AdmissionTimelineItem[]> => {
  const res = await fetch(`${API_BASE_URL}/admissiontimeline`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch admission timeline");
  }

  return res.json();
};

const Admission = async () => {
  const admissionservice = await getAdmissionservice();
  const admissionprocess = await getAdmissionprocess();
  const admissionrequirement = await getAdmissionrequirement();
  const admissiontimeline = await getAdmissiontimeline();
  const faq = await getAdmissionFaqs();

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardIcon}>
          <Image
            src="/images/services/user.png"
            width={64}
            height={64}
            alt="user"
          />
        </div>
        <div className={styles.cardHeaderContent}>
          <h2 className={styles.cardTitle}>{admissionservice.title}</h2>
          <p className={styles.cardDesc}>{admissionservice.description}</p>
        </div>
      </div>

      <div>
        <div className={styles.sectionLabel}>
          <Image
            src="/images/services/users.png"
            width={20}
            height={20}
            alt="users"
          />
          <span>Our Process</span>
        </div>
        <div className={styles.processGrid}>
          {admissionprocess.map((item, index) => (
            <div key={item.id} className={styles.processItem}>
              <div className={styles.processNumber}>{index + 1}</div>
              <div className={styles.processText}>{item.content}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.infoBoxes}>
        <div className={styles.infoBox}>
          <div className={styles.sectionLabel}>
            <Image
              src="/images/services/checkcircle2.png"
              width={18}
              height={18}
              alt="checkcircle2"
            />
            <span>Requirements</span>
          </div>
          <ul className={styles.list}>
            {admissionrequirement.map((req) => (
              <li key={req.id} className={styles.listItem}>
                <CheckCircle2
                  size={16}
                  fill="currentColor"
                  stroke="white"
                  className={styles.listIcon}
                />
                <span>{req.content}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.infoBox}>
          <div className={styles.sectionLabel}>
            <Image
              src="/images/services/clock.png"
              width={18}
              height={18}
              alt="clock"
            />
            <span>Timeline</span>
          </div>
          <div>
            {["Duration", "Sessions", "Deliverables"].map((label, index) => (
              <div key={label} className={styles.timelineItem}>
                <span className={styles.timelineLabel}>{label}:</span>{" "}
                {admissiontimeline[index]?.content || "N/A"}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className={styles.faqLabel}>Frequently Asked Questions</div>
        <div className={styles.faqContainer}>
          {faq.map((faq) => (
            <AdmissionFaq
              key={faq.id}
              question={stripHtml(faq.question)}
              answer={stripHtml(faq.answer)}
            />
          ))}
        </div>
      </div>
      <Link href="/contact">
        <button className={styles.ctaButton}>
          Get Started With Academic Advisory
        </button>
      </Link>
    </div>
  );
};

export default Admission;
