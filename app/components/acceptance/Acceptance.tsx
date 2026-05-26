// "use client";

import Image from "next/image";
import styles from "./acceptance.module.css";
// import { acceptance } from "@/app/placeholder-data";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";

type AcceptanceItem = {
  id: number;
  image: string;
  name: string;
  text: string;
  time: string;
};


const getAcceptance = async (): Promise<AcceptanceItem[]> => {
  const res = await fetch(`${API_BASE_URL}/acceptance`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data;
};

const getWeek = async () => {
  const res = await fetch(`${API_BASE_URL}/week`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};


const Acceptance = async () => {
  const acceptance = await getAcceptance();
  const week = await getWeek();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>
          Real-time acceptances from our students
        </p>

        <div className={styles.grid}>
          {/* LEFT COLUMN */}
          <div className={styles.acceptances}>
            {acceptance.map((item) => (
              <article key={item.id} className={styles.card}>
                <Image
                  src={`${IMAGE_BASE_URL}/${item.image}`}
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

                  <p className={styles.message}>{item.text}</p>
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
                  <span className={styles.number}>{week.number}</span>
                  <p>New Acceptances</p>
                </div>

                <div>
                  <span className={styles.amount}>£{week.amount}M</span>
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