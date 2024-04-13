import styles from "./wordsList.module.css";
import ButtonDelete from "../../common/buttons/buttonDelete/ButtonDelete";
import ButtonEdit from "../../common/buttons/buttonEdit/ButtonEdit";
import ButtonEditCancel from "../../common/buttons/buttonEditCancel/ButtonEditCancel";
import { useState, useContext } from "react";
import { contextProvider } from "../../../context/WordsContext/WordsContext";
import ButtonAdd from "../../common/buttons/buttonAdd/ButtonAdd";
import Menu from "../../common/header/menu/Menu";
import Inputs from "../inputs/Inputs";
import WordEnglish from "./WordEnglish/WordEnglish";
import WordRussian from "./WordRussian/WordRussian";
import WordTranscription from "./WordTranscription/WordTransctiption";

export default function WordsList() {
  const [activateEdit, setActivateEdit] = useState(false);
  const [emptyInputCheck, setEmptyInputCheck] = useState(false);
  const { wordsList, editWord } = useContext(contextProvider);

  const handleChange = () => {
    setActivateEdit(!activateEdit);
  };

  const handleEditWord = (word, value, field) => {
    const updatedWordsList = wordsList.map((w) =>
      w === word ? { ...w, [field]: value } : w
    );
    editWord(updatedWordsList);
    handleEmptyInput(value);
  };

  const handleEmptyInput = (value) => {
    if (value === "") {
      setEmptyInputCheck(true);
    } else setEmptyInputCheck(false);
  };

  return (
    <main>
      <Menu />
      <div className={styles.wordsContainer}>
        <h1>Мой словарь</h1>
        <Inputs />
        {wordsList.map((word, index) => (
          <div className={styles.table} key={index}>
            <WordEnglish
              value={word.english}
              onChange={(e) => handleEditWord(word, e.target.value, "english")}
              disabled={!activateEdit}
            />
            <WordRussian
              value={word.russian}
              onChange={(e) => handleEditWord(word, e.target.value, "russian")}
              disabled={!activateEdit}
            />
            <WordTranscription
              value={word.transcription}
              onChange={(e) =>
                handleEditWord(word, e.target.value, "transcription")
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
            {emptyInputCheck && <p>Введите слово</p>}
          </div>
        ))}
      </div>
    </main>
  );
}

// Старый код до выделения инпутов в отдельные компоненты
//  {/* <input
//       className={!emptyInputCheck ? styles.input : styles.invalid}
//       type="text"
//       value={word.transcription}
//       onChange={(e) => handleEditWord(word, e.target.value)}
//       disabled={!activateEdit}
//     /> */}
