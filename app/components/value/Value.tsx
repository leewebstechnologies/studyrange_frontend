"use client";
import styles from "./value.module.css";
import Image from "next/image";

const Value = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Core Values</h2>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image
                src="/images/about/excellence.png"
                alt="rating"
                width={27}
                height={32}
              />
            </div>
            <h3 className={styles.cardTitle}>Excellence</h3>
            <p className={styles.cardText}>
              We strive for perfection in everything we do, delivering
              exceptional results that exceed expectations.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image
                src="/images/about/integrity.png"
                alt="rating"
                width={27}
                height={32}
              />
            </div>
            <h3 className={styles.cardTitle}>Integrity</h3>
            <p className={styles.cardText}>
              Honesty and transparency guide our relationships, building trust
              through authentic communication.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image
                src="/images/about/student-centric.png"
                alt="rating"
                width={27}
                height={32}
              />
            </div>
            <h3 className={styles.cardTitle}>Student-Centric</h3>
            <p className={styles.cardText}>
              Every decision we make prioritizes student success and their
              unique educational journey.
            </p>
          </div>

          {/* Card 4 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image
                src="/images/about/global.png"
                alt="rating"
                width={27}
                height={32}
              />
            </div>
            <h3 className={styles.cardTitle}>Global Perspective</h3>
            <p className={styles.cardText}>
              We embrace diversity and cultural understanding in our approach to
              international education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
