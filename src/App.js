import "./App.css";
import Header from "./components/common/header/Header";
import ButtonAdd from "./components/wordsList/buttons/buttonAdd/ButtonAdd";
import ButtonDelete from "./components/wordsList/buttons/buttonDelete/ButtonDelete";
import ButtonEditCancel from "./components/wordsList/buttons/buttonEdit/buttonEditCancel/ButtonEditCancel";
import ButtonEditConfirm from "./components/wordsList/buttons/buttonEdit/buttonEditConfirm/ButtonEditConfirm";
import Inputs from "./components/wordsList/newWordInput/Inputs";
import WordsList from "./components/wordsList/wordsList/WordsList";

// Если будем сохранять добавленные слова в LocalStorage, то при загрузке страницы проверяем, есть ли там что-то, если нет,то отображается только блок инпутов, если есть, то инпуты и список слов (пока не поняла, как и то и другое добавить таким синтаксисом)

function App() {
  const words = localStorage.getItem("word");
  return (
    <div className="App">
      <Header />
      {words ? <Inputs /> : <WordsList />}
    </div>
  );
}

export default App;
