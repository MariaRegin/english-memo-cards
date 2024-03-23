import Button from "../button/Button";

export default function ButtonEditCancel(props) {
  const onChangeClick = props.onChangeClick;

  return <Button text="Отменить" onChangeClick={onChangeClick} />;
}
