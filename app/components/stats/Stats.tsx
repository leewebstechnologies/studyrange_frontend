"use client";
import Image from "next/image";
import styles from "./stats.module.css";

const Stats = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT SIDE (example cards) */}
        <div className={styles.acceptances}>
          <div className={styles.acceptCard}>
            <Image
              src="/images/acceptance/sarah.png"
              alt="sarah"
              width={48}
              height={48}
              className={styles.avatar}
            />
            <strong>Sarah M.</strong> ✓ ACCEPTED
            <p>Just got accepted to Cambridge for Computer Science!</p>
          </div>

          <div className={styles.acceptCard}>
            <Image
              src="/images/acceptance/james.png"
              alt="sarah"
              width={48}
              height={48}
              className={styles.avatar}
            />
            <strong>James K.</strong> ✓ ACCEPTED
            <p>Imperial College London – Engineering with scholarship!</p>
          </div>
        </div>

        {/* RIGHT SIDE (Stats) */}
        <div className={styles.statsWrapper}>
          <div className={styles.circle}></div>

          <div className={styles.statsCard}>
            <h3>This Week&apos;s Stats</h3>

            <div className={styles.statsGrid}>
              <div>
                <h2>47</h2>
                <p>New Acceptances</p>
              </div>

              <div>
                <h2>£2.3M</h2>
                <p>Scholarships Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
