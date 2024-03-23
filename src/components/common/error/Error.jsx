import { Link } from "react-router-dom";
import styles from "./error.module.css";

export default function Error() {
  return (
    <main>
      <h1 className={styles.title}>Sorry, такой страницы нет (¬_¬ )</h1>
      <p>
        Наверняка то, что вам нужно, есть <Link to="/">на главной</Link>
      </p>
    </main>
  );
}
