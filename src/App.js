import "./App.css";
import Header from "./components/common/header/Header";
import Words from "./components/wordCard/words/Words";
import Inputs from "./components/wordsList/newWordInput/Inputs";
import WordsList from "./components/wordsList/wordsList/WordsList";

function App() {
  const words = localStorage.getItem("word");
  return (
    <div className="App">
      <Header />
      {words ? <Inputs /> : <WordsList />}
      <Words />
    </div>
  );
}

export default App;
