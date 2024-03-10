import styles from "./button.module.css";

export default function Button(props) {
  const { text, onChangeClick } = props;
  return (
    <button className={styles.button} onClick={onChangeClick}>
      {text}
    </button>
  );
}
