import Image from "next/image";
import styles from "./timeline.module.css";

const timelineData = [
  {
    year: "2019",
    title: "Company Founded",
    description:
      "Started with a vision to democratize access to quality education worldwide.",
    position: "left",
  },
  {
    year: "2020",
    title: "First 100 Students",
    description:
      "Reached our first major milestone with 100 successful placements.",
    position: "right",
  },
  {
    year: "2021",
    title: "International Expansion",
    description:
      "Opened offices in 5 countries to better serve our global clientele.",
    position: "left",
  },
  {
    year: "2022",
    title: "AI Platform Launch",
    description:
      "Introduced cutting-edge AI matching technology for personalized recommendations.",
    position: "right",
  },
  {
    year: "2023",
    title: "1000+ Success Stories",
    description:
      "Celebrated helping over 1000 students achieve their academic dreams.",
    position: "left",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description:
      'Awarded "Best Educational Consulting Firm" by the Global Education Alliance.',
    position: "right",
  },
];


const Timeline = () => {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.heading}>Our Journey</h2>

      <div className={styles.timeline}>
        {/* ✅ CENTER IMAGE CIRCLE */}
        <div className={styles.centerCircle}>
          <Image
            src="/images/journey-bg.png"
            alt="Journey"
            fill
            className={styles.circleImage}
          />
        </div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              item.position === "left" ? styles.left : styles.right
            }`}
          >
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <div className={styles.marker}>
              <span className={styles.year}>{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
