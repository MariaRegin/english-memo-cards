import styles from "./header.module.css";
import ButtonCardLearn from "../buttons/buttonCardLearn/ButtonCardLearn";
import ButtonWordsList from "../buttons/buttonWordsList/ButtonWordsList";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>EnMemoCards</h1>
      <h2 className={styles.intro}>
        Учите английский по карточкам, создайте свой онлайн-словарь и
        отслеживайте прогресс
      </h2>
      <ButtonCardLearn />
      <ButtonWordsList />
    </header>
  );
}
