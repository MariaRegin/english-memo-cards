import Button from "../button/Button";

export default function ButtonAdd(props) {
  const disabled = props.disabled;
  const onChangeClick = props.onChangeClick;

  return (
    <Button
      text="Сохранить"
      onChangeClick={onChangeClick}
      disabled={disabled}
    />
  );
}
