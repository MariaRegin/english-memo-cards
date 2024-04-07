import words from "../../../data.json";
import styles from "./wordsList.module.css";
import ButtonDelete from "../../common/buttons/buttonDelete/ButtonDelete";
import ButtonEdit from "../../common/buttons/buttonEdit/ButtonEdit";
import ButtonEditCancel from "../../common/buttons/buttonEditCancel/ButtonEditCancel";
import { useState, useEffect } from "react";
import ButtonAdd from "../../common/buttons/buttonAdd/ButtonAdd";
import Menu from "../../common/header/menu/Menu";
import Inputs from "../inputs/Inputs";

export default function WordsList() {
  const [activateEdit, setActivateEdit] = useState(false);
  const [editedWords, setEditedWords] = useState(words);
  const [emptyInputCheck, setEmptyInputCheck] = useState(false);

  {
    const handleChange = () => {
      setActivateEdit(!activateEdit);
    };

    const handleInputChange = (index, field, value) => {
      const updatedWords = editedWords.map((word, i) => {
        if (i === index) {
          return { ...word, [field]: value };
        }
        return word;
      });
      setEditedWords(updatedWords);
      handleEmptyInput(value);
    };

    // const handleEmptyInput = () => {
    //   const checkEmpty = editedWords.map(
    //     (word) =>
    //       word.english === "" ||
    //       word.russian === "" ||
    //       word.transcription === ""
    //   );
    //   console.log(checkEmpty);
    //   setEmptyInputCheck(checkEmpty);
    // };

    const handleEmptyInput = (value) => {
      if (value === "") {
        setEmptyInputCheck(emptyInputCheck);
      }
      setEmptyInputCheck(!emptyInputCheck);
    };

    return (
      <main>
        <Menu />
        <div className={styles.wordsContainer}>
          <h1>Мой словарь</h1>
          <Inputs />
          {editedWords.map((word, index) => (
            <div className={styles.line} key={index}>
              <input
                className={!emptyInputCheck ? styles.input : styles.invalid}
                type="text"
                value={word.english}
                onChange={(e) =>
                  handleInputChange(index, "english", e.target.value)
                }
                disabled={!activateEdit}
              />
              <input
                className={!emptyInputCheck ? styles.input : styles.invalid}
                type="text"
                value={word.russian}
                onChange={(e) =>
                  handleInputChange(index, "russian", e.target.value)
                }
                disabled={!activateEdit}
              />
              <input
                className={!emptyInputCheck ? styles.input : styles.invalid}
                type="text"
                value={word.transcription}
                onChange={(e) =>
                  handleInputChange(index, "transcription", e.target.value)
                }
                disabled={!activateEdit}
              />
              <div>
                {!activateEdit && <ButtonEdit onChangeClick={handleChange} />}
                {activateEdit && <ButtonAdd disabled={emptyInputCheck} />}
                {activateEdit && (
                  <ButtonEditCancel onChangeClick={handleChange} />
                )}
                <ButtonDelete />
              </div>
            </div>
          ))}
        </d>
      </main>
    );
  }
}
