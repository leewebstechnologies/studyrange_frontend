import React from "react";
import styles from "./contact.module.css";
import FloatingButtons from "../components/floatingButtons/FloatingButtons";
import Image from "next/image";
import ContactMethods from "./ContactMethods";
import ContactForm from "./ContactForm";
import OfficesDetails from "./OfficesDetails";
import BookingSection from "./BookingSection";
import { API_BASE_URL } from "@/config/config";

const getContactOne = async () => {
  const res = await fetch(`${API_BASE_URL}/contactone`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

const getTimeslots = async () => {
  const res = await fetch(`${API_BASE_URL}/timeslot`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const Contact = async () => {
  const contactone = await getContactOne();
  const timeslotsData = await getTimeslots();
  const timeSlots = timeslotsData.map((item: { time: string }) => item.time);

  const contactMethods = [
    {
      id: 1,
      icon: (
        <Image
          src="/images/contact/phoneIcon.png"
          alt="Email"
          width={24}
          height={24}
        />
      ),
      title: "Call Us",
      desc: contactone.call,
      bgColor: "#7e436d",
    },
    {
      id: 2,
      icon: (
        <Image
          src="/images/contact/messageIcon.png"
          alt="Email"
          width={24}
          height={24}
        />
      ),
      title: "Email Us",
      desc: contactone.email,
      bgColor: "#c4a482",
    },
    {
      id: 3,
      icon: (
        <Image
          src="/images/contact/whatsappIcon.png"
          alt="Email"
          width={24}
          height={24}
        />
      ),
      title: "WhatsApp",
      desc: contactone.whatsapp,
      bgColor: "#25D366",
    },
    {
      id: 4,
      icon: (
        <Image
          src="/images/contact/timeIcon.png"
          alt="Email"
          width={24}
          height={24}
        />
      ),
      title: "Working Hours",
      desc: contactone.hours,
      bgColor: "#4A90E2",
    },
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
          We&apos;re here to support you on your mental wellness journey. Reach
          out to us anytime.
        </p>
      </div>

      {/* Contact Methods Grid */}
      <ContactMethods methods={contactMethods} />

      {/* Main Content Area: Form + Offices */}
      <div className={styles.mainContent}>
        <ContactForm />
        <OfficesDetails />
      </div>

      {/* Book an Appointment Section */}
      <BookingSection timeSlots={timeSlots} />

      {/* Floating Buttons */}
      <div className={styles.floatingButtons}>
        <FloatingButtons />
      </div>
    </div>
  );
};

export default Contact;
