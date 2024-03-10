import styles from "./button.module.css";

export default function Button(props) {
  const { text, onChangeClick } = props;

  return (
    <button onClick={onChangeClick} className={styles.button}>
      {text}
    </button>
  );
}
