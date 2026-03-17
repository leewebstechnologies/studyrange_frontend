import Story from "../components/story/Story";
import Mv from "../components/mv/Mv";
import Value from "../components/value/Value";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
    <div className={styles.aboutTop}>
      <div className={styles.circleOne}></div>
      <div className={styles.aboutContent}>
      <h1>About StudyRange Consult</h1>
      <p>
        Your trusted partner in UK education since 2019. We&apos;re dedicated
        to making your dream of studying in the UK a reality through expert
        guidance and personalized support
      </p>
      </div>
     
      <div className={styles.circleTwo}></div>
    </div>
    <Story />
    <Mv />
    <Value />
    </>
    
  );
}
export default About