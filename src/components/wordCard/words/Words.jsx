// import words from "../../../data.json";
import { useEffect } from "react";
import WordCard from "../wordCard/WordCard";
import ButtonPrevious from "../../common/buttons/buttonPrevious/ButtonPrevious";
import ButtonNext from "../../common/buttons/buttonNext/ButtonNext";
import wordsStore from "../../../stores/WordsStore";
import { observer } from "mobx-react";

const Words = observer(() => {
  const { words, wordIndex, fetchWords, handlePreviousWord, handleNextWord } =
    wordsStore;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchWords();
      } catch (error) {
        console.error(
          "Ошибка запроса, попробуйте перезагрузить страницу: ",
          error
        );
      }
    };
    fetchData();
  }, [fetchWords]);

  return (
    <div>
      <WordCard
        english={words[wordIndex].english}
        transcription={words[wordIndex].transcription}
        translation={words[wordIndex].russian}
      />
      <ButtonPrevious onChangeClick={handlePreviousWord} />
      <ButtonNext onChangeClick={handleNextWord} />
    </div>
  );
});

Words.defaultProps = {
  words: [],
};

export default Words;
