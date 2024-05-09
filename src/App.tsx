import { useState } from "react";
import "./App.css";
import QuestionComponent from "./components/QuestionComponent";
import { mockedQuestions } from "./mockedQuestions";

type Answer = {
  id: number;
  answer: number | null;
};

function App() {
  const [currQuestion, setCurrQuestion] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>(
    mockedQuestions.map((quest) => ({ id: quest.id, answer: null }))
  );
  const [isQuizDone, setIsQuizDone] = useState(false);

  const getQuizResult = (): number => {
    return answers.reduce((acc, curr) => {
      if (
        curr.answer ===
        mockedQuestions.find((question) => question.id === curr.id)
          ?.correctAnswer
      ) {
        return acc + 10;
      } else return acc;
    }, 0);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Quiz</h1>
      {isQuizDone ? (
        <h2>Your grade: {getQuizResult()}</h2>
      ) : (
        <QuestionComponent
          questionItem={
            mockedQuestions.find((quest) => quest.id === currQuestion) ||
            mockedQuestions[0]
          }
        />
      )}
      <div>
        {currQuestion > 1 ? (
          <button onClick={() => setCurrQuestion((prevState) => prevState - 1)}>
            Prev
          </button>
        ) : null}
        {currQuestion < 10 ? (
          <button onClick={() => setCurrQuestion((prevState) => prevState + 1)}>
            'Next'
          </button>
        ) : (
          <button>'Done'</button>
        )}
      </div>
    </div>
  );
}

export default App;
