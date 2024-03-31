import styles from "./wordCard.module.css";
import Translation from "../translation/Translation";
import { useState, useEffect, useRef } from "react";
import ButtonCheck from "../../common/buttons/buttonCheck/ButtonCheck";

export default function WordCard(props) {
  const [clicked, setClicked] = useState(false);
  const { english = "Кот", transcription = "Пес" } = props;
  const [learnedWords, setLearnedWords] = useState(0);

  const handleClick = () => {
    setClicked(!clicked);
    setLearnedWords(learnedWords + 1);
  };

  const btn = useRef(null);

  useEffect(() => {
    setClicked(false);
    if (btn.current) {
      btn.current.focus();
    }
  }, [transcription]);

  return (
    <div className={styles.card}>
      <p className={styles.word}>{english}</p>
      <p className={styles.transcription}>{transcription}</p>
      {clicked ? (
        <Translation />
      ) : (
        <ButtonCheck ref={btn} onChangeClick={handleClick} />
      )}
      <div>Выучено слов: {learnedWords}</div>
    </div>
  );
}
