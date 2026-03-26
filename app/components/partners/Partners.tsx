"use client";

import styles from "./partners.module.css";
import { partners } from "@/app/placeholder-data";

const Partners = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>University Partners</h2>
        <p className={styles.text}>
          Partnered with the UK&apos;s most prestigious institutions
        </p>

        <div className={styles.grid}>
          {partners.map((item, index) => (
            <article key={index} className={styles.card}>        
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.rank}>{item.rank}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
