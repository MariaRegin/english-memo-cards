import { createContext } from "react";

const WordsContext = createContext({
  words: [],
  fetchWords: () => {},
  addWord: () => {},
  updateWord: () => {},
  deleteWord: () => {},
});

export default WordsContext;

//import { createContext, useState, useEffect } from "react";
//export const contextProvider = createContext();

// export default function ContextProvider(props) {
//   const [wordsList, setWordsList] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const addWord = (word) => {
//     setWordsList([...wordsList, word]);
//   };

//   const removeWord = (word) => {
//     setWordsList(wordsList.filter((w) => w !== word));
//   };

//   const editWord = (editedWords) => {
//     setWordsList(editedWords);
//   };

//   const handleError = () => {
//     setError(null);
//   };

//   async function fetchWords() {
//     try {
//       const response = await fetch(
//         "http://itgirlschool.justmakeit.ru/api/words"
//       );
//       if (!response.ok) {
//         throw new Error(
//           "Что-то пошло не так, попробуйте перезагрузить страницу"
//         );
//       }
//       const data = await response.json();
//       setWordsList(data);
//       setLoading(false);
//     } catch (error) {
//       setError(error);
//     }
//   }

//   useEffect(() => {
//     fetchWords();
//   }, []);

//   return (
//     <contextProvider.Provider
//       value={{
//         wordsList,
//         editWord,
//         loading,
//         setLoading,
//         error,
//         setError,
//       }}
//     >
//       {props.children}
//     </contextProvider.Provider>
//   );
// }
