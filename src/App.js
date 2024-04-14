import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/common/header/header/Header";
import WordsList from "./components/wordsList/wordsList/WordsList";
import Words from "./components/wordCard/words/Words";
import Error from "./components/common/error/Error";
import WordsContext from "./context/WordsContext/WordsContext";

function App() {
  const [words, setWords] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchWords() {
    try {
      const response = await fetch("/api/words");
      if (!response.ok) {
        throw new Error(
          "Что-то пошло не так, попробуйте перезагрузить страницу"
        );
      }
      const data = await response.json();
      setWords(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  async function addWord(newWord) {
    try {
      const response = await fetch("/api/words/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      });
      if (!response.ok) {
        throw new Error(
          "Что-то пошло не так, попробуйте перезагрузить страницу"
        );
      }
      const data = await response.json();
      setWords((words) => [...words, data]);
    } catch (error) {
      setError(error);
    }
  }

  async function updateWord(updatedWord) {
    try {
      const response = await fetch(`/api/words/${updatedWord.id}/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedWord),
      });
      if (!response.ok) {
        throw new Error(
          "Что-то пошло не так, попробуйте перезагрузить страницу"
        );
      }
      const data = await response.json();
      setWords(words.map((word) => (word.id === updatedWord.id ? data : word)));
    } catch (error) {
      setError(error);
    }
  }

  async function deleteWord(id) {
    try {
      const response = await fetch(`/api/words/${id}/delete`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(
          "Что-то пошло не так, попробуйте перезагрузить страницу"
        );
      }
      setWords(words.filter((word) => word.id !== id));
    } catch (error) {
      setError(error);
    }
  }

  return (
    <Router>
      <WordsContext.Provider
        value={{
          words,
          fetchWords,
          addWord,
          updateWord,
          deleteWord,
        }}
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/vocabulary" element={<WordsList />} />
            <Route path="/cards" element={<Words />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </WordsContext.Provider>
    </Router>
  );
}

export default App;

//Старая версия:
// function App() {
//   return (
//     <Router>
//       <ContextProvider>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Header />} />
//             <Route path="/vocabulary" element={<WordsList />} />
//             <Route path="/cards" element={<Words />} />
//             <Route path="*" element={<Error />} />
//           </Routes>
//         </div>
//       </ContextProvider>
//     </Router>
//   );
// }

// export default App;
