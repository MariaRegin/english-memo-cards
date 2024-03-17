import styles from "./wordCard.module.css";
import Translation from "../translation/Translation";
import { useState, useEffect } from "react";
import ButtonCheck from "../buttons/buttonCheck/ButtonCheck";
import Menu from "../../common/header/menu/Menu";

export default function WordCard(props) {
  const [clicked, setClicked] = useState(false);
  const { english = "Кот", transcription = "Пес" } = props;

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    setClicked(false);
  }, [transcription]);

  return (
    <div className={styles.card}>
      <p className={styles.word}>{english}</p>
      <p className={styles.transcription}>{transcription}</p>
      {clicked ? <Translation /> : <ButtonCheck onChangeClick={handleClick} />}
    </div>
  );
}
