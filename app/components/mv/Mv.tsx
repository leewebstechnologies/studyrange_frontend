import styles from "./mv.module.css";
import Image from "next/image";

const Mv = () => {
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

          <p className={styles.text}>
            We have a staff of qualified individuals divided into various teams
            to support all of your needs. We believe in building long-term
            connections and will continue to help you in your objectives. Our
            goal is to support students and enthusiastic immigrants who want to
            come to the UK to study or for work.
          </p>
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

          <p className={styles.text}>
            Our vision is to become a trusted gateway to opportunity in the
            United Kingdom by empowering students and aspiring immigrants with
            expert guidance, reliable support, and enduring partnerships.
          </p>
        </article>
      </div>
    </section>
  );
};
export default Mv;
