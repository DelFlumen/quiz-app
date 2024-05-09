import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, useState } from "react";
import { Question } from "../mockedQuestions";

const Variant = ({
  updateAnswers,
  questionItem,
  variant,
  isQuestionAnswered,
  setIsQuestionAnswered,
}: {
  updateAnswers: (id: number, answer: number) => void;
  questionItem: Question;
  variant: number;
  isQuestionAnswered: boolean;
  setIsQuestionAnswered: Dispatch<boolean>;
}) => {
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (id: number, answer: number) => {
    updateAnswers(questionItem.id, answer);
    setIsAnswered(true);
    setIsQuestionAnswered(true);
  };

  return (
    <>
      <li
        style={{ pointerEvents: isQuestionAnswered ? "none" : "auto" }}
        onClick={() => handleAnswer(questionItem.id, variant)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          {variant}
          {isAnswered && <FontAwesomeIcon icon={faCheck} />}
        </div>
      </li>
    </>
  );
};

export default Variant;
