import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";
import styles from "./partners.module.css";
import Image from "next/image";
// import { partners } from "@/app/placeholder-data";

type PartnerItem = {
  id: number;
  name: string;
  rank: string;
  image: string;
};

const getPartners = async (): Promise<PartnerItem[]> => {
  const res = await fetch(`${API_BASE_URL}/partner`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data;
};

const Partners = async () => {
  const partner = await getPartners();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Some of our University Partners</h2>
        {/* <p className={styles.text}>
          Partnered with the UK&apos;s most prestigious institutions
        </p> */}

        <div className={styles.grid}>
          {partner.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.logo}>
                <Image
                  src={`${IMAGE_BASE_URL}/${item.image}`}
                  alt={item.name}
                  width={150}
                  height={150}
                  className={styles.logoImage}
                />
              </div>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.rank}>{item.rank}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
