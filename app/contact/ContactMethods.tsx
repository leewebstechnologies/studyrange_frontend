import React from 'react';
import styles from './contact.module.css';

interface ContactMethod {
  id: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
  bgColor: string;
}

interface ContactMethodsProps {
  methods: ContactMethod[];
}

const ContactMethods: React.FC<ContactMethodsProps> = ({ methods }) => {
  return (
    <div className={styles.methodsGrid}>
      {methods.map((method) => (
        <div key={method.id} className={styles.methodCard}>
          <div
            className={styles.methodIcon}
            style={{ backgroundColor: method.bgColor }}
          >
            {method.icon}
          </div>
          <h3 className={styles.methodTitle}>{method.title}</h3>
          <p
            className={styles.methodDesc}
            style={{
              color:
                method.title === "Call Us" ||
                method.title === "WhatsApp" ||
                method.title === "Working Hours"
                  ? "#7E436D" // pink
                  : method.title === "Email Us"
                    ? "#7E436D"
                    : "#666",
              textDecoration:
                method.title === "Email Us" ? "underline" : "none",
            }}
          >
            {method.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactMethods;
