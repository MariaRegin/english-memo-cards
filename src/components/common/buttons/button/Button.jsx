import styles from "./button.module.css";

export default function Button(props) {
  const { text, onChangeClick } = props;
  const disabled = props.disabled;

  return (
    <button
      className={styles.button}
      onClick={onChangeClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
