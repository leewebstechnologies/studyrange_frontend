"use client";
import { whyChoose } from "@/app/placeholder-data";
import styles from "./choose.module.css";

const Choose = () => {
  return (
    <>
    <div className={styles.choose}>
       <div className={styles.whyChoose}>
        <h2 className={styles.sectionTitle}>Why Choose StudyRange Consult?</h2>
        <p className={styles.subtitle}>Your success is our mission</p>

        <div className={styles.whyGrid}>
          {whyChoose.map((item, index) => (
            <div key={index} className={styles.whyCard}>
              <div className={styles.smallIcon} />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
     
    </>
  );
};
export default Choose;
