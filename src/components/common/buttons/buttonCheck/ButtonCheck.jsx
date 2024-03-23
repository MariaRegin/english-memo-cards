import React from "react";
import Button from "../button/Button";

export default function ButtonCheck(props) {
  const onChangeClick = props.onChangeClick;

  return <Button text="Проверить" onChangeClick={onChangeClick} />;
}
