"use client";
import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.heroImage}
        src="/images/hero/hero-bg.png"
        alt="hero"
        fill
      />
      <div className={styles.heroCards}>
        <div className={styles.heroCardsTop}>
          <Image
            className={styles.star}
            src="/images/hero/star.png"
            alt="star"
            width={18}
            height={24}
          />
          <span className={styles.heroCardsTopText}>
            Trusted by 2,500+ Students
          </span>
        </div>
        <div className={styles.heroCardsRow}>
          <div className={styles.heroCardsLeft}>
            <div className={styles.heroCardsLeftContents}>
              <div className={styles.heroCardLabel}>
                <Image
                  alt="star"
                  width={18}
                  height={24}
                  src="/images/hero/star.png"
                />
                <span>Your Journey to UK Education Starts Here</span>
              </div>
              <h4 className={styles.heroCardTopText}>
                Transform Your Future with Expert Education Consultancy
              </h4>
              <p className={styles.heroCardBottomText}>
                Since 2019, Studyrange Consult has guided thousands of students
                to their dream UK universities. Experience personalized
                counselling, comprehensive application support, and expert visa
                guidance.
              </p>
              <div className={styles.actions}>
                <button className={styles.primary}>
                  <Image
                    className={styles.question}
                    src="/images/hero/i.png"
                    alt="star"
                    width={16}
                    height={20}
                  />
                  <span className={styles.primaryText}>Try Study Match AI</span>
                </button>
                <button className={styles.secondary}>
                  <Image
                    className={styles.question}
                    src="/images/hero/consult.png"
                    alt="star"
                    width={16}
                    height={20}
                  />
                  <span className={styles.secondaryText}>
                    Book Free Consultation
                  </span>
                </button>
              </div>
              <button className={styles.apply}>
                <Image
                  className={styles.question}
                  src="/images/hero/apply.png"
                  alt="star"
                  width={16}
                  height={20}
                />
                <span>Apply Now!</span>
              </button>
            </div>
          </div>

          <div className={styles.heroCardsRight}>
            <Image
              className={styles.whatsapp}
              src="/images/hero/whatsapp.png"
              alt="star"
              width={62}
              height={62}
            />
            <div className={styles.rating}>
              <div className={styles.ratingItems}>
                <Image
                  className={styles.ratingImage}
                  src="/images/hero/rating.png"
                  alt="star"
                  width={64}
                  height={64}
                />
                <div className={styles.ratingText}>
                  <span className={styles.ratingNumber}>4.9</span>
                  <p className={styles.studentRating}>Student Rating</p>
                </div>
              </div>
            </div>
            <div className={styles.consultContainer}>
              <Image
                className={styles.consult}
                src="/images/hero/consult.png"
                alt="star"
                width={27}
                height={29}
              />
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
