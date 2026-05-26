import Story from "../components/story/Story";
import Mv from "../components/mv/Mv";
import Value from "../components/value/Value";
import Team from "../components/team/Team";
import styles from "./about.module.css";
import Journey from "../components/journey/Journey";
import OurPartners from "../components/ourPartners/OurPartners";
import { API_BASE_URL } from "@/config/config";

const getAbout = async () => {
  const res = await fetch(`${API_BASE_URL}/about`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};


const About = async () => {
  const about = await getAbout();
  return (
    <>
      <div className={styles.aboutTop}>
        <div className={styles.circleOne}></div>
        <div className={styles.aboutContent}>
          <h1>About Studyrange Global Services & Consult</h1>
          <p>
           {about.title}
          </p>
        </div>

        <div className={styles.circleTwo}></div>
      </div>
      <Story />
      <Mv />
      <Value />
      <Team />
      <Journey />
      <OurPartners />
    </>
  );
};
export default About;
