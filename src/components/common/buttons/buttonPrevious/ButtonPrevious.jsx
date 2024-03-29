import React from "react";
import Button from "../button/Button";
import styles from "./buttonPrevious.module.css";

export default function ButtonPrevious(props) {
  const onChangeClick = props.onChangeClick;

  return <Button text="Предыдущее слово" onChangeClick={onChangeClick} />;
}
