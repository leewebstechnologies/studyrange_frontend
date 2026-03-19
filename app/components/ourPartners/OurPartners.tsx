import styles from "./ourPartners.module.css";
import Image from "next/image";

const OurPartners = () => {
  return (
    <div className={styles.ourPartners}>
      <h2 className={styles.mainTitle}>Our Partners</h2>
      <div className={styles.topCards}>
        <div className={styles.topCard}>
          <div className={styles.circle1}>
            <Image
              src="/images/about/icon1.png"
              alt="calendar icon"
              width={21}
              height={32}
              className={styles.iconImage}
            />
          </div>
          <span>British Council</span>
        </div>

        <div className={styles.topCard}>
          <div className={styles.circle2}>
            <Image
              src="/images/about/icon2.png"
              alt="calendar icon"
              width={24}
              height={24}
              className={styles.iconImage}
            />
          </div>
          <span>British Council</span>
        </div>

        <div className={styles.topCard}>
          <div className={styles.circle3}>
            <Image
              src="/images/about/icon3.png"
              alt="calendar icon"
              width={24}
              height={24}
              className={styles.iconImage}
            />
          </div>
          <span>British Council</span>
        </div>

        <div className={styles.topCard}>
          <div className={styles.circle4}>
            <Image
              src="/images/about/icon4.png"
              alt="calendar icon"
              width={30}
              height={32}
              className={styles.iconImage}
            />
          </div>
          <span>British Council</span>
        </div>
      </div>
      <div className={styles.bottomCards}>
        <div className={styles.bottomCard}>
          <Image
            src="/images/about/icon5.png"
            alt="calendar icon"
            width={18}
            height={29}
            className={styles.iconImage}
          />
          <span>ISO 9001 Certified</span>
        </div>
        <div className={styles.bottomCard}>
          <Image
            src="/images/about/icon6.png"
            alt="calendar icon"
            width={18}
            height={24}
            className={styles.iconImage}
          />
          <span>ICEF Accredited</span>
        </div>
        <div className={styles.bottomCard}>
          <Image
            src="/images/about/icon7.png"
            alt="calendar icon"
            width={39}
            height={36}
            className={styles.iconImage}
          />
          <span>QAA Endorsed</span>
        </div>
      </div>
    </div>
  );
}

export default OurPartners