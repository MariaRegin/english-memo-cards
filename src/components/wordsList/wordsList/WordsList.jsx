import styles from "./wordsList.module.css";
import ButtonDelete from "../../common/buttons/buttonDelete/ButtonDelete";
import ButtonEdit from "../../common/buttons/buttonEdit/ButtonEdit";
import { useState, useContext, useEffect } from "react";
import WordsContext from "../../../context/WordsContext/WordsContext";
import ButtonAdd from "../../common/buttons/buttonAdd/ButtonAdd";
import Menu from "../../common/header/menu/Menu";
import AddWordInput from "../addWordInput/AddWordInput";
import WordEnglish from "./WordEnglish/WordEnglish";
import WordRussian from "./WordRussian/WordRussian";
import WordTranscription from "./WordTranscription/WordTransctiption";
import Loader from "../../common/loader/Loader";

export default function WordsList() {
  const [activateEdit, setActivateEdit] = useState(false);
  const [emptyInputCheck, setEmptyInputCheck] = useState(false);
  const {
    words,
    fetchWords,
    addWord,
    updateWord,
    deleteWord,
    loading,
    catchError,
  } = useContext(WordsContext);

  useEffect(() => {
    fetchWords();
  }, [fetchWords, loading]);

  const handleChange = () => {
    setActivateEdit(!activateEdit);
  };

  const handleAddWord = (newWord) => {
    addWord(newWord);
    handleEmptyInput(newWord);
  };

  const handleUpdateWord = (updatedWord) => {
    updateWord(updatedWord);
  };

  const handleDeleteWord = (id) => {
    deleteWord(id);
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
        {loading && <Loader />}
        <h1>Мой словарь</h1>
        <AddWordInput onSubmit={handleAddWord} />
        {words.map((word) => (
          <div className={styles.table} key={word.id}>
            <WordEnglish
              className={emptyInputCheck ? styles.invalid : styles.input}
              value={word.english}
              onChange={(e) => {
                handleUpdateWord({ ...word, english: e.target.value });
                handleEmptyInput(e.target.value);
              }}
              disabled={!activateEdit}
            />
            <WordRussian
              value={word.russian}
              onChange={(e) => {
                handleUpdateWord({ ...word, russian: e.target.value });
                handleEmptyInput(e.target.value);
              }}
              disabled={!activateEdit}
            />
            <WordTranscription
              value={word.transcription}
              onChange={(e) => {
                handleUpdateWord({ ...word, transcription: e.target.value });
                handleEmptyInput(e.target.value);
              }}
              disabled={!activateEdit}
            />
            <div>
              {!activateEdit && <ButtonEdit onChangeClick={handleChange} />}
              {activateEdit && (
                <ButtonAdd
                  onChangeClick={handleChange}
                  disabled={emptyInputCheck}
                />
              )}
              <ButtonDelete
                onChangeClick={() => {
                  handleDeleteWord(word.id);
                }}
              />
            </div>
            {emptyInputCheck && <p className={styles.error}>Введите слово</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
