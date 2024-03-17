import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/common/header/header/Header";
import WordsList from "./components/wordsList/wordsList/WordsList";
import WordCard from "./components/wordCard/wordCard/WordCard";
import Error from "./components/common/error/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/vocabulary" element={<WordsList />} />
          <Route path="/cards" element={<WordCard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
