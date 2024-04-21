import styles from "./wordsList.module.css";
import ButtonDelete from "../../common/buttons/buttonDelete/ButtonDelete";
import ButtonEdit from "../../common/buttons/buttonEdit/ButtonEdit";
import { useState, useEffect } from "react";
import ButtonAdd from "../../common/buttons/buttonAdd/ButtonAdd";
import Menu from "../../common/header/menu/Menu";
import AddWordInput from "../addWordInput/AddWordInput";
import WordEnglish from "./WordEnglish/WordEnglish";
import WordRussian from "./WordRussian/WordRussian";
import WordTranscription from "./WordTranscription/WordTransctiption";
import Loader from "../../common/loader/Loader";
import { observer } from "mobx-react";
import wordsStore from "../../../stores/WordsStore";

const WordsList = observer(() => {
  const { words, fetchWords, addWord, updateWord, deleteWord } = wordsStore;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activateEdit, setActivateEdit] = useState(false);
  const [emptyInputCheck, setEmptyInputCheck] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchWords();
        setIsLoading(false);
      } catch (error) {
        console.error(
          "Ошибка запроса, попробуйте перезагрузить страницу: ",
          error
        );
        setError(error);
      }
    };
    fetchData();
  }, [fetchWords]);

  const handleChange = () => {
    setActivateEdit(!activateEdit);
  };

  const handleAddWord = (newWord) => {
    addWord(newWord);
    handleEmptyInput(newWord);
    setIsLoading(false);
  };

  const handleEmptyInput = (value) => {
    if (value === "") {
      setEmptyInputCheck(true);
    } else setEmptyInputCheck(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Ошибка загрузки слов: {error.message}</p>;
  }

  return (
    <main>
      <Menu />
      <div className={styles.wordsContainer}>
        <h1>Мой словарь</h1>
        <AddWordInput onSubmit={handleAddWord} />
        {words.map((word) => (
          <div className={styles.table} key={word.id}>
            <WordEnglish
              className={emptyInputCheck ? styles.invalid : styles.input}
              value={word.english}
              onChange={(e) => {
                updateWord({ ...word, english: e.target.value });
                handleEmptyInput(e.target.value);
              }}
              disabled={!activateEdit}
            />
            <WordRussian
              value={word.russian}
              onChange={(e) => {
                updateWord({ ...word, russian: e.target.value });
                handleEmptyInput(e.target.value);
              }}
              disabled={!activateEdit}
            />
            <WordTranscription
              value={word.transcription}
              onChange={(e) => {
                updateWord({ ...word, transcription: e.target.value });
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
                  deleteWord(word.id);
                }}
              />
            </div>
            {emptyInputCheck && <p className={styles.error}>Введите слово</p>}
          </div>
        ))}
      </div>
    </main>
  );
});

export default WordsList;
