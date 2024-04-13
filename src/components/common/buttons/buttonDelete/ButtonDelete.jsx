import Button from "../button/Button";

export default function ButtonDelete({ onDelete }) {
  return <Button text="Удалить" onChangeClick={onDelete} />;
}
