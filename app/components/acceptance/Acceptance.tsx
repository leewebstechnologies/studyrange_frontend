"use client";

import Image from "next/image";
import styles from "./acceptance.module.css";
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
            {/* Card 1 */}
            <article className={styles.card}>
              <Image
                src="/images/acceptance/sarah.png"
                alt="Sarah M"
                width={48}
                height={48}
                className={styles.avatar}
              />

              <div className={styles.content}>
                <div className={styles.header}>
                  <h4>Sarah M.</h4>
                  <span className={styles.accepted}>✓ ACCEPTED</span>
                </div>

                <p className={styles.message}>
                  Just got accepted to Cambridge for Computer Science!
                </p>

                <span className={styles.time}>2 minutes ago</span>
              </div>
            </article>

            {/* Card 2 */}
            <article className={styles.card}>
              <Image
                src="/images/acceptance/james.png"
                alt="James K"
                width={48}
                height={48}
                className={styles.avatar}
              />

              <div className={styles.content}>
                <div className={styles.header}>
                  <h4>James K.</h4>
                  <span className={styles.accepted}>✓ ACCEPTED</span>
                </div>

                <p className={styles.message}>
                  Imperial College London - Engineering with scholarship!
                </p>

                <span className={styles.time}>5 minutes ago</span>
              </div>
            </article>
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
                  <span className={styles.number}>£2.3M</span>
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