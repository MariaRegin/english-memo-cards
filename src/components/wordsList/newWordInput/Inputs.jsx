import ButtonAdd from "../buttons/buttonAdd/ButtonAdd";
import ButtonEditCancel from "../buttons/buttonEdit/buttonEditCancel/ButtonEditCancel";
import NewWordInput from "./NewWordInput";

export default function Inputs() {
  return (
    <div>
      <NewWordInput placeholder="Слово для добавления Eng" />
      <NewWordInput placeholder="Транскрипция — необязательно" />
      <NewWordInput placeholder="Перевод Rus" />
      <ButtonAdd />
      <ButtonEditCancel />
    </div>
  );
}
