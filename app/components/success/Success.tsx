// "use client";

import Image from "next/image";
import styles from "./success.module.css";
// import { liveAcceptances, successStories } from "@/app/placeholder-data";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";

type SuccessItem = {
  id: number;
  image: string;
  name: string;
  school: string;
};

type LiveItem = {
  id: number;
  name: string;
  school: string;
  time: string;
}

const getSuccess = async (): Promise<SuccessItem[]> => {
  const res = await fetch(`${API_BASE_URL}/success`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data;
}

const getLive = async (): Promise<LiveItem[]> => {
  const res = await fetch(`${API_BASE_URL}/live`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data;
}

const Success = async () => {
  const success = await getSuccess();
  const live = await getLive();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column */}
        <div>
          <h2 className={styles.title}>Success Stories</h2>
          <div className={styles.storyList}>
            {success.map((item) => (
              <article key={item.id} className={styles.storyCard}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={`${IMAGE_BASE_URL}/${item.image}`}
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
            {live.map((item) => (
              <article key={item.id} className={styles.acceptanceCard}>
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
