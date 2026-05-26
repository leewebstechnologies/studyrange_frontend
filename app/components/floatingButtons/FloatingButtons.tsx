import React from 'react'
import styles from "./floatingButtons.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { API_BASE_URL } from '@/config/config';


const getFloatingbutton = async () => {
  const res = await fetch(`${API_BASE_URL}/floatingbutton`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

const FloatingButtons = async () => {
  const floatingbutton = await getFloatingbutton();
  return (
    <div className={styles.floatingButtons}>
       <Link href={`https://wa.me/${floatingbutton.whatsapp}`}>
        <button className={styles.floatingBtnWhatsapp}>
          <Image
            src="/images/about/whatsapp.png"
            width={56}
            height={56}
            alt="whatsapp"
            className={styles.whatsapp}
          />
        </button>
      </Link>
      <Link href="/contact">
        <button className={styles.floatingBtnConsult}>
          <Image
            src="/images/about/consult.png"
            width={60}
            height={58}
            alt="consult"
            className={styles.consult}
          />
        </button>
      </Link>
    </div>
  );
}

export default FloatingButtons