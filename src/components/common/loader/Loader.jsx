import styles from "./loader.module.css";

export default function Loader() {
  return (
    <section className={styles.loader}>
      <div className={styles.wrapper}>
        <div className={styles.loader1}></div>
        <div className={styles.loader2}></div>
        <div className={styles.loader3}></div>
        <div className={styles.loader4}></div>
        <div className={styles.loader5}></div>
      </div>
      <p>One second</p>
    </section>
  );
}
