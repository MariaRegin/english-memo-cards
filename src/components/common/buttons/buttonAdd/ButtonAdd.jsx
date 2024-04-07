import Button from "../button/Button";

export default function ButtonAdd(props) {
  const disabled = props.disabled;

  return <Button text="Добавить" disabled={disabled} />;
}
