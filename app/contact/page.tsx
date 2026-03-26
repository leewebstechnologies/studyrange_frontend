"use client";

import React, { useState } from 'react';
import styles from "./contact.module.css";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock,
  MapPin,
  Send,
  Calendar,
  User,
  CheckCircle2
} from 'lucide-react';
import FloatingButtons from '../components/floatingButtons/FloatingButtons';
import Image from 'next/image';

const Contact = () => {
  const [selectedCounselor, setSelectedCounselor] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const contactMethods = [
    {
      id: 1,
      icon: <Image src="/images/contact/phoneIcon.png" alt="Email" width={24} height={24} />,
      title: "Call Us",
      desc: "+234 703 507 9333",
      bgColor: "#7e436d"
    },
    {
      id: 2,
      icon: <Image src="/images/contact/messageIcon.png" alt="Email" width={24} height={24} />,
      title: "Email Us",
      desc: "info@studyrangeconsult.com",
      bgColor: "#c4a482"
    },
    {
      id: 3,
      icon: <Image src="/images/contact/whatsappIcon.png" alt="Email" width={24} height={24} />,
      title: "WhatsApp",
      desc: "+234 703 507 9333",
      bgColor: "#25D366"
    },
    {
      id: 4,
      icon: <Image src="/images/contact/timeIcon.png" alt="Email" width={24} height={24} />,
      title: "Working Hours",
      desc: "Mon - Fri: 9AM - 5PM",
      bgColor: "#4A90E2"
    }
  ];

  const offices = [
    {
      id: 1,
      city: "London Office",
      address: "31 Werdling Road, Kingsway, Quedgeley Gloucester, GL2 2HU, UK",
      phone: "+44 20 7946 0058",
      email: "info@studyrangeconsult.com",
      hours: "Mon - Fri: 9AM - 5PM"
    },
    {
      id: 2,
      city: "Lagos Office",
      address: "2a Oyelinde Street Off Opebi/Allen Sabo Bus-stop, Alausa, Ikeja, Lagos",
      phone: "+44 744 144 1190",
      email: "info@studyrangeconsult.com",
      hours: "Mon - Fri: 9AM - 5PM"
    },
    {
      id: 3,
      city: "Enugu Office",
      address: "18, Notre Dame Street Beside Notre Dame School Agbani Road Enugu state",
      phone: "+44 121 496 7860",
      email: "info@studyrangeconsult.com",
      hours: "Mon - Fri: 9AM - 5PM"
    }
  ];

  const counselors = [
    {
      id: 1,
      name: "Dr. Emily Watson",
      specialty: "Anxiety & Depression",
      exp: "6 years experience",
      available: "Available Today",
      color: "#ec4899"
    },
    {
      id: 2,
      name: "Dr. James Miller",
      specialty: "Relationship Therapy",
      exp: "12 years experience",
      available: "Available Today",
      color: "#0ea5e9"
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      specialty: "Stress Management",
      exp: "10 years experience",
      available: "Available Today",
      color: "#22c55e"
    },
    {
      id: 4,
      name: "Dr. David Brown",
      specialty: "Trauma & PTSD",
      exp: "15 years experience",
      available: "Available Today",
      color: "#f97316"
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "5:00 PM"
  ];

  return (
    <div className={styles.container}>
      {/* Background Shapes */}
      <div className={styles.bgShapeTopLeft}></div>
      <div className={styles.bgShapeMiddle}></div>

      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          We're here to support you on your mental wellness journey. Reach out to us anytime.
        </p>
      </div>

      {/* Contact Methods Grid */}
      <div className={styles.methodsGrid}>
        {contactMethods.map((method) => (
          <div key={method.id} className={styles.methodCard}>
            <div className={styles.methodIcon} style={{ backgroundColor: method.bgColor }}>
              {method.icon}
            </div>
            <h3 className={styles.methodTitle}>{method.title}</h3>
            <p className={styles.methodDesc} style={{ color: method.title === 'Email Us' ? '#a0567a' : '#666' }}>{method.desc}</p>
          </div>
        ))}
      </div>

      {/* Main Content Area: Form + Offices */}
      <div className={styles.mainContent}>
        {/* Left Form */}
        <div className={styles.formSection}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Send us a Message</h2>
            <p className={styles.formSubtitle}>Fill out the form below and we'll get back to you shortly.</p>
            
            <form className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              
              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input type="tel" placeholder="+44 20 1234 5678" />
              </div>
              
              <div className={styles.inputGroup}>
                <label>Subject</label>
                <div className={styles.selectWrapper}>
                  <select>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>
              
              <div className={styles.inputGroup}>
                <label>Message</label>
                <textarea placeholder="Tell us how we can help you..." rows={5}></textarea>
              </div>
              
              <button type="button" className={styles.submitBtn}>
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Right Details */}
        <div className={styles.detailsSection}>
          {offices.map((office) => (
            <div key={office.id} className={styles.officeCard}>
              <h3 className={styles.officeCity}>{office.city}</h3>
              <div className={styles.officeInfo}>
                <div className={styles.infoRow}>
                  <MapPin size={16} className={styles.infoIcon} />
                  <span>{office.address}</span>
                </div>
                <div className={styles.infoRow}>
                  <Phone size={16} className={styles.infoIcon} />
                  <span>{office.phone}</span>
                </div>
                <div className={styles.infoRow}>
                  <Mail size={16} className={styles.infoIcon} />
                  <span>{office.email}</span>
                </div>
                <div className={styles.infoRow}>
                  <Clock size={16} className={styles.infoIcon} />
                  <span>{office.hours}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Quick Support Banner */}
          <div className={styles.quickSupport}>
 
            <Image src="/images/contact/whatsappIcon.png" alt="Email" width={32} height={36} />
            <h3 className={styles.qsTitle}>Quick Support</h3>
            <p className={styles.qsDesc}>Chat with us on WhatsApp for instant support</p>
            <button className={styles.qsBtn}>Start Chat</button>
          </div>
        </div>
      </div>

      {/* Book an Appointment Section */}
      <div className={styles.bookingSection}>
        <div className={styles.bookingHeader}>
          <h2 className={styles.bookingTitle}>Book an Appointment</h2>
          <p className={styles.bookingSubtitle}>Choose your counselor, date, and time for your session</p>
        </div>

        <div className={styles.bookingCard}>
          <h3 className={styles.sectionHeading}>Select Your Counselor</h3>
          <div className={styles.counselorsGrid}>
            {counselors.map((counselor) => (
              <div 
                key={counselor.id} 
                className={`${styles.counselorCard} ${selectedCounselor === counselor.id ? styles.selected : ''}`}
                onClick={() => setSelectedCounselor(counselor.id)}
              >
                <div className={styles.counselorIconWrapper} style={{ backgroundColor: counselor.color }}>
                  <User size={24} color="#fff" />
                </div>
                <h4 className={styles.counselorName}>{counselor.name}</h4>
                <p className={styles.counselorSpec}>{counselor.specialty}</p>
                <p className={styles.counselorExp}>{counselor.exp}</p>
                <p className={styles.counselorAvail}>{counselor.available}</p>
              </div>
            ))}
          </div>

          <div className={styles.dateTimeContainer}>
            <div className={styles.dateSection}>
              <h3 className={styles.sectionHeading}>Select Date</h3>
              <div className={styles.dateInputWrapper}>
                <input type="date" className={styles.dateInput} />
                <Calendar size={18} className={styles.calendarIcon} />
              </div>
            </div>

            <div className={styles.timeSection}>
              <h3 className={styles.sectionHeading}>Select Time</h3>
              <div className={styles.timeGrid}>
                {timeSlots.map((time, idx) => (
                  <button 
                    key={idx} 
                    className={`${styles.timeSlot} ${selectedTime === time ? styles.timeSelected : ''}`}
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

      {/* Floating Buttons */}
      <div className={styles.floatingButtons}>
        <FloatingButtons />
      </div>
    </div>
  );
};

export default Contact;