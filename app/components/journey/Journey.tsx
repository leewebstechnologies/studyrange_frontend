import Image from "next/image";
import styles from "./journey.module.css";
import { API_BASE_URL } from "@/config/config";

type JourneyItem = {
  id: number;
  year: string;
  title: string;
  description: string;
};

async function getJourney(): Promise<JourneyItem[]> {
  const res = await fetch(`${API_BASE_URL}/journey`, {
    cache: "no-store", // always fresh (or remove for caching)
  });

  return res.json();
}

export default async function Journey() {
  const timelineData = await getJourney();

  return (
    <section className={styles.journey}>
      <h2 className={styles.mainTitle}>Our Journey</h2>

      <div className={styles.timeline}>
        <div className={styles.globalLine}></div>

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isPurple = index % 2 === 0;

          return (
            <div key={item.id} className={styles.timelineItem}>
              <div className={styles.centerNode}>
                <div
                  className={`${styles.icon} ${
                    isPurple ? styles.iconPurple : styles.iconGold
                  }`}
                >
                  <Image
                    src="/images/about/calendar.png"
                    alt="calendar icon"
                    width={14}
                    height={24}
                    className={styles.iconImage}
                  />
                </div>
              </div>

              <div
                className={`${styles.cardWrapper} ${
                  isLeft ? styles.cardLeft : styles.cardRight
                }`}
              >
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              </div>

              <div
                className={`${styles.yearWrapper} ${
                  isLeft ? styles.yearRight : styles.yearLeft
                }`}
              >
                <span
                  className={`${styles.year} ${
                    isPurple ? styles.yearPurple : styles.yearGold
                  }`}
                >
                  {item.year}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
