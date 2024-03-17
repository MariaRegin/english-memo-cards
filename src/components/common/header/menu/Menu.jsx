import { Link } from "react-router-dom";
import styles from "./menu.module.css";
import Logo from "../logo/Logo";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Главная</Link>
        </li>
        <li className={styles.item}>
          <Link to="/vocabulary">Мой словарь</Link>
        </li>
        <li className={styles.item}>
          <Link to="/cards">Учить по карточкам</Link>
        </li>
      </ul>
    </nav>
  );
}
