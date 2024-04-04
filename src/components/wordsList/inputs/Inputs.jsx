import { useState } from "react";
import ButtonAdd from "../../common/buttons/buttonAdd/ButtonAdd";
import ButtonEditCancel from "../../common/buttons/buttonEditCancel/ButtonEditCancel";
import styles from "./inputs.module.css";

export default function Inputs() {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value.toUpperCase());
  };

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        onChange={handleText}
        value={text}
        placeholder="Слово для добавления Eng"
      />
      <div>{text}</div>
      <ButtonAdd />
      <ButtonEditCancel />
    </div>
  );
}
