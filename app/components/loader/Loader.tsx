import { BounceLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.spinner}>
      <BounceLoader color="#09F" size={60} />
    </div>
  );
};

export default Loader;
