import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/common/header/header/Header";
import WordsList from "./components/wordsList/wordsList/WordsList";
import Words from "./components/wordCard/words/Words";
import Error from "./components/common/error/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/vocabulary" element={<WordsList />} />
          <Route path="/cards" element={<Words />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
