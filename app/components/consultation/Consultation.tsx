// "use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./consultation.module.css";
import { API_BASE_URL } from "@/config/config";

const getConsultation = async () => {
  const res = await fetch(`${API_BASE_URL}/consultation`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};


const Consultation = async () => {
  const consultation = await getConsultation();
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
            {consultation.text}
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

            <Link href="tel:+/${consultation.link}" className={styles.secondaryBtn}>
              <i className="fa-solid fa-phone" style={{ fontSize: "18px" }}></i>
              {consultation.phone}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;