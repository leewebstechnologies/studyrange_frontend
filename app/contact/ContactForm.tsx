"use client";

import React, { useState } from 'react';
import styles from './contact.module.css';
import { Send } from 'lucide-react';
import { API_BASE_URL } from '@/config/config';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
     const { name, value } = e.target;
     setFormData({
       ...formData,
       [name]: value,
     });
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     setIsSubmitting(true);
     setSuccessMessage("");
     setErrorMessage("");

     try {
       const response = await fetch(`${API_BASE_URL}/message`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       });

       if (!response.ok) {
         const errorData = await response.json();
         throw new Error(
           errorData.error
             ? JSON.stringify(errorData.errors)
             : "Something went wrong",
         );
       }

       setSuccessMessage("Your message has been sent successfully!");
       setFormData({
         name: "",
         email: "",
         phone: "",
         subject: "",
         message: "",
       });
     } catch {
       setErrorMessage("Failed to send message. Please try again later.");
     } finally {
       setIsSubmitting(false);
     }
   };
  return (
    <div className={styles.formSection}>
      <div className={styles.formCard}>
        <h2 className={styles.formTitle}>Send us a Message</h2>
        <p className={styles.formSubtitle}>
          Fill out the form below and we&apos;ll get back to you shortly.
        </p>

        <form
          className={styles.contactForm}
          onSubmit={handleSubmit}
        >
          {successMessage && (
            <p className={styles.successMessage}>{successMessage}</p>
          )}
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="John Doe"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="john@example.com"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="+44 20 1234 5678"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Subject</label>
            <div className={styles.selectWrapper}>
              <select
                name="subject"
                className={styles.selectInput}
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="partnership">Partnership</option>
                <option value="others">Other</option>
              </select>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Message</label>
            <textarea
              placeholder="Tell us how we can help you..."
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending ..." : "Send Message"}
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
