"use client";
import styles from "./story.module.css";
import Image from "next/image";

const Story = () => {
  return (
    <section className={styles.story}>
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
          support. This level of customized guidance and advice ensures that
          your transition to a new environment is as smooth as possible and
          maximizes your chances of being accepted into some of the best
          institutions within the UK.
        </p>
        <p className={styles.paragraph}>
          Studyrange has wealth of experience in assisting students to meet
          their study abroad dreams. We have counsellors who are professional
          and they reasonable expertise in all aspects of the UK education
          system and they have maintained a strong relationship and reputation
          amongst UK partneed institutions.
        </p>
      </div>

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
      </div>
    </section>
  );
};

export default Story;
