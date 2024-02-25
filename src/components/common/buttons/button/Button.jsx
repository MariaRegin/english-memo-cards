import styles from "./button.module.css";

export default function Button(props) {
  const { text } = props;
  return <button className={styles.button}>{text}</button>;
}
