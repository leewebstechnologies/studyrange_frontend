"use client";
import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background image */}
      <Image
        src="/images/hero/hero-bg.png"
        alt="Hero background"
        fill
        priority
        className={styles.heroImage}
      />

      <div className={styles.heroCards}>
        {/* Top badge */}
        <div className={styles.heroCardsTop}>
          <Image
            src="/images/hero/star.png"
            alt="star"
            width={18}
            height={24}
          />
          <span>Trusted by 2,500+ Students</span>
        </div>

        <div className={styles.heroCardsRow}>
          {/* LEFT */}
          <div className={styles.heroCardsLeft}>
            <div className={styles.heroCardsLeftContents}>
              <div className={styles.heroCardLabel}>
                <Image
                  src="/images/hero/star.png"
                  alt="star"
                  width={18}
                  height={24}
                />
                <span>Your Journey to UK Education Starts Here</span>
              </div>

              <h1 className={styles.heroCardTopText}>
                Transform Your Future with Expert Education Consultancy
              </h1>

              <p className={styles.heroCardBottomText}>
                Since 2019, Studyrange Consult has guided thousands of students
                to their dream UK universities through expert counselling, full
                application support, and visa guidance.
              </p>

              <div className={styles.actions}>
                <button className={styles.primary}>
                  <Image
                    src="/images/hero/i.png"
                    alt=""
                    width={16}
                    height={20}
                  />
                  <span>Try Study Match AI</span>
                </button>

                <button className={styles.secondary}>
                  <Image
                    src="/images/hero/consult.png"
                    alt=""
                    width={16}
                    height={20}
                  />
                  <span>Book Free Consultation</span>
                </button>
              </div>

              <button className={styles.apply}>
                <Image
                  src="/images/hero/apply.png"
                  alt=""
                  width={16}
                  height={20}
                />
                <span>Apply Now!</span>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.heroCardsRight}>
            <Image
              src="/images/hero/whatsapp.png"
              alt="WhatsApp"
              width={62}
              height={62}
            />

            <div className={styles.rating}>
              <div className={styles.ratingItems}>
                <Image
                  src="/images/hero/rating.png"
                  alt=""
                  width={64}
                  height={64}
                />
                <div>
                  <span className={styles.ratingNumber}>4.9</span>
                  <p>Student Rating</p>
                </div>
              </div>
            </div>

            <div className={styles.consultContainer}>
              <Image
                src="/images/hero/consult.png"
                alt=""
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
