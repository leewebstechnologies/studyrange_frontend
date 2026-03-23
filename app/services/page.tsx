"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./services.module.css";
import { ChevronDown, CheckCircle2} from "lucide-react";


const servicesData = [
  {
    title: "Admission Services",
    description: "With thousands of different courses on offer, choosing the right course can be difficult. We help to guide you to suitable courses and discuss progression routes. This is one of our core services at Studyrange consult.",
    process: [
      { text: "Evaluate your academic background, interests, and career aspirations" },
      { text: "Identify programme that aligns with your specific qualifications" },
      { text: "Shortlist universities based on rankings, location, and opportunities" },
      { text: "Create a detailed roadmap for your application journey" }
    ],
    requirements: [
      "Academic transcripts and certificates",
      "Standardized test scores (if available)",
      "Career interests and preferences",
      "Budget considerations"
    ],
    timeline: {
      Duration: "2-4 weeks",
      Sessions: "2-3 consultations",
      Deliverables: "Personalized university list with detailed analysis"
    },
    faqs: [
      {
        question: "How many universities will you recommend?",
        answer: "We typically recommend 3 to 5 universities max total; target, safe, reach categories curated for your profile."
      },
      {
        question: "Can I change my program preferences later?",
        answer: "You are flexible to switch program dependent on your enrollment in your last phase."
      }
    ]
  },
  {
    title: "Financial Advice",
    description: "As an Education Consulting firm, our job goes beyond getting our students institutions to study. We want to be a part of the balance regarding your financial reality.",
    process: [
      { bold: "Profile Assessment:", text: "We evaluate your academic background, interests, career objectives, and financial parameters to establish your foundation." },
      { bold: "Programme Matching:", text: "We identify academic programmes that align with your qualifications, ambitions, and budget considerations." },
      { bold: "University Shortlisting:", text: "We shortlist suitable universities based on global rankings, course quality, location, employability outcomes, and affordability." },
      { bold: "Application Roadmap:", text: "We develop a detailed timeline and roadmap outlining deadlines, required documents, actions for a successful application process." }
    ],
    requirements: [
      "Academic transcripts and certificates",
      "Standardized test scores (if available)",
      "Career interests and preferences",
      "Budget considerations"
    ],
    timeline: {
      Duration: "2-4 weeks",
      Sessions: "2-3 personalized consultations",
      Deliverables: "A tailored university shortlist with program and cost analysis"
    },
    faqs: [
      {
        question: "How many universities will you recommend?",
        answer: "We typically recommend 3 to 5 universities max total; target, safe, reach categories curated for your profile."
      },
      {
        question: "Can I change my program preferences later?",
        answer: "You are flexible to switch program dependent on your enrollment in your last phase."
      }
    ]
  },
  {
    title: "Student Visa Guidance Service",
    description: "Studyrange Consult provides comprehensive student visa advisory services designed to ensure a smooth, transparent, and successful application process. We offer a complete, end-to-end service that supports students from initial consultation through admission, visa processing, and final pre-departure preparation.",
    process: [
      { bold: "Profile Assessment:", text: "We evaluate your academic background, career goals, study interests, and visa eligibility to establish a strong foundation." },
      { bold: "Programme/Institution Matching:", text: "We identify academic programmes and institutions that align with your qualifications, aspirations and UK visa requirements." },
      { bold: "University Shortlisting:", text: "We shortlist universities based on academic quality, global rankings, location, post-study opportunities, and visa compliance." },
      { bold: "Application & Visa Roadmap:", text: "We create a clear timeline and custom guide by lining out when you should prepare / apply for the university and CAS approved rules." }
    ],
    requirements: [
      "Academic transcripts and certificates",
      "Standardized test scores (if available)",
      "Career interests and programme preferences",
      "Financial and budget considerations"
    ],
    timeline: {
      Duration: "3-6 weeks",
      Sessions: "3-4 personalized consultations",
      Deliverables: "A comprehensive visa strategy with detailed roadmap, visa, and cost analysis"
    },
    faqs: [
      {
        question: "How many universities will you recommend?",
        answer: "We typically recommend 3 to 5 universities max total; target, safe, reach categories curated for your profile."
      },
      {
        question: "Can I change my program preferences later?",
        answer: "You are flexible to switch program dependent on your enrollment in your last phase."
      }
    ]
  }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button 
        className={styles.faqQuestion} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown className={`${styles.faqChevron} ${isOpen ? styles.open : ""}`} size={18} />
      </button>
      <div className={`${styles.faqAnswerWrapper} ${isOpen ? styles.open : ""}`}>
        <div className={styles.faqAnswer}>
          <div className={styles.faqAnswerInner}>{answer}</div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className={styles.servicesPage}>
      <div className={styles.backgroundBlob} />
      <div className={styles.topLeftCircle} />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Services</h1>
          <p className={styles.subtitle}>
            Comprehensive support for every step of your UK education journey. From 
            University selection to arrival in the UK, we're with you all the way.
          </p>

          <div className={styles.floatingActions}>
           
            <Link href="https://wa.me/+2348099991995">
              <Image
                src="/images/about/whatsapp.png"
                width={56}
                height={56}
                alt="whatsapp"
                className={styles.whatsapp}
              />
            </Link>
          
           
              <Image
                src="/images/about/consult.png"
                width={60}
                height={58}
                alt="consult"
                className={styles.consult}
              />
        
          </div>
        </div>

        <div className={styles.cardsContainer}>
          {servicesData.map((service, idx) => (
            <div key={idx} className={styles.card}>
              
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}>
                  <Image
                    src="/images/services/user.png"
                    width={64}
                    height={64}
                    alt="user"
                    className={styles.user}
                  />
                </div>
                <div className={styles.cardHeaderContent}>
                  <h2 className={styles.cardTitle}>{service.title}</h2>
                  <p className={styles.cardDesc}>{service.description}</p>
                </div>
              </div>

              <div>
                <div className={styles.sectionLabel}>
                  <Image
                    src="/images/services/users.png"
                    width={20}
                    height={20}
                    alt="users"
                    className={styles.users}
                  />
                  <span>Our Process</span>
                </div>
                <div className={styles.processGrid}>
                  {service.process.map((step, stepIdx) => (
                    <div key={stepIdx} className={styles.processItem}>
                      <div className={styles.processNumber}>{stepIdx + 1}</div>
                      <div className={styles.processText}>
                        {'bold' in step && <strong>{step.bold}</strong>}
                        {step.text}
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
                    className={styles.users}
                  />
                    <span>Requirements</span>
                  </div>
                  <ul className={styles.list}>
                    {service.requirements.map((req, reqIdx) => (
                      <li key={reqIdx} className={styles.listItem}>
                        <CheckCircle2 size={5} fill="currentColor" className={styles.listIcon} />
                        <span>{req}</span>
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
                      className={styles.users}
                    />
                    <span>Timeline</span>
                  </div>
                  <div>
                    {Object.entries(service.timeline).map(([key, value], timeIdx) => (
                      <div key={timeIdx} className={styles.timelineItem}>
                        <span className={styles.timelineLabel}>{key}:</span> {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.faqLabel}>Frequently Asked Questions</div>
                <div className={styles.faqContainer}>
                  {service.faqs.map((faq, faqIdx) => (
                    <FAQItem key={faqIdx} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>

              <button className={styles.ctaButton}>
                Get Started With Academic Advisory
              </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;