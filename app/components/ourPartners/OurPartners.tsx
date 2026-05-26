import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";
import styles from "./ourPartners.module.css";
import Image from "next/image";

type StandardItem = {
  id: number;
  title: string;
  image: string;
};


const getOurpartner = async () => {
  const res = await fetch(`${API_BASE_URL}/ourpartner`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
};

const getStandard = async (): Promise<StandardItem[]> => {
  const res = await fetch(`${API_BASE_URL}/standard`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data;
};


const OurPartners = async () => {
  const ourpartner = await getOurpartner();
  const standard = await getStandard();
  return (
    <div className={styles.ourPartners}>
      <h2 className={styles.mainTitle}>Our Partners</h2>
      <div className={styles.topCards}>
        <div className={styles.topCard}>
          <div className={styles.circle1}>
            <Image
              src={`${IMAGE_BASE_URL}/${ourpartner[0].image}`}
              alt="calendar icon"
              width={21}
              height={32}
              className={styles.iconImage}
            />
          </div>
          <span>{ourpartner[0].title}</span>
        </div>

        <div className={styles.topCard}>
          <div className={styles.circle2}>
            <Image
              src={`${IMAGE_BASE_URL}/${ourpartner[1].image}`}
              alt="calendar icon"
              width={24}
              height={24}
              className={styles.iconImage}
            />
          </div>
          <span>{ourpartner[1].title}</span>
        </div>

        <div className={styles.topCard}>
          <div className={styles.circle3}>
            <Image
              src={`${IMAGE_BASE_URL}/${ourpartner[2].image}`}
              alt="calendar icon"
              width={24}
              height={24}
              className={styles.iconImage}
            />
          </div>
          <span>{ourpartner[2].title}</span>
        </div>

        <div className={styles.topCard}>
          <div className={styles.circle4}>
            <Image
              src={`${IMAGE_BASE_URL}/${ourpartner[3].image}`}
              alt="calendar icon"
              width={30}
              height={32}
              className={styles.iconImage}
            />
          </div>
          <span>{ourpartner[3].title}</span>
        </div>
      </div>
      <div className={styles.bottomCards}>
        {standard.map((item) => (
          <div key={item.id} className={styles.bottomCard}>
            <Image
              src={`${IMAGE_BASE_URL}/${item.image}`}
              alt={`icon for ${item.title}`}
              width={18}
              height={29}
              className={styles.iconImage}
            />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurPartners