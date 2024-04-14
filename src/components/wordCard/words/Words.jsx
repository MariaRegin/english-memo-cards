// import words from "../../../data.json";
import { useState, useContext } from "react";
import WordCard from "../wordCard/WordCard";
import ButtonPrevious from "../../common/buttons/buttonPrevious/ButtonPrevious";
import ButtonNext from "../../common/buttons/buttonNext/ButtonNext";
import WordsContext from "../../../context/WordsContext/WordsContext";

export default function Words() {
  const [wordIndex, setWordIndex] = useState(0);
  const { words } = useContext(WordsContext);
  const handlePreviousWord = () => {
    if (wordIndex > 0) {
      setWordIndex(wordIndex - 1);
    }
  };

  const handleNextWord = () => {
    wordIndex === words.length - 1
      ? setWordIndex(0)
      : setWordIndex(wordIndex + 1);
  };

  return (
    <div>
      <WordCard
      //  english={words[wordIndex].english}
      //  transcription={words[wordIndex].transcription}
      />
      <ButtonPrevious onChangeClick={handlePreviousWord} />
      <ButtonNext onChangeClick={handleNextWord} />
    </div>
  );
}

Words.defaultProps = {
  words: [],
};

export { Words };
