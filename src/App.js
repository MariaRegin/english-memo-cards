import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/common/header/header/Header";
import WordsList from "./components/wordsList/wordsList/WordsList";
import Words from "./components/wordCard/words/Words";
import Error from "./components/common/error/Error";
import ContextProvider from "./context/WordsContext/WordsContext";

function App() {
  const [words, setWords] = useState([]);

  return (
    <Router>
      <ContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/vocabulary" element={<WordsList />} />
            <Route path="/cards" element={<Words />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;

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
