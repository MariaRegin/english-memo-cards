import React from "react";
import Button from "../button/Button";

export default function ButtonPrevious(props) {
  const onChangeClick = props.onChangeClick;

  return <Button text="Предыдущее слово" onChangeClick={onChangeClick} />;
}
