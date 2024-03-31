import styles from "./header.module.css";
import ButtonCardLearn from "../../buttons/buttonCardLearn/ButtonCardLearn";
import ButtonWordsList from "../../buttons/buttonWordsList/ButtonWordsList";
import Menu from "../menu/Menu";
import mainbackground from "../../../../images/mainbackground.jpg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Menu />
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>MemoCards</h1>
          <h2 className={styles.intro}>
            Учите английский по карточкам, создайте свой онлайн-словарь и
            <span className={styles.emphasize}> отслеживайте прогресс</span>
          </h2>
          <ButtonCardLearn />
          <ButtonWordsList />
        </div>
        <div>
          <img className={styles.image} src={mainbackground} alt="Геометрия" />
        </div>
      </div>
    </header>
  );
}
