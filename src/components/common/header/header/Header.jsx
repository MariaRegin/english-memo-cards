import styles from "./header.module.css";
import ButtonCardLearn from "../../buttons/buttonCardLearn/ButtonCardLearn";
import ButtonWordsList from "../../buttons/buttonWordsList/ButtonWordsList";
import Menu from "../menu/Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Menu />
      <div className={styles.content}>
        <h1 className={styles.title}>EnMemoCards</h1>
        <h2 className={styles.intro}>
          Учите английский по карточкам, создайте свой онлайн-словарь и
          отслеживайте прогресс
        </h2>
        <ButtonCardLearn />
        <ButtonWordsList />
      </div>
    </header>
  );
}
