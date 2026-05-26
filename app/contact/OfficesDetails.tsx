import React from 'react';
import styles from './contact.module.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { API_BASE_URL } from '@/config/config';

const getFloatingbutton = async () => {
  const res = await fetch(`${API_BASE_URL}/floatingbutton`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

type ContacttwoItem = {
  id: number;
  office: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
};

const getContacttwo = async (): Promise<ContacttwoItem[]> => {
  const res = await fetch(`${API_BASE_URL}/contacttwo`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data;
}


const OfficesDetails: React.FC = async () => {
  const floatingbutton = await getFloatingbutton();
  const contacttwo = await getContacttwo();
  return (
    <div className={styles.detailsSection}>
      {contacttwo.map((item) => (
        <div key={item.id} className={styles.officeCard}>
          <h3 className={styles.officeCity}>{item.office}</h3>
          <div className={styles.officeInfo}>
            <div className={styles.infoRow}>
              <MapPin size={16} className={styles.infoIcon} />
              <span>{item.address}</span>
            </div>
            <div className={styles.infoRow}>
              <Phone size={16} className={styles.infoIcon} />
              <span>{item.phone}</span>
            </div>
            <div className={styles.infoRow}>
              <Mail size={16} className={styles.infoIcon} />
              <span>{item.email}</span>
            </div>
            <div className={styles.infoRow}>
              <Clock size={16} className={styles.infoIcon} />
              <span>{item.hours}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Quick Support Banner */}
      <div className={styles.quickSupport}>
        <Image
          src="/images/contact/whatsappIcon.png"
          alt="Email"
          width={32}
          height={36}
        />
        <h3 className={styles.qsTitle}>Quick Support</h3>
        <p className={styles.qsDesc}>
          Chat with us on WhatsApp for instant support
        </p>
        <Link href={`https://wa.me/${floatingbutton.whatsapp}`} target="_blank">
          <button className={styles.qsBtn}>Start Chat</button>
        </Link>
      </div>
    </div>
  );
};

export default OfficesDetails;
