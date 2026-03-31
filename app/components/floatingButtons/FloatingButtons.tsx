import React from 'react'
import styles from "./floatingButtons.module.css";
import Link from 'next/link';
import Image from 'next/image';

const FloatingButtons = () => {
  return (
    <div className={styles.floatingButtons}>
      <Link href="https://wa.me/+2347035079333">
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