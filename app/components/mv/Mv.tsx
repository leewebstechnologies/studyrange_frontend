import { API_BASE_URL } from "@/config/config";
import styles from "./mv.module.css";
import Image from "next/image";

const getStatement = async () => {
  const res = await fetch(`${API_BASE_URL}/statement`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

const Mv = async () => {
  const statement = await getStatement();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Mission */}
        <article className={`${styles.card} ${styles.mission}`}>
          <div className={styles.iconWrapper}>
            <Image
              src="/images/about/mission.png"
              alt="Mission icon"
              width={20}
              height={20}
              className={styles.icon}
            />
          </div>

          <h3 className={styles.titleM}>Our Mission</h3>

          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: statement.mission }}
          >
          </div>
        </article>

        {/* Vision */}
        <article className={`${styles.card} ${styles.vision}`}>
          <div className={styles.iconWrapper}>
            <Image
              src="/images/about/vision.png"
              alt="Vision icon"
              width={20}
              height={20}
              className={styles.icon}
            />
          </div>

          <h3 className={styles.titleV}>Our Vision</h3>

          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: statement.vision }}
          ></div>
        </article>
      </div>
    </section>
  );
};
export default Mv;
