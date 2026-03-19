"use client";

import Image from "next/image";
import styles from "./team.module.css";

const Team = () => {
  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <h2 className={styles.title}>Meet Our Team</h2>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/about/md.png"
                alt="Mr. Achiogweme James"
                width={128}
                height={128}
                className={styles.image}
              />
            </div>

            <h3 className={styles.name}>Mr. Achiogweme James</h3>
            <p className={styles.role}>Managing Director</p>
            <p className={styles.desc}>
              Mr. Achiogweme is the managing director of Studyrange Consult.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/about/src1.png"
                alt="Chika Joe Eme"
                width={128}
                height={128}
                className={styles.image}
              />
            </div>

            <h3 className={styles.name}>Chika Joe Eme</h3>
            <p className={styles.role}>Students Recruitment Counsellor</p>
            <p className={styles.desc}>
              Chika is a student recruitment counselor with Studyrange consult.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/about/src1.png"
                alt="Ifeanyi Kingsley Okeke"
                width={128}
                height={128}
                className={styles.image}
              />
            </div>

            <h3 className={styles.name}>Ifeanyi Kingsley Okeke</h3>
            <p className={styles.role}>Students Recruitment Counsellor</p>
            <p className={styles.desc}>
              Ifeanyi Kingsley Okeke is a Student Recruitment Counsellor at
              Studyrange Consult.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
