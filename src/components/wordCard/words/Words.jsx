import words from "../../../data.json";
import { useState } from "react";
import WordCard from "../wordCard/WordCard";
import ButtonPrevious from "../../common/buttons/buttonPrevious/ButtonPrevious";
import ButtonNext from "../../common/buttons/buttonNext/ButtonNext";

export default function Words() {
  const [wordIndex, setWordIndex] = useState(0);

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
