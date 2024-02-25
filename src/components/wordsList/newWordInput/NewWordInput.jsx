import styles from "./newWordInput.module.css";

export default function NewWordInput(props) {
  const placeholder = props;
  console.log(placeholder);
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder.placeholder}
      />
    </div>
  );
}
