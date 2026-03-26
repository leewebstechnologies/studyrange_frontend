import Image from "next/image";
import React from "react";
import styles from "./match.module.css";

const Match = () => {
  return (
    <section className={styles.wrapper} aria-label="University match finder">
      <p className={styles.subtitle}>
        Our revolutionary AI engine analyzes 50+ factors to find your perfect
        university match in seconds
      </p>

      <div className={styles.card}>
        <div className={styles.layout}>
          {/* LEFT SIDE */}
          <div className={styles.left}>
            {/* Top two cards */}
            <div className={styles.topGrid}>
              <div className={styles.smallCard}>
                <label className={styles.label}>Study Level</label>
                <select className={styles.select} defaultValue="">
                  <option value="">Select</option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                  <option>PhD</option>
                </select>
              </div>

              <div className={styles.smallCard}>
                <label className={styles.label}>Subject Area</label>
                <select className={styles.select} defaultValue="">
                  <option value="">Select</option>
                  <option>Business & Management</option>
                  <option>Engineering</option>
                  <option>Computer Science</option>
                </select>
              </div>
            </div>
            
            <div className={styles.largeCard}>
              <div className={styles.field}>
                <label className={styles.label}>Budget Range</label>
                <select className={styles.select} defaultValue="">
                  <option value="">Select</option>
                  <option>£10,000 – £20,000</option>
                  <option>£20,000 – £30,000</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Academic Score</label>
                <input className={styles.input} placeholder="e.g., 3.5 GPA" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.right}>
            <button className={styles.button}>
              <Image
                className={styles.buttonI}
                src="/images/match/i.png"
                alt="star"
                width={20}
                height={24}
              />
              Find My Match
            </button>
            <span className={styles.secure}>
              <Image
                className={styles.secureI}
                src="/images/match/secure.png"
                alt="star"
                width={14}
                height={14}
              />
              100% Free & Secure
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Match;
