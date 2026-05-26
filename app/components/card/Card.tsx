import { API_BASE_URL } from "@/config/config";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const getCard = async () => {
  const res = await fetch(`${API_BASE_URL}/card`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

const Card = async () => {
    const card = await getCard();
  return (
    <>
      <div className={styles.heroCardsLeft}>
        <div className={styles.heroCardsLeftContents}>
          <div className={styles.heroCardLabel}>
            <Image
              src="/images/hero/star.png"
              alt="star"
              width={18}
              height={24}
            />
            <span>{card.heading}</span>
          </div>

          <h1 className={styles.heroCardTopText}>{card.title}</h1>

          <p className={styles.heroCardBottomText}>{card.content}</p>

          <div className={styles.actions}>
            <Link href="#match-section">
              <button className={styles.primary}>
                <Image src="/images/hero/i.png" alt="" width={16} height={20} />
                <span>Try Study Match AI</span>
              </button>
            </Link>

            <Link href="/contact">
              <button className={styles.secondary}>
                <Image
                  src="/images/hero/consult.png"
                  alt=""
                  width={16}
                  height={20}
                />
                <span>Book Free Consultation</span>
              </button>
            </Link>
          </div>
          <Link href="/contact">
            <button className={styles.apply}>
              <Image
                src="/images/hero/apply.png"
                alt=""
                width={16}
                height={20}
              />
              <span>Apply Now!</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Card;
