import { API_BASE_URL } from "@/config/config";
import styles from "./value.module.css";
import Image from "next/image";

  const getValue = async () => {
  const res = await fetch(`${API_BASE_URL}/value`, {
    cache: "no-store", // ensures fresh data every time
  });
   return await res.json();
}

const Value = async () => {
   const value = await getValue();
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
            <h3 className={styles.cardTitle}>{value[0].title}</h3>
            <p className={styles.cardText}>
             {value[0].description}
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
            <h3 className={styles.cardTitle}>{value[1].title}</h3>
            <p className={styles.cardText}>
             {value[1].description}
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
            <h3 className={styles.cardTitle}>{value[2].title}</h3>
            <p className={styles.cardText}>
              {value[2].description}
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
            <h3 className={styles.cardTitle}>{value[3].title}</h3>
            <p className={styles.cardText}>
              {value[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
