import words from "../../../data.json";
import styles from "./wordsList.module.css";
import ButtonDelete from "../buttons/buttonDelete/ButtonDelete";
import ButtonEdit from "../buttons/buttonEdit/buttonEdit/ButtonEdit";
import ButtonEditCancel from "../buttons/buttonEdit/buttonEditCancel/ButtonEditCancel";
import { useState } from "react";
import ButtonAdd from "../buttons/buttonAdd/ButtonAdd";

export default function WordsList() {
  const [activateEdit, setActivateEdit] = useState(false);

  const handleChange = () => {
    setActivateEdit(!activateEdit);
  };

  return (
    <div>
      <div className={styles.wordslist}>
        {words.map((word) => (
          <div className={styles.line}>
            <p>{word.english}</p>
            <p>{word.russian}</p>
            <div>
              {!activateEdit && (
                <ButtonEdit
                  className={styles.button}
                  onChangeClick={handleChange}
                />
              )}
              {activateEdit && <ButtonAdd />}
              {activateEdit && (
                <ButtonEditCancel onChangeClick={handleChange} />
              )}
              <ButtonDelete />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
