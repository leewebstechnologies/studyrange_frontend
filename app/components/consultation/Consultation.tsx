"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./consultation.module.css";
// import { Calendar, Phone } from "lucide-react";

const Consultation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            src="/images/logo.png"
            alt="Studyrange Logo"
            width={220}
            height={60}
            className={styles.logo}
            priority
          />

          <p className={styles.text}>
            Book a free consultation with our expert counselors and get
            personalized guidance for your study abroad dreams.
          </p>

          <div className={styles.actions}>
            <Link href="/contact">
              <button className={styles.primaryBtn}>
                <i
                  className="fa-solid fa-calendar"
                  style={{ fontSize: "18px" }}
                ></i>
                Book Free Consultation
              </button>
            </Link>

            <Link href="tel:+44123456789" className={styles.secondaryBtn}>
              <i className="fa-solid fa-phone" style={{ fontSize: "18px" }}></i>
              Call Now: +44 123 456 789
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;