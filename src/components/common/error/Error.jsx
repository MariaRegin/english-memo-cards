import { Link } from "react-router-dom";
import styles from "./error.module.css";

export default function Error() {
  return (
    <div>
      <h2 className={styles.title}>Sorry, такой страницы нет (¬_¬ )</h2>
      <p>
        Наверняка то, что вам нужно, есть <Link to="/">на главной</Link>
      </p>
    </div>
  );
}
