"use client";

import Image from "next/image";
import styles from "./success.module.css";
import { liveAcceptances, successStories } from "@/app/placeholder-data";

const Success = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column */}
        <div>
          <h2 className={styles.title}>Success Stories</h2>
          <div className={styles.storyList}>
            {successStories.map((item, index) => (
              <article key={index} className={styles.storyCard}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className={styles.avatar}
                  />
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <p>{item.school}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className={styles.title}>Live Acceptance Wall</h2>

          <div className={styles.acceptanceList}>
            {liveAcceptances.map((item, index) => (
              <article key={index} className={styles.acceptanceCard}>
                <span className={styles.emoji}>🎉</span>

                <div>
                  <h4>
                    {item.name} accepted to <strong>{item.school}</strong>
                  </h4>
                  <p>{item.time}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Success;
