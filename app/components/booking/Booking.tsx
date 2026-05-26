"use client";

import { useState } from "react";
import styles from "./booking.module.css";

const Booking = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = ["9AM", "10AM", "11AM"];

  return (
    <div className={styles.card}>
      <h2>Book Appointment</h2>

      <div className={styles.grid}>
        {timeSlots.map((t) => (
          <button
            key={t}
            onClick={() => setSelectedTime(t)}
            className={selectedTime === t ? styles.active : ""}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Booking;
