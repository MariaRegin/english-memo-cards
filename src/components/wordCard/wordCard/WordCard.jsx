import styles from "./wordCard.module.css";
import Translation from "../translation/Translation";
import { useState } from "react";
import ButtonCheck from "../buttons/buttonCheck/ButtonCheck";

export default function WordCard() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={styles.card}>
      <p className={styles.word}>Stork</p>
      <p className={styles.transcription}>[stork]</p>
      {clicked ? <Translation /> : <button onClick={handleClick} />}
    </div>
  );
}
