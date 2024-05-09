import { useState } from "react";
import { Question } from "../mockedQuestions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Variant from "./Variant";

const QuestionComponent = ({
  questionItem,
  updateAnswers,
}: {
  questionItem: Question;
  updateAnswers: (id: number, answer: number) => void;
}) => {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  const handleAnswer = (id: number, answer: number) => {
    updateAnswers(questionItem.id, answer);
    setIsQuestionAnswered(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
      }}
    >
      <h2>{questionItem.question}</h2>
      <ul
        style={{
          alignSelf: "flex-start",
          padding: "0 5rem",
          cursor: "pointer",
        }}
      >
        {questionItem.variants.map((variant) => (
          <Variant
            questionItem={questionItem}
            variant={variant}
            updateAnswers={updateAnswers}
            isQuestionAnswered={isQuestionAnswered}
            setIsQuestionAnswered={setIsQuestionAnswered}
          />
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;
