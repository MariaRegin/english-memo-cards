import words from "./data.json";
import styles from "./wordsList.module.css";
import ButtonDelete from "../buttons/buttonDelete/ButtonDelete";
import ButtonEditConfirm from "../buttons/buttonEdit/buttonEditConfirm/ButtonEditConfirm";

export default function WordsList() {
  return (
    <div>
      <div className={styles.wordslist}>
        {words.map((word) => (
          <div>
            <p>{word.english}</p>
            <p>{word.russian}</p>
          </div>
        ))}
      </div>
      <ButtonDelete />
      <ButtonEditConfirm />
    </div>
  );
}
