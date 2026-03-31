"use client";
import Link from "next/link";
import styles from "./story.module.css";
import Image from "next/image";

const Story = () => {
  return (
    <section className={styles.story}>
      {/* LEFT */}
      <div className={styles.storyLeft}>
        <h2 className={styles.title}>Our Story</h2>

        <p className={styles.paragraph}>
          Studyrange Consult is an education consultancy establishment which
          provides quality counselling and application services for
          international students wishing to study at high schools, colleges and
          universities in the United Kingdom.
        </p>

        <p className={styles.paragraph}>
          Since 2019, Studyrange consult has been committed to providing
          international students with guidance and support every step of the
          way. Our focus on your individual needs allows us to match you to the
          best institution and course, based on your personal academic goals.
        </p>

        <p className={styles.paragraph}>
          We also provide visa and travel assistance, as well as accommodation
          support. This level of customized guidance ensures that your
          transition to a new environment is smooth and maximizes your chances
          of being accepted into top UK institutions.
        </p>

        <p className={styles.paragraph}>
          Studyrange has wealth of experience in assisting students to meet
          their study abroad dreams with professional counsellors who understand
          the UK education system.
        </p>
      </div>

      {/* RIGHT */}
      <div className={styles.storyRight}>
        <div className={styles.frame}>
          <Image
            src="/images/about/graduates.png"
            width={500}
            height={500}
            alt="graduates"
            className={styles.image}
          />
        </div>

        <div className={styles.storyRightBottom}>
          <div className={styles.rating}>
            <div className={styles.ratingItems}>
              <Image
                src="/images/about/star.png"
                alt="rating"
                width={48}
                height={48}
              />
              <div className={styles.ratingText}>
                <span className={styles.ratingNumber}>4.9/5</span>
                <p>Student Rating</p>
              </div>
            </div>
          </div>
          <Link href="/contact">
            <Image
              src="/images/about/consult.png"
              width={60}
              height={58}
              alt="consult"
              className={styles.consult}
            />
          </Link>

          <Link href="https://wa.me/+2347035079333">
            <Image
              src="/images/about/whatsapp.png"
              width={56}
              height={56}
              alt="whatsapp"
              className={styles.whatsapp}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Story;
