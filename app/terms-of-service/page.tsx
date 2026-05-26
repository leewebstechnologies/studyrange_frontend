import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./terms.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | Studyrange Global Services & Consult",
  description:
    "Review the Terms of Service of Studyrange Global Services & Consult Ltd covering education, visa, and relocation advisory services.",
};

const TermsOfService = () => {
  return (
    <div className={styles.legalPage}>
      {/* Background decorations */}
      <div className={styles.backgroundBlob} />
      <div className={styles.topLeftCircle} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Terms of Service</h1>
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
                <a href="#acceptance" className={styles.navLink}>
                  1. Acceptance of Terms
                </a>
              </li>
              <li>
                <a href="#services" className={styles.navLink}>
                  2. Services Rendered
                </a>
              </li>
              <li>
                <a href="#obligations" className={styles.navLink}>
                  3. User Obligations
                </a>
              </li>
              <li>
                <a href="#fees" className={styles.navLink}>
                  4. Fees & Payments
                </a>
              </li>
              <li>
                <a href="#refunds" className={styles.navLink}>
                  5. Refund Policy
                </a>
              </li>
              <li>
                <a href="#intellectual" className={styles.navLink}>
                  6. Intellectual Property
                </a>
              </li>
              <li>
                <a href="#liability" className={styles.navLink}>
                  7. Limitation of Liability
                </a>
              </li>
              <li>
                <a href="#termination" className={styles.navLink}>
                  8. Termination
                </a>
              </li>
              <li>
                <a href="#governing-law" className={styles.navLink}>
                  9. Governing Law
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.navLink}>
                  10. Contact Us
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Legal Text Content */}
        <main className={styles.contentCard}>
          <section id="acceptance" className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services provided by Studyrange Global Services &
              Consult Ltd (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), including our
              website and consulting consultations, you agree to comply with and be bound by
              these Terms of Service.
            </p>
            <p>
              If you do not agree to these terms, please do not use our website or services.
              These Terms apply to all visitors, users, and clients.
            </p>
          </section>

          <section id="services" className={styles.section}>
            <h2>2. Services Rendered</h2>
            <p>
              Studyrange Global Services & Consult Ltd provides international education and travel consultancy services, including but not limited to:
            </p>
            <ul>
              <li>Counseling and academic guidance for studying abroad.</li>
              <li>Assistance with university applications and admissions processes.</li>
              <li>Student visa application guidance and document review.</li>
              <li>Financial capability advisory.</li>
              <li>Relocation, pre-departure briefing, and cargo shipment services.</li>
            </ul>
            <p>
              While we make every effort to assist you in securing admissions and visas, admissions
              and visa approvals are at the sole discretion of the respective educational institutions
              and immigration/government authorities. We cannot guarantee admissions or visa approvals.
            </p>
          </section>

          <section id="obligations" className={styles.section}>
            <h2>3. User Obligations</h2>
            <p>
              As a user of our services, you agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete academic, financial, and personal records.</li>
              <li>Ensure all documents submitted (e.g., transcripts, bank statements) are genuine and authentic.</li>
              <li>Respond promptly to requests for additional information or documents required for your applications.</li>
              <li>Maintain the confidentiality of any account details or portals we set up for you.</li>
            </ul>
            <p>
              Submitting forged or fraudulent documents is illegal and will result in the immediate
              termination of our services without any refund, and may be reported to relevant authorities.
            </p>
          </section>

          <section id="fees" className={styles.section}>
            <h2>4. Fees & Payments</h2>
            <p>
              Certain services we provide may incur service fees, administrative fees, or processing
              charges. All applicable fees will be discussed and agreed upon prior to commencing the
              respective service.
            </p>
            <p>
              You are solely responsible for paying university application fees, tuition deposits, visa application
              fees, health insurance surcharges, and cargo shipment costs directly to the respective third parties,
              unless explicitly arranged otherwise in writing.
            </p>
          </section>

          <section id="refunds" className={styles.section}>
            <h2>5. Refund Policy</h2>
            <p>
              Consulting and service fees paid directly to Studyrange Global Services & Consult Ltd are non-refundable
              once work on your application has commenced, except as otherwise agreed in a separate signed contract.
            </p>
            <p>
              We are not responsible for refunds of fees paid to third parties, including but not limited to university
              application/tuition fees and government visa application fees.
            </p>
          </section>

          <section id="intellectual" className={styles.section}>
            <h2>6. Intellectual Property</h2>
            <p>
              All content on our website—including text, graphics, logos, images, icons, and software—is the property of
              Studyrange Global Services & Consult Ltd or its content suppliers and is protected by international copyright laws.
            </p>
            <p>
              You may not copy, reproduce, distribute, or create derivative works from this content without our prior express
              written permission.
            </p>
          </section>

          <section id="liability" className={styles.section}>
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Studyrange Global Services & Consult Ltd shall not be liable for
              any direct, indirect, incidental, special, or consequential damages resulting from:
            </p>
            <ul>
              <li>The refusal of admission by any university or educational institution.</li>
              <li>The rejection of any visa application by immigration authorities.</li>
              <li>Delays, loss, or damage in cargo shipment and courier services beyond our reasonable control.</li>
              <li>Your reliance on any advice or information provided on our website.</li>
            </ul>
          </section>

          <section id="termination" className={styles.section}>
            <h2>8. Termination of Services</h2>
            <p>
              We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability,
              for any reason whatsoever, including without limitation if you breach the Terms of Service.
            </p>
            <p>
              Upon termination, your right to use the services will cease immediately.
            </p>
          </section>

          <section id="governing-law" className={styles.section}>
            <h2>9. Governing Law</h2>
            <p>
              These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in
              accordance with the laws of Nigeria and the United Kingdom, without regard to conflict of law principles.
            </p>
          </section>

          <section id="contact" className={styles.section}>
            <h2>10. Contact Us</h2>
            <p>
              If you have questions or concerns regarding these Terms of Service, please contact us at:
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

export default TermsOfService;
