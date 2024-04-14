import { useState, useContext } from "react";
import ButtonAdd from "../../common/buttons/buttonAdd/ButtonAdd";
import styles from "./addWordInput.module.css";

export default function AddWordInput({ onSubmit }) {
  const [english, setEnglish] = useState("");
  const [russian, setRussian] = useState("");
  const [transcription, setTranscription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWord = { english, russian, transcription };
    onSubmit(newWord);
    setEnglish("");
    setRussian("");
    setTranscription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setEnglish(e.target.value)}
        value={english}
        placeholder="Слово"
      />
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setRussian(e.target.value)}
        value={russian}
        placeholder="Перевод"
      />
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setTranscription(e.target.value)}
        value={transcription}
        placeholder="Транскрипция"
      />
      <div>{english}</div>
      <ButtonAdd type="submit" />
    </form>
  );
}
