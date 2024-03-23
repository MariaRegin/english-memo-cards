import Button from "../button/Button";

export default function ButtonEdit(props) {
  const onChangeClick = props.onChangeClick;

  return <Button onChangeClick={onChangeClick} text="Редактировать" />;
}
