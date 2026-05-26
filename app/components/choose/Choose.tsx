// "use client";
// import { choose } from "@/app/placeholder-data";
import styles from "./choose.module.css";
import Image from "next/image";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";

type ChoiceItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const getChoose = async (): Promise<ChoiceItem[]> => {
  const res = await fetch(`${API_BASE_URL}/choice`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data;
};

const Choose = async () => {
  const choice = await getChoose();

  return (
    <section className={styles.chooseSection}>
      {/* Heading */}
      <header className={styles.header}>
        <h2>Why Choose Studyrange Global Services & Consult?</h2>
        <p>Your success is our mission</p>
      </header>

      {/* Feature Cards */}
      <div className={styles.grid}>
        {choice.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.icon}>
              <Image
                src={`${IMAGE_BASE_URL}/${item.image}`}
                alt={item.image}
                width={50}
                height={50}
              />
            </div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Choose;
