import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";
import Card from "../card/Card";

const getHero = async () => {
  const res = await fetch(`${API_BASE_URL}/hero`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

const Hero = async () => {
  const hero = await getHero();
  return (
    <section className={styles.hero}>
      {/* Background image */}
      <Image
       src={`${IMAGE_BASE_URL}/${hero.image}`}
        alt="Hero background"
        fill
        priority
        className={styles.heroImage}
      />

      <div className={styles.heroCards}>
        {/* Top badge */}
        <div className={styles.heroCardsTop}>
          <Image
            src="/images/hero/star.png"
            alt="star"
            width={18}
            height={24}
          />
          <span>{hero.client}</span>
        </div>

        <div className={styles.heroCardsRow}>
          {/* LEFT */}        
          <Card />


          {/* RIGHT */}
          <div className={styles.heroCardsRight}>
            <Link href={`https://wa.me/${hero.phone}`}>
              <Image
                src="/images/hero/whatsapp.png"
                alt="WhatsApp"
                width={62}
                height={62}
              />
            </Link>

            <div className={styles.rating}>
              <div className={styles.ratingItems}>
                <Image
                  src="/images/hero/rating.png"
                  alt=""
                  width={64}
                  height={64}
                />
                <div>
                  <span className={styles.ratingNumber}>{hero.rating}</span>
                  <p>Student Rating</p>
                </div>
              </div>
            </div>
            <Link className={styles.consultContainer} href="/contact">
              <Image
                src="/images/hero/consult.png"
                alt=""
                width={27}
                height={29}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
