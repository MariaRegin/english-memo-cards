import { createContext } from "react";

const WordsContext = createContext({
  words: [],
  fetchWords: () => {},
  addWord: () => {},
  updateWord: () => {},
  deleteWord: () => {},
  loading: false,
  catchError: () => {},
});

export default WordsContext;
