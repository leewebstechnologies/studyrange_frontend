"use client"

import React from 'react'
import styles from './study.module.css'
import { Target, Percent, Download, CalendarCheck, HelpCircle } from 'lucide-react'
import Image from "next/image";
import Link from 'next/link'

const Study = () => {
  return (
    <div className={styles.container}>
      {/* Background elements */}
      <div className={styles.bgCircleLeft}></div>
      <div className={styles.bgCircleRight}></div>

      {/* Layout */}
      <div className={styles.wrapper}>
        {/* Progress bar area */}
        <div className={styles.progressContainer}>
          <div className={styles.progressHeader}>
            <span className={styles.stepText}>Step 1 of 6</span>
            <span className={styles.percentText}>17 % Complete</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
        </div>

        {/* Main Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.mainIconWrapper}>
              <Image
                src="/images/study/circleHelp.png"
                width={36}
                height={36}
                alt="circleHelp"
                className={styles.circleHelp}
              />
            </div>
            <h1 className={styles.title}>Use Study Match AI</h1>
            <p className={styles.subtitle}>
              Our AI-powered engine analyzes your profile to recommend the best universities and programs tailored just for you.
            </p>
          </div>

          <div className={styles.features}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Target size={22} color="#fff" strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Personalized Matches</h3>
              <p className={styles.featureDesc}>Get recommendations based on your unique profile and preferences</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Percent size={22} color="#fff" strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Acceptance Probability</h3>
              <p className={styles.featureDesc}>Know your chances of getting accepted at each university</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Download size={22} color="#fff" strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Downloadable Report</h3>
              <p className={styles.featureDesc}>Get a comprehensive PDF report with all your matches</p>
            </div>
          </div>

          <div className={styles.actionContainer}>
            <button className={styles.btnPrimary}>
              Get Started <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className={styles.floatingButtons}>
        <button className={styles.floatingBtnWhatsapp}>
          <Link href="https://wa.me/+2348099991995">
            <Image
              src="/images/about/whatsapp.png"
              width={56}
              height={56}
              alt="whatsapp"
              className={styles.whatsapp}
              />
          </Link>
        </button>
        <button className={styles.floatingBtnCalendar}>
           <Image
            src="/images/about/consult.png"
            width={60}
            height={58}
            alt="consult"
            className={styles.consult}
          />
        </button>
      </div>
    </div>
  )
}

export default Study