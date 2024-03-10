import React from "react";
import Button from "../../../common/buttons/button/Button";

export default function ButtonPrevious(props) {
  const onChangeClick = props.onChangeClick;

  return <Button text="Предыдущее слово" onChangeClick={onChangeClick} />;
}
