import styles from "./wordCard.module.css";
import Translation from "../translation/Translation";
import { useState } from "react";
import ButtonCheck from "../buttons/buttonCheck/ButtonCheck";

export default function WordCard(props) {
  const [clicked, setClicked] = useState(false);
  const { english, transcription } = props;

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={styles.card}>
      <p className={styles.word}>{english}</p>
      <p className={styles.transcription}>{transcription}</p>
      {clicked ? <Translation /> : <ButtonCheck onChangeClick={handleClick} />}
    </div>
  );
}
