import React from "react";
import { Question } from "../mockedQuestions";

const QuestionComponent = ({ questionItem }: { questionItem: Question }) => {
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
      <ul style={{ alignSelf: "flex-start", padding: "0 5rem" }}>
        {questionItem.variants.map((variant) => (
          <li>{variant}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;
