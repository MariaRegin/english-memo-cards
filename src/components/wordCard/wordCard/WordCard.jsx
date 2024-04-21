import styles from "./wordCard.module.css";
import { useState } from "react";
import ButtonCheck from "../../common/buttons/buttonCheck/ButtonCheck";
import { observer } from "mobx-react";

const WordCard = observer((props) => {
  const [clicked, setClicked] = useState(false);
  const { english, transcription, russian } = props;
  const [learnedWords, setLearnedWords] = useState(0);

  console.log(russian);

  const handleClick = () => {
    setClicked(!clicked);
    setLearnedWords(learnedWords + 1);
  };

  return (
    <div className={styles.card}>
      <p className={styles.word}>{english}</p>
      <p className={styles.transcription}>{transcription}</p>
      {clicked ? <p>{russian}</p> : <ButtonCheck onChangeClick={handleClick} />}
      <div>Выучено слов: {learnedWords}</div>
    </div>
  );
});

export default WordCard;
