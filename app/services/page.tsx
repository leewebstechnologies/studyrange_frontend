// "use client";
import React from "react";
import styles from "./services.module.css";
import FloatingButtons from "../components/floatingButtons/FloatingButtons";
import Admission from "../components/admission/Admission";
import Financial from "../components/financial/Financial";
import Student from "../components/student/Student";
import { API_BASE_URL } from "@/config/config";



const getOurservice = async () => {
  const res = await fetch(`${API_BASE_URL}/ourservice`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};


const Services = async () => {
  const ourservice = await getOurservice();
  return (
    <div className={styles.servicesPage}>
      <div className={styles.backgroundBlob} />
      <div className={styles.topLeftCircle} />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Services</h1>
          <p className={styles.subtitle}>
           {ourservice.title}
          </p>

          <div className={styles.floatingActions}>
            <FloatingButtons />
          </div>
        </div>

        <div className={styles.cardsContainer}>
          <Admission />
          <Financial />
          <Student />
        </div>
      </div>
    </div>
  );
}

export default Services;