"use client";

import React, { useState } from "react";
import styles from "./counselor.module.css";
import { Calendar, User, CheckCircle2 } from "lucide-react";

const Counselor = () => {
  const [selectedCounselor, setSelectedCounselor] = useState<number | null>(
    null,
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const counselors = [
    {
      id: 1,
      name: "Dr. Emily Watson",
      specialty: "Anxiety & Depression",
      exp: "6 years experience",
      available: "Available Today",
      color: "#ec4899",
    },
    {
      id: 2,
      name: "Dr. James Miller",
      specialty: "Relationship Therapy",
      exp: "12 years experience",
      available: "Available Today",
      color: "#0ea5e9",
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      specialty: "Stress Management",
      exp: "10 years experience",
      available: "Available Today",
      color: "#22c55e",
    },
    {
      id: 4,
      name: "Dr. David Brown",
      specialty: "Trauma & PTSD",
      exp: "15 years experience",
      available: "Available Today",
      color: "#f97316",
    },
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "5:00 PM",
  ];

  return (
    <div className={styles.bookingSection}>
      <div className={styles.bookingHeader}>
        <h2 className={styles.bookingTitle}>Book an Appointment</h2>
        <p className={styles.bookingSubtitle}>
          Choose your counselor, date, and time for your session
        </p>
      </div>

      <div className={styles.bookingCard}>
        <h3 className={styles.sectionHeading}>Select Your Counselor</h3>

        <div className={styles.counselorsGrid}>
          {counselors.map((counselor) => (
            <div
              key={counselor.id}
              className={`${styles.counselorCard} ${
                selectedCounselor === counselor.id ? styles.selected : ""
              }`}
              onClick={() => setSelectedCounselor(counselor.id)}
            >
              <div
                className={styles.counselorIconWrapper}
                style={{ backgroundColor: counselor.color }}
              >
                <User size={24} color="#fff" />
              </div>
              <h4>{counselor.name}</h4>
              <p>{counselor.specialty}</p>
              <p>{counselor.exp}</p>
              <p className={styles.available}>{counselor.available}</p>
            </div>
          ))}
        </div>

        <div className={styles.dateTimeContainer}>
          <div>
            <h3>Select Date</h3>
            <div className={styles.dateInputWrapper}>
              <input type="date" />
              <Calendar size={18} />
            </div>
          </div>

          <div>
            <h3>Select Time</h3>
            <div className={styles.timeGrid}>
              {timeSlots.map((time, idx) => (
                <button
                  key={idx}
                  className={
                    selectedTime === time
                      ? styles.timeSelected
                      : styles.timeSlot
                  }
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button className={styles.confirmBtn}>
          Confirm Booking <CheckCircle2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default Counselor;
