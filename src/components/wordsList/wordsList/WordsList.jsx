import words from "./data.json";
import styles from "./wordsList.module.css";
import ButtonDelete from "../buttons/buttonDelete/ButtonDelete";
import ButtonEditConfirm from "../buttons/buttonEdit/buttonEditConfirm/ButtonEditConfirm";
import ButtonEditCancel from "../buttons/buttonEdit/buttonEditCancel/ButtonEditCancel";
import { useState } from "react";

export default function WordsList() {
  const [activateEdit, setActivateEdit] = useState(false);
  const [cancelEdit, setCancelEdit] = useState(words);

  const handleChange = () => {
    setActivateEdit(!activateEdit);
  };

  return (
    <div>
      <div className={styles.wordslist}>
        {words.map((word) => (
          <div className={styles.line}>
            <p contentEditable>{word.english}</p>
            <p contentEditable>{word.russian}</p>
            <div>
              <ButtonDelete />
              {activateEdit ? (
                <button className={styles.button} onClick={handleChange} />
              ) : (
                <button onClick={handleChange} />
                // Это кнопка Редактирование
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
