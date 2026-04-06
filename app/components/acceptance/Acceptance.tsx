"use client";

import Image from "next/image";
import styles from "./acceptance.module.css";
import { acceptance } from "@/app/placeholder-data";
// import { acceptances } from "@/app/placeholder-data";

const Acceptance = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>
          Real-time acceptances from our students
        </p>

        <div className={styles.grid}>
          {/* LEFT COLUMN */}
          <div className={styles.acceptances}>
            {acceptance.map((item, index) => (
              <article key={index} className={styles.card}>
                <Image
                  src={item.image}
                  alt="image"
                  width={48}
                  height={48}
                  className={styles.avatar}
                />

                <div className={styles.content}>
                  <div className={styles.header}>
                    <h4>{item.name}</h4>
                    <span className={styles.accepted}>✓ ACCEPTED</span>
                  </div>

                  <p className={styles.message}>
                    {item.text}
                  </p>
                  <span className={styles.time}>{item.time}</span>
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.statsWrapper}>
            <div className={styles.circle}></div>
            <div className={styles.statsCard}>
              <h3>This Week&apos;s Stats</h3>
              <div className={styles.stats}>
                <div>
                  <span className={styles.number}>47</span>
                  <p>New Acceptances</p>
                </div>

                <div>
                  <span className={styles.amount}>£2.3M</span>
                  <p>Scholarships Won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Acceptance