import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import styles from "./financial.module.css";
import { API_BASE_URL } from "@/config/config";
import FinancialFaq from "../financialfaq/FinancialFaq";

const stripHtml = (html: string) => {
  return html.replace(/<[^>]+>/g, "");
};


type FinancialProcessItem = {
  id: number;
  heading: string;
  content: string;
};

type FinancialRequirementItem = {
  id: number;
  content: string;
};

type FinancialTimelineItem = {
  id: number;
  content: string;
};



const getFinancialAdvice = async () => {
  const res = await fetch(`${API_BASE_URL}/financialadvice`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

const getFinancialProcess = async (): Promise<FinancialProcessItem[]> => {
  const res = await fetch(`${API_BASE_URL}/financialprocess`, {
    cache: "no-store",
  });

  return res.json();
};

const getFinancialRequirement = async (): Promise<
  FinancialRequirementItem[]
> => {
  const res = await fetch(`${API_BASE_URL}/financialrequirement`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch financial requirements");
  }

  return res.json();
};

const getFinancialTimeline = async (): Promise<FinancialTimelineItem[]> => {
  const res = await fetch(`${API_BASE_URL}/financialtimeline`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch financial timeline");
  }

  return res.json();
};



const Financial = async () => {
  const financialadvice = await getFinancialAdvice();
  const financialprocess = await getFinancialProcess();
  const financialrequirement = await getFinancialRequirement();
  const financialtimeline = await getFinancialTimeline();


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
          <h2 className={styles.cardTitle}>{financialadvice.title}</h2>
          <p className={styles.cardDesc}>{financialadvice.description}</p>
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
          {financialprocess.map((item, index) => (
            <div key={item.id} className={styles.processItem}>
              <div className={styles.processNumber}>{index + 1}</div>

              <div className={styles.processContentWrapper}>
                <div className={styles.processHeading}>{item.heading}</div>
                <div className={styles.processText}>{item.content}</div>
              </div>
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
            {financialrequirement.map((req) => (
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
                {financialtimeline[index]?.content || "N/A"}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className={styles.faqLabel}>Frequently Asked Questions</div>

        <FinancialFaq />
      </div>

      <Link href="/contact">
        <button className={styles.ctaButton}>
          Get Started With Financial Advisory
        </button>
      </Link>
    </div>
  );
};

export default Financial;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronDown, CheckCircle2 } from "lucide-react";
// import styles from "./financial.module.css";

// const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className={styles.faqItem}>
//       <button
//         className={styles.faqQuestion}
//         onClick={() => setIsOpen(!isOpen)}
//         aria-expanded={isOpen}
//       >
//         <span>{question}</span>
//         <ChevronDown className={`${styles.faqChevron} ${isOpen ? styles.open : ""}`} size={18} />
//       </button>
//       <div className={`${styles.faqAnswerWrapper} ${isOpen ? styles.open : ""}`}>
//         <div className={styles.faqAnswer}>
//           <div className={styles.faqAnswerInner}>{answer}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Financial = () => {
//   const service = {
//     title: "Financial Advice",
//     description: "As an Education Consulting firm, our job goes beyond getting our students institutions to study. We want to be a part of the balance regarding your financial reality.",
//     process: [
//       { bold: "Profile Assessment:", text: "We evaluate your academic background, interests, career objectives, and financial parameters to establish your foundation." },
//       { bold: "Programme Matching:", text: "We identify academic programmes that align with your qualifications, ambitions, and budget considerations." },
//       { bold: "University Shortlisting:", text: "We shortlist suitable universities based on global rankings, course quality, location, employability outcomes, and affordability." },
//       { bold: "Application Roadmap:", text: "We develop a detailed timeline and roadmap outlining deadlines, required documents, actions for a successful application process." }
//     ],
//     requirements: [
//       "Academic transcripts and certificates",
//       "Standardized test scores (if available)",
//       "Career interests and preferences",
//       "Budget considerations"
//     ],
//     timeline: {
//       Duration: "2-4 weeks",
//       Sessions: "2-3 personalized consultations",
//       Deliverables: "A tailored university shortlist with program and cost analysis"
//     },
//     faqs: [
//       {
//         question: "How many universities will you recommend?",
//         answer: "We typically recommend 3 to 5 universities max total; target, safe, reach categories curated for your profile."
//       },
//       {
//         question: "Can I change my program preferences later?",
//         answer: "You are flexible to switch program dependent on your enrollment in your last phase."
//       }
//     ]
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.cardTop}>
//         <div className={styles.cardIcon}>
//           <Image
//             src="/images/services/user.png"
//             width={64}
//             height={64}
//             alt="user"
//           />
//         </div>
//         <div className={styles.cardHeaderContent}>
//           <h2 className={styles.cardTitle}>{service.title}</h2>
//           <p className={styles.cardDesc}>{service.description}</p>
//         </div>
//       </div>

//       <div>
//         <div className={styles.sectionLabel}>
//           <Image
//             src="/images/services/users.png"
//             width={20}
//             height={20}
//             alt="users"
//           />
//           <span>Our Process</span>
//         </div>
//         <div className={styles.processGrid}>
//           {service.process.map((step, stepIdx) => (
//             <div key={stepIdx} className={styles.processItem}>
//               <div className={styles.processNumber}>{stepIdx + 1}</div>
//               <div className={styles.processText}>
//                 <div className={styles.processHeading}>{step.bold}</div>
//                 <div className={styles.processDescription}>{step.text}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className={styles.infoBoxes}>
//         <div className={styles.infoBox}>
//           <div className={styles.sectionLabel}>
//             <Image
//               src="/images/services/checkcircle2.png"
//               width={18}
//               height={18}
//               alt="checkcircle2"
//             />
//             <span>Requirements</span>
//           </div>
//           <ul className={styles.list}>
//             {service.requirements.map((req, reqIdx) => (
//               <li key={reqIdx} className={styles.listItem}>
//                 <CheckCircle2
//                   size={16}
//                   fill="currentColor"
//                   stroke="white"
//                   className={styles.listIcon}
//                 />
//                 <span>{req}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className={styles.infoBox}>
//           <div className={styles.sectionLabel}>
//             <Image
//               src="/images/services/clock.png"
//               width={18}
//               height={18}
//               alt="clock"
//             />
//             <span>Timeline</span>
//           </div>
//           <div>
//             {Object.entries(service.timeline).map(([key, value], timeIdx) => (
//               <div key={timeIdx} className={styles.timelineItem}>
//                 <span className={styles.timelineLabel}>{key}:</span> {value}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className={styles.faqLabel}>Frequently Asked Questions</div>
//         <div className={styles.faqContainer}>
//           {service.faqs.map((faq, faqIdx) => (
//             <FAQItem key={faqIdx} question={faq.question} answer={faq.answer} />
//           ))}
//         </div>
//       </div>
//       <Link href="/contact">
//         <button className={styles.ctaButton}>
//           Get Started With Academic Advisory
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Financial;
