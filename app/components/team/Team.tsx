import { API_BASE_URL } from "@/config/config";
import TeamCarousel from "./TeamCarousel";
import styles from "./team.module.css";

type TeamItem = {
  id: number;
  name: string;
  image: string;
  position: string;
  description: string;
};


const getTeam = async (): Promise<TeamItem[]> => {
  const res = await fetch(`${API_BASE_URL}/team`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data;
};

const Team = async () => {
  const team = await getTeam();
  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <h2 className={styles.title}>Meet Our Team</h2>
        <TeamCarousel team={team} />
      </div>
    </section>
  );
};

export default Team;
