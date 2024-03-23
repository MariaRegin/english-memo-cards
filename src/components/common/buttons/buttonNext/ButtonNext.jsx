import React from "react";
import Button from "../button/Button";

export default function ButtonNext(props) {
  const onChangeClick = props.onChangeClick;

  return <Button text="Следующее слово" onChangeClick={onChangeClick} />;
}
