"use client";

import React, { useState, useEffect } from 'react';
import styles from './contact.module.css';
import { User, Calendar, CheckCircle2, Clock, UserCheck } from 'lucide-react';
import { API_BASE_URL } from '@/config/config';

interface Counselor {
  id: number;
  name: string;
  specialty: string;
  exp: string;
  available: string;
}

interface BookingSectionProps {
  timeSlots: string[];
}

const BookingSection: React.FC<BookingSectionProps> = ({ timeSlots }) => {
  const [counselors, setCounselors] = useState<Counselor[]>([]);
  const [selectedCounselorId, setSelectedCounselorId] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [userName, setUserName] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    const fetchCounselors = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/counselor`);
        const data = await res.json();
        setCounselors(data);
      } catch (error) {
        console.error("Error fetching counselors:", error);
      }
    };

    fetchCounselors();
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const selectedCounselor = counselors.find(c => c.id === selectedCounselorId);
    
    if (!userName || !selectedCounselor || !selectedDate || !selectedTime) {
      setStatus({ type: 'error', message: "Please complete all fields to book your appointment." });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    // Format date as dd, mm, yyyy
    const dateObj = new Date(selectedDate);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    const formattedDate = `${day}, ${month}, ${year}`;

    try {
      const response = await fetch(`${API_BASE_URL}/appointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          counselor: selectedCounselor.name,
          date: formattedDate,
          time: selectedTime,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit appointment");
      }

      setStatus({ type: 'success', message: "Your appointment has been scheduled successfully!" });
      setUserName("");
      setSelectedCounselorId(null);
      setSelectedDate("");
      setSelectedTime(null);
    } catch {
      setStatus({ type: 'error', message: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const counselorColors = ["#ec4899", "#0ea5e9", "#22c55e", "#f97316", "#8b5cf6"];

  return (
    <div className={styles.bookingSection}>
      <div className={styles.bookingHeader}>
        <h2 className={styles.bookingTitle}>Book an Appointment</h2>
        <p className={styles.bookingSubtitle}>
          Choose your counselor, date, and time for your session
        </p>
      </div>

      <form className={styles.bookingCard} onSubmit={handleSubmit}>
        {status && (
          <div className={status.type === 'success' ? styles.successMessage : styles.errorMessage}>
            {status.type === 'success' && <CheckCircle2 size={20} />}
            {status.message}
          </div>
        )}

        <div className={styles.inputGroup} style={{ marginBottom: '2.5rem' }}>
          <h3 className={styles.sectionHeading}>
             <UserCheck size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
             Your Full Name
          </h3>
          <input
            type="text"
            placeholder="Enter your name"
            className={styles.dateInput}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <h3 className={styles.sectionHeading}>Select Your Counselor</h3>
        <div className={styles.counselorsGrid}>
          {counselors.map((counselor, index) => (
            <div
              key={counselor.id}
              className={`${styles.counselorCard} ${selectedCounselorId === counselor.id ? styles.selected : ""}`}
              onClick={() => setSelectedCounselorId(counselor.id)}
            >
              <div
                className={styles.counselorIconWrapper}
                style={{ backgroundColor: counselorColors[index % counselorColors.length] }}
              >
                <User size={24} color="#fff" />
              </div>
              <h4 className={styles.counselorName}>{counselor.name}</h4>
              <p className={styles.counselorSpec}>{counselor.specialty}</p>
              <p className={styles.counselorExp}>{counselor.exp}</p>
              <p className={styles.counselorAvail}>{counselor.available}</p>
              {selectedCounselorId === counselor.id && (
                 <div className={styles.selectedBadge}>Selected</div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.dateTimeContainer}>
          <div className={styles.dateSection}>
            <h3 className={styles.sectionHeading}>
               <Calendar size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
               Select Date
            </h3>
            <div className={styles.dateInputWrapper}>
              <input 
                type="date" 
                className={styles.dateInput} 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
              <Calendar size={18} className={styles.calendarIcon} />
            </div>
          </div>

          <div className={styles.timeSection}>
            <h3 className={styles.sectionHeading}>
               <Clock size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
               Select Time
            </h3>
            <div className={styles.timeGrid}>
              {timeSlots.map((time, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.timeSlot} ${selectedTime === time ? styles.timeSelected : ""}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          className={styles.confirmBtn}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Confirm Booking"}
          <CheckCircle2 size={18} />
        </button>
      </form>
    </div>
  );
};

export default BookingSection;
