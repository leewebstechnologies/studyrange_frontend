import styles from "./scholarshipCard.module.css"

const ScholarshipCard = ({title}: {title: string}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>{title}</h3>
        <span className={styles.heart}>♡</span>
      </div>

      <div className={styles.badges}>
        <div>Amount £30,000+</div>
        <div>Deadline Nov 2024</div>
        <div>Success 85/100</div>
      </div>

      <div className={styles.section}>
        <h4>Eligibility Criteria</h4>
        <ul>
          <li>UK visa required</li>
          <li>Leadership potential</li>
          <li>2+ years experience</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4>Benefits</h4>
        <div className={styles.tags}>
          <span>Full Tuition</span>
          <span>Living Costs</span>
          <span>Travel</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.primary}>View Details</button>
        <button className={styles.secondary}>Get Help</button>
      </div>
    </div>
  )
}

export default ScholarshipCard