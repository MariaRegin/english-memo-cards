import { makeAutoObservable } from "mobx";

class WordsStore {
  words = [];
  wordIndex = 0;

  constructor() {
    makeAutoObservable(this);
  }

  //Для таблицы слов:

  fetchWords = async () => {
    const response = await fetch("/api/words/");
    const data = await response.json();
    this.words = data;
  };

  addWord = async (newWord) => {
    const response = await fetch("/api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    });
    const data = await response.json();
    this.words.push(data);
  };

  deleteWord = async (id) => {
    await fetch(`/api/words/${id}/delete`, {
      method: "POST",
    });
    this.words = this.words.filter((word) => word.id !== id);
  };

  updateWord = async (updatedWord) => {
    const response = await fetch(`/api/words/${updatedWord.id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
    });
    const data = await response.json();
    this.words = this.words.map((word) =>
      word.id === updatedWord.id ? data : word
    );
  };

  //Для карточек:
  handlePreviousWord = () => {
    if (this.wordIndex > 0) {
      this.wordIndex = this.wordIndex - 1;
    }
  };

  handleNextWord = () => {
    this.wordIndex === this.words.length - 1
      ? (this.wordIndex = 0)
      : (this.wordIndex = this.wordIndex + 1);
  };
}

const wordsStore = new WordsStore();
export default wordsStore;

// Вариант с декораторами:
// @observable words = [];

// @action fetchWords = async () => {
//   const response = await fetch("/api/words/");
//   const data = await response.json();
//   this.words = data;
// };

// @action addWord = async (newWord) => {
//   const response = await fetch("/api/words/add", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newWord),
//   });
//   const data = await response.json();
//   this.words.push(data);
// };

// @action deleteWord = async (id) => {
//   await fetch(`/api/words/${id}/delete`, {
//     method: "POST",
//   });
//   this.words = this.words.filter((word) => word.id !== id);
// };

// @action updateWord = async (updatedWord) => {
//   const response = await fetch(`/api/words/${updatedWord.id}/update`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedWord),
//   });
//   const data = await response.json();
//   this.words = this.words.map((word) =>
//     word.id === updatedWord.id ? data : word
//   );
// };
