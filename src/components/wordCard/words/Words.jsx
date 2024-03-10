import words from "../../../data.json";
import { useState, useEffect } from "react";
import WordCard from "../wordCard/WordCard";
import ButtonPrevious from "../buttons/buttonPrevious/ButtonPrevious";
import ButtonNext from "../buttons/buttonNext/ButtonNext";

export default function Words() {
  const [wordIndex, setWordIndex] = useState(0);
  const [clickedCard, setClickedCard] = useState(false);

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

  useEffect(() => {
    setClickedCard(false);
  }, []);

  return (
    <div>
      <WordCard
        english={words[wordIndex].english}
        transcription={words[wordIndex].transcription}
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
