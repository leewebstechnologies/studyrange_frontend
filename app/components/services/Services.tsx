"use client";
import { services } from "@/app/placeholder-data";
import styles from "./services.module.css";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Our Services</h2>

      <div className={styles.servicesGrid}>
        {services.map((item, index) => (
          <article key={index} className={styles.serviceCard}>
            <div className={styles.icon}>
              <Image
                src={item.image}
                alt={item.title}
                width={56}
                height={56}
                priority={index === 0}
              />
            </div>

            <div className={styles.text}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

            <Link href="/services">
              <button className={styles.button}>Learn More</button>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
