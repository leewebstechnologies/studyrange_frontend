import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import styles from "./student.module.css";
import { API_BASE_URL } from "@/config/config";
import StudentFaq from "../studentfaq/StudentFaq";
// import StudentFaq from "../studentfaq/StudentFaq";

const stripHtml = (html: string) => {
  return html.replace(/<[^>]+>/g, "");
};

// TYPES
type StudentProcessItem = {
  id: number;
  heading: string,
  content: string;
};

type StudentRequirementItem = {
  id: number;
  content: string;
};

type StudentTimelineItem = {
  id: number;
  content: string;
};

// FETCHERS
const getStudentVisa = async () => {
  const res = await fetch(`${API_BASE_URL}/studentvisa`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

const getStudentProcess = async (): Promise<StudentProcessItem[]> => {
  const res = await fetch(`${API_BASE_URL}/studentprocess`, {
    cache: "no-store",
  });

  return res.json();
};

const getStudentRequirement = async (): Promise<StudentRequirementItem[]> => {
  const res = await fetch(`${API_BASE_URL}/studentrequirement`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch student requirements");
  }

  return res.json();
};

const getStudentTimeline = async (): Promise<StudentTimelineItem[]> => {
  const res = await fetch(`${API_BASE_URL}/studenttimeline`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch student timeline");
  }

  return res.json();
};


// COMPONENT
const Student = async () => {
  const studentvisa = await getStudentVisa();
  const studentprocess = await getStudentProcess();
  const studentrequirement = await getStudentRequirement();
  const studenttimeline = await getStudentTimeline();


  return (
    <div className={styles.card}>
      {/* HEADER */}
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
          <h2 className={styles.cardTitle}>{studentvisa.title}</h2>
          <p className={styles.cardDesc}>{studentvisa.description}</p>
        </div>
      </div>

      {/* PROCESS */}
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
          {studentprocess.map((item, index) => (
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

      {/* REQUIREMENTS + TIMELINE */}
      <div className={styles.infoBoxes}>
        {/* REQUIREMENTS */}
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
            {studentrequirement.map((req) => (
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

        {/* TIMELINE */}
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
                {studenttimeline[index]?.content || "N/A"}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <div className={styles.faqLabel}>Frequently Asked Questions</div>

        <StudentFaq />
      </div>

      {/* CTA */}
      <Link href="/contact">
        <button className={styles.ctaButton}>
          Get Started With Student Visa Guidance
        </button>
      </Link>
    </div>
  );
};

export default Student;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronDown, CheckCircle2 } from "lucide-react";
// import styles from "./student.module.css";

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

// const Student = () => {
//   const service = {
//     title: "Student Visa Guidance Service",
//     description: "Studyrange Consult provides comprehensive student visa advisory services designed to ensure a smooth, transparent, and successful application process. We offer a complete, end-to-end service that supports students from initial consultation through admission, visa processing, and final pre-departure preparation.",
//     process: [
//       { bold: "Profile Assessment:", text: "We evaluate your academic background, career goals, study interests, and visa eligibility to establish a strong foundation." },
//       { bold: "Programme/Institution Matching:", text: "We identify academic programmes and institutions that align with your qualifications, aspirations and UK visa requirements." },
//       { bold: "University Shortlisting:", text: "We shortlist universities based on academic quality, global rankings, location, post-study opportunities, and visa compliance." },
//       { bold: "Application & Visa Roadmap:", text: "We create a clear timeline and custom guide by lining out when you should prepare / apply for the university and CAS approved rules." }
//     ],
//     requirements: [
//       "Academic transcripts and certificates",
//       "Standardized test scores (if available)",
//       "Career interests and programme preferences",
//       "Financial and budget considerations"
//     ],
//     timeline: {
//       Duration: "3-6 weeks",
//       Sessions: "3-4 personalized consultations",
//       Deliverables: "A comprehensive visa strategy with detailed roadmap, visa, and cost analysis"
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
//                 <strong>{step.bold}</strong>
//                 {step.text}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className={styles.infoBoxes}>
//         <div className={styles.infoBox}>
//           <div className={styles.sectionLabel}>
//           <Image
//             src="/images/services/checkcircle2.png"
//             width={18}
//             height={18}
//             alt="checkcircle2"
//           />
//             <span>Requirements</span>
//           </div>
//           <ul className={styles.list}>
//             {service.requirements.map((req, reqIdx) => (
//               <li key={reqIdx} className={styles.listItem}>
//                 <CheckCircle2 size={16} fill="currentColor" stroke="white" className={styles.listIcon} />
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

// export default Student;
