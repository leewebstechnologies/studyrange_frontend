'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';
import { 
  Phone, 
  EnvelopeSimple, 
  WhatsappLogo, 
  Clock, 
  MapPin, 
  PaperPlaneTilt, 
  CalendarBlank,
  User
} from '@phosphor-icons/react';

const Contact = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedCounselor, setSelectedCounselor] = useState<number | null>(null);

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '5:00 PM'
  ];

  const counselors = [
    { id: 1, name: 'Dr. Emily Watson', specialty: 'Anxiety & Depression', exp: '10 years experience', status: 'Available Today', avatarClass: styles.avatarPink },
    { id: 2, name: 'Dr. James Miller', specialty: 'Relationship Therapy', exp: '12 years experience', status: 'Available Today', avatarClass: styles.avatarBlue },
    { id: 3, name: 'Dr. Sarah Johnson', specialty: 'Stress Management', exp: '15 years experience', status: 'Available Today', avatarClass: styles.avatarGreen },
    { id: 4, name: 'Dr. David Brown', specialty: 'Trauma & PTSD', exp: '10 years experience', status: 'Available Today', avatarClass: styles.avatarOrange },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.blobTopLeft}></div>
      <div className={styles.blobCenterBottom}></div>

      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>We're here to support you on your mental wellness journey. Reach out to us anytime.</p>
      </div>

      <div className={styles.infoCards}>
        <div className={styles.infoCard}>
          <div className={`${styles.iconWrapper} ${styles.purple}`}>
            <Phone weight="fill" />
          </div>
          <h3>Call Us</h3>
          <p>+234 803 9991 895</p>
        </div>
        <div className={styles.infoCard}>
          <div className={`${styles.iconWrapper} ${styles.gold}`}>
            <EnvelopeSimple weight="fill" />
          </div>
          <h3>Email Us</h3>
          <p>info@studyrangeconsult.com</p>
        </div>
        <div className={styles.infoCard}>
          <div className={`${styles.iconWrapper} ${styles.green}`}>
            <WhatsappLogo weight="fill" />
          </div>
          <h3>WhatsApp</h3>
          <p>+234 809 9091 905</p>
        </div>
        <div className={styles.infoCard}>
          <div className={`${styles.iconWrapper} ${styles.blue}`}>
            <Clock weight="fill" />
          </div>
          <h3>Working Hours</h3>
          <p>Mon-Fri: 9AM-8PM</p>
        </div>
      </div>

      <div className={styles.middleSection}>
        <div className={styles.formCard}>
          <h2>Send us a Message</h2>
          <p>Fill out the form below and we'll get back to you shortly.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input type="text" className={styles.inputField} placeholder="John Doe" />
            </div>
            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input type="email" className={styles.inputField} placeholder="john@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label>Phone Number</label>
              <input type="tel" className={styles.inputField} placeholder="+44 20 1234 5678" />
            </div>
            <div className={styles.formGroup}>
              <label>Subject</label>
              <select className={styles.selectField}>
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="therapy">Therapy Session</option>
                <option value="billing">Billing Issue</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea className={styles.textareaField} placeholder="Tell us how we can help you..."></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message <PaperPlaneTilt weight="fill" />
            </button>
          </form>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.locationsList}>
            <div className={styles.locationCard}>
              <h3>London Office</h3>
              <div className={styles.locationDetail}>
                <MapPin weight="fill" />
                <span>31 Warding Road, Ringway, Guidgally, Gloucester, GL2 2DU, UK</span>
              </div>
              <div className={styles.locationDetail}>
                <Phone weight="fill" />
                <span>+44 20 7946 9058</span>
              </div>
              <div className={styles.locationDetail}>
                <EnvelopeSimple weight="fill" />
                <span>info@studyrangeconsult.com</span>
              </div>
              <div className={styles.locationDetail}>
                <Clock weight="fill" />
                <span>Mon-Fri: 9AM-8PM</span>
              </div>
            </div>

            <div className={styles.locationCard}>
              <h3>Lagos Office</h3>
              <div className={styles.locationDetail}>
                <MapPin weight="fill" />
                <span>2a Osinde Street Off Develoglan Sabo Bus-stop, Akwonjo Lagos.</span>
              </div>
              <div className={styles.locationDetail}>
                <Phone weight="fill" />
                <span>+44 744 334 1180</span>
              </div>
              <div className={styles.locationDetail}>
                <EnvelopeSimple weight="fill" />
                <span>info@studyrangeconsult.com</span>
              </div>
              <div className={styles.locationDetail}>
                <Clock weight="fill" />
                <span>Mon-Fri: 9AM-8PM</span>
              </div>
            </div>

            <div className={styles.locationCard}>
              <h3>Enugu Office</h3>
              <div className={styles.locationDetail}>
                <MapPin weight="fill" />
                <span>16, Notre Dame Street Beside Notre Dame School Agbani Road Enugu state</span>
              </div>
              <div className={styles.locationDetail}>
                <Phone weight="fill" />
                <span>+44 121 496 7860</span>
              </div>
              <div className={styles.locationDetail}>
                <EnvelopeSimple weight="fill" />
                <span>info@studyrangeconsult.com</span>
              </div>
              <div className={styles.locationDetail}>
                <Clock weight="fill" />
                <span>Mon-Fri: 9AM-8PM</span>
              </div>
            </div>
          </div>

          <div className={styles.quickSupport}>
            <WhatsappLogo className={styles.whatsappIconLarge} weight="fill" />
            <h3>Quick Support</h3>
            <p>Chat with us on Whatsapp for instant support</p>
            <button className={styles.startChatBtn}>Start Chat</button>
          </div>
        </div>
      </div>

      <div className={styles.appointmentSection}>
        <div className={styles.appointmentHeader}>
          <h2>Book an Appointment</h2>
          <p>Choose your counselor, date, and time for your session</p>
        </div>

        <h3 className={styles.counselorTitle}>Select Your Counselor</h3>
        <div className={styles.counselorsList}>
          {counselors.map((c) => (
            <div 
              key={c.id} 
              className={styles.counselorCard}
              style={{
                borderColor: selectedCounselor === c.id ? '#8B5A79' : '#eee',
                boxShadow: selectedCounselor === c.id ? '0 0 0 2px #8B5A79' : 'none'
              }}
              onClick={() => setSelectedCounselor(c.id)}
            >
              <div className={`${styles.counselorAvatar} ${c.avatarClass}`}>
                <User weight="fill" />
              </div>
              <h4>{c.name}</h4>
              <div className={styles.specialty}>{c.specialty}</div>
              <div className={styles.experience}>{c.exp}</div>
              <div className={styles.availability}>{c.status}</div>
            </div>
          ))}
        </div>

        <div className={styles.dateTimeRow}>
          <div className={styles.dateTimeField}>
            <span className={styles.dateTimeLabel}>Select Date</span>
            <div className={styles.dateInputWrapper}>
              <input type="date" />
            </div>
          </div>
          <div className={styles.dateTimeField}>
            <span className={styles.dateTimeLabel}>Select Time</span>
            <div className={styles.timeSlots}>
              {timeSlots.map((time, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.timeSlot} ${selectedTime === time ? styles.active : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className={styles.confirmBtn}>
          Confirm Booking <CalendarBlank weight="fill" />
        </button>
      </div>

      <div className={styles.floatingWidgets}>
        <div className={`${styles.floatingWidget} ${styles.whatsapp}`}>
          <WhatsappLogo weight="fill" />
        </div>
        <div className={`${styles.floatingWidget} ${styles.calendar}`}>
          <CalendarBlank weight="fill" />
        </div>
      </div>
    </div>
  );
};

export default Contact;