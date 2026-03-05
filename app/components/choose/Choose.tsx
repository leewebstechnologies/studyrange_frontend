"use client";
import { choose } from "@/app/placeholder-data";
import styles from "./choose.module.css";
import Image from "next/image";

const Choose = () => {
  return (
    <section className={styles.chooseSection}>
      {/* Heading */}
      <header className={styles.header}>
        <h2>Why Choose StudyRange Consult?</h2>
        <p>Your success is our mission</p>
      </header>

      {/* Feature Cards */}
      <div className={styles.grid}>
        {choose.map((item, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.icon}>
              <Image src={item.image} alt={item.title} width={50} height={50} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      {/* Quick Study Finder */}
      <div className={styles.finder}>
        <h3>Quick Study Finder</h3>

        <form className={styles.form}>
          <select aria-label="Select Course Type">
            <option value="">Select Course Type</option>
            <option>Undergraduate</option>
            <option>Postgraduate</option>
          </select>

          <select aria-label="Select Subject">
            <option value="">Select Subject</option>
            <option>Business</option>
            <option>Engineering</option>
            <option>Computer Science</option>
          </select>

          <button type="submit">
            <Image src="/images/choose/search.png" alt="Search Icon" width={20} height={20} />
            Search Programs
          </button>
        </form>
      </div>
    </section>
  );
};
export default Choose;
