"use client";
import Image from "next/image";

import React from 'react';
import styles from './journey.module.css';

const timelineData = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Started with a vision to democratize access to quality education worldwide.",
    align: "left",
    color: "purple"
  },
  {
    year: "2020",
    title: "First 100 Students",
    description: "Reached our first major milestone with 100 successful placements.",
    align: "right",
    color: "gold"
  },
  {
    year: "2021",
    title: "International Expansion",
    description: "Opened offices in 5 countries to better serve our global clientele.",
    align: "left",
    color: "purple"
  },
  {
    year: "2022",
    title: "AI Platform Launch",
    description: "Introduced cutting-edge AI matching technology for personalized recommendations.",
    align: "right",
    color: "gold"
  },
  {
    year: "2023",
    title: "1000+ Success Stories",
    description: "Celebrated helping over 1000 students achieve their academic dreams.",
    align: "left",
    color: "purple"
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: 'Awarded "Best Educational Consulting Firm" by the Global Education Alliance.',
    align: "right",
    color: "gold"
  }
];


const Journey = () => {
  return (
    <section className={styles.journey}>
      <h2 className={styles.mainTitle}>Our Journey</h2>
      
      <div className={styles.timeline}>
        {/* The single line down the center */}
        <div className={styles.globalLine}></div>

        {timelineData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            
            {/* The circular node */}
            <div className={styles.centerNode}>
              <div
                className={`${styles.icon} ${
                  item.color === "purple" ? styles.iconPurple : styles.iconGold
                }`}
              >
                <Image
                    src="/images/about/calendar.png"
                    alt="calendar icon"
                    width={14}
                    height={24}
                    className={styles.iconImage}
                />
              </div>
            </div>

            {/* Content Left or Right */}
            <div
              className={`${styles.cardWrapper} ${
                item.align === "left" ? styles.cardLeft : styles.cardRight
              }`}
            >
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>

            <div
              className={`${styles.yearWrapper} ${
                item.align === "left" ? styles.yearRight : styles.yearLeft
              }`}
            >
              <span
                className={`${styles.year} ${
                  item.color === "purple" ? styles.yearPurple : styles.yearGold
                }`}
              >
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;