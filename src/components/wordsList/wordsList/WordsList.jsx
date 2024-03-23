import words from "../../../data.json";
import styles from "./wordsList.module.css";
import ButtonDelete from "../../common/buttons/buttonDelete/ButtonDelete";
import ButtonEdit from "../../common/buttons/buttonEdit/ButtonEdit";
import ButtonEditCancel from "../../common/buttons/buttonEditCancel/ButtonEditCancel";
import { useState } from "react";
import ButtonAdd from "../../common/buttons/buttonAdd/ButtonAdd";
import Menu from "../../common/header/menu/Menu";

export default function WordsList() {
  const [activateEdit, setActivateEdit] = useState(false);

  const handleChange = () => {
    setActivateEdit(!activateEdit);
  };

  return (
    <div>
      <Menu />
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
