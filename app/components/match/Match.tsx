import styles from "./match.module.css";

const Match = () => {
  return (
    <section className={styles.wrapper} aria-label="University match finder">
      <p className={styles.subtitle}>
        Our revolutionary AI engine analyzes 50+ factors to find your perfect
        university match in seconds
      </p>

      <div className={styles.card}>
        <div className={styles.formGrid}>
          {/* Study Level */}
          <div className={styles.field}>
            <label htmlFor="studyLevel">Study Level</label>
            <select id="studyLevel">
              <option>Undergraduate</option>
              <option>Postgraduate</option>
              <option>PhD</option>
            </select>
          </div>

          {/* Subject Area */}
          <div className={styles.field}>
            <label htmlFor="subject">Subject Area</label>
            <select id="subject">
              <option>Business & Management</option>
              <option>Engineering</option>
              <option>Computer Science</option>
              <option>Health Sciences</option>
            </select>
          </div>

          {/* Budget */}
          <div className={styles.field}>
            <label htmlFor="budget">Budget Range</label>
            <select id="budget">
              <option>£10,000 - £20,000</option>
              <option>£20,000 - £30,000</option>
              <option>£30,000+</option>
            </select>
          </div>

          {/* Academic Score */}
          <div className={styles.field}>
            <label htmlFor="score">Academic Score</label>
            <input id="score" type="text" placeholder="e.g., 3.5 GPA" />
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <button className={styles.button}>✏️ Find My Match</button>
          <span className={styles.secure}>🔒 100% Free & Secure</span>
        </div>
      </div>
    </section>
  );
}
export default Match