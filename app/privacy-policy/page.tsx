import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Studyrange Global Services & Consult",
  description:
    "Read the Privacy Policy of Studyrange Global Services & Consult Ltd to understand how we collect, use, and protect your personal information.",
};

const PrivacyPolicy = () => {
  return (
    <div className={styles.legalPage}>
      {/* Background decorations */}
      <div className={styles.backgroundBlob} />
      <div className={styles.topLeftCircle} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: May 21, 2026</p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className={styles.layoutContainer}>
        {/* Table of Contents Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Navigation</h3>
            <ul className={styles.navList}>
              <li>
                <a href="#introduction" className={styles.navLink}>
                  1. Introduction
                </a>
              </li>
              <li>
                <a href="#collection" className={styles.navLink}>
                  2. Information We Collect
                </a>
              </li>
              <li>
                <a href="#usage" className={styles.navLink}>
                  3. How We Use Information
                </a>
              </li>
              <li>
                <a href="#sharing" className={styles.navLink}>
                  4. Sharing of Information
                </a>
              </li>
              <li>
                <a href="#security" className={styles.navLink}>
                  5. Data Security
                </a>
              </li>
              <li>
                <a href="#retention" className={styles.navLink}>
                  6. Data Retention
                </a>
              </li>
              <li>
                <a href="#rights" className={styles.navLink}>
                  7. Your Rights
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.navLink}>
                  8. Contact Us
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Legal Text Content */}
        <main className={styles.contentCard}>
          <section id="introduction" className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              Welcome to Studyrange Global Services & Consult Ltd (&quot;we,&quot;
              &quot;our,&quot; or &quot;us&quot;). We are committed to protecting
              your privacy and ensuring that your personal data is handled in a
              secure and responsible manner.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website, apply for
              our educational consulting services, request financial advice,
              seek student visa guidance, or use our relocation and cargo
              services. Please read this policy carefully.
            </p>
          </section>

          <section id="collection" className={styles.section}>
            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to
              us when expressing interest in obtaining information about our
              services, when participating in activities on our website, or when
              contacting us.
            </p>
            <p>The personal information we collect may include:</p>
            <ul>
              <li>
                <strong>Identity and Contact Data:</strong> Name, email address,
                phone number, physical address, and date of birth.
              </li>
              <li>
                <strong>Academic History:</strong> Academic transcripts,
                certificates, test scores (e.g., IELTS, TOEFL), CVs/resumes, and
                reference letters required for university admissions.
              </li>
              <li>
                <strong>Visa & Travel Documents:</strong> Passport details, previous
                visa refusal history, and country of interest for studies.
              </li>
              <li>
                <strong>Financial Information:</strong> Bank statements, funding
                sources, and sponsorship details needed to provide accurate visa
                and financial advice.
              </li>
              <li>
                <strong>Cargo & Shipment Details:</strong> Item descriptions,
                recipient information, and delivery addresses for cargo/relocation
                purposes.
              </li>
            </ul>
          </section>

          <section id="usage" className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the personal information collected via our website or directly
              from you for various business purposes, including:
            </p>
            <ul>
              <li>
                <strong>Admission Support:</strong> Submitting university applications
                to partner institutions in the UK and other countries on your behalf.
              </li>
              <li>
                <strong>Visa Assistance:</strong> Reviewing and advising on documentation
                to support your student visa application.
              </li>
              <li>
                <strong>Financial Guidance:</strong> Evaluating financial capability and
                offering guidance on meeting tuition and living expense requirements.
              </li>
              <li>
                <strong>Cargo & Relocation Logistics:</strong> Coordinating the pickup,
                shipment, customs clearance, and delivery of personal belongings.
              </li>
              <li>
                <strong>Communication:</strong> Responding to your inquiries, sending
                service updates, and communicating with you regarding your application status.
              </li>
            </ul>
          </section>

          <section id="sharing" className={styles.section}>
            <h2>4. Sharing of Your Information</h2>
            <p>
              We only share your information with your explicit consent or in the following
              necessary situations:
            </p>
            <ul>
              <li>
                <strong>Partner Institutions:</strong> Sharing academic credentials and identity
                information with universities and colleges for admission evaluation.
              </li>
              <li>
                <strong>Service Providers:</strong> Entrusting logistics partners, courier
                services, or technology vendors with the details needed to perform their duties.
              </li>
              <li>
                <strong>Legal Requirements:</strong> Disclosing information when legally mandated
                to do so by immigration authorities, government bodies, or law enforcement.
              </li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third parties for
              marketing purposes.
            </p>
          </section>

          <section id="security" className={styles.section}>
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures designed to
              protect the security of any personal information we process. However, please remember
              that no electronic transmission over the internet or information storage technology can
              be guaranteed to be 100% secure.
            </p>
            <p>
              We limit access to your personal data to employees, consultants, and partners who have
              a business need to know and are bound by confidentiality agreements.
            </p>
          </section>

          <section id="retention" className={styles.section}>
            <h2>6. Data Retention</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the
              purposes set out in this Privacy Policy, unless a longer retention period is required or
              permitted by law (such as tax, accounting, or other legal requirements).
            </p>
            <p>
              When we have no ongoing legitimate business need to process your personal information,
              we will either delete or anonymize it.
            </p>
          </section>

          <section id="rights" className={styles.section}>
            <h2>7. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information,
              including:
            </p>
            <ul>
              <li>The right to request access and obtain a copy of your personal data.</li>
              <li>The right to request correction of inaccurate or incomplete information.</li>
              <li>The right to request deletion of your personal data under certain conditions.</li>
              <li>The right to withdraw your consent at any time where we rely on consent to process your data.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details provided below.
            </p>
          </section>

          <section id="contact" className={styles.section}>
            <h2>8. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, or if you wish to exercise your data protection rights, please contact us at:
            </p>
            <div className={styles.contactBox}>
              <p><strong>STUDYRANGE GLOBAL SERVICES & CONSULT LTD</strong></p>
              <p>Email: <a href="mailto:info@studyrangeconsult.com">info@studyrangeconsult.com</a></p>
              <p>Phone: +44 7404 024443 / +234 812 345 6789</p>
              <p>Website: <Link href="/">www.studyrangeconsult.com</Link></p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
