import styles from "./statCard.module.css";

const StatCard = ({title, value}: {title: string, value: string}) => {
  return (
     <div className={styles.statCard}>
      <div className={styles.statIcon}></div>
      <h3>{value}</h3>
      <p>{title}</p>
    </div>
  )
}

export default StatCard