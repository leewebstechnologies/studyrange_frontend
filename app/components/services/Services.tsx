// import { services } from "@/app/placeholder-data";
import styles from "./services.module.css";
import Image from "next/image";
import Link from "next/link";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";

type ServiceItem = {
  id: number;
  title: string;
  desc: string;
  image: string;
};

const getServices = async (): Promise<ServiceItem[]> => {
  const res = await fetch(`${API_BASE_URL}/service`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data;
};

const Services = async () => {
  const service = await getServices();
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Our Services</h2>

      <div className={styles.servicesGrid}>
        {service.map((item) => (
          <article key={item.id} className={styles.serviceCard}>
            <div className={styles.icon}>
              <Image
                src={`${IMAGE_BASE_URL}/${item.image}`}
                alt={item.title}
                width={56}
                height={56}
              />
            </div>

            <div className={styles.text}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

            <Link href="/services">
              <button className={styles.button}>Learn More</button>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
