import { useState } from "react";
import QuestionComponent from "./components/QuestionComponent";
import { mockedQuestions } from "./mockedQuestions";
import styled from "styled-components";

type Answer = {
  id: number;
  answer: number | null;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const initialAnswers = mockedQuestions.map((quest) => ({
  id: quest.id,
  answer: null,
}));

function App() {
  const [currQuestion, setCurrQuestion] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>(initialAnswers);
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

  const handleRestart = () => {
    setAnswers(initialAnswers);
    setCurrQuestion(1);
    setIsQuizDone(false);
  };

  const updateAnswers = (id: number, answer: number) => {
    setAnswers(
      answers.map((answerItem) =>
        answerItem.id === id ? { ...answerItem, answer } : answerItem
      )
    );
  };

  return (
    <StyledContainer>
      <h1>Quiz</h1>
      {isQuizDone ? (
        <h2>Your grade: {getQuizResult()} out of 100</h2>
      ) : (
        <QuestionComponent
          questionItem={
            mockedQuestions.find((quest) => quest.id === currQuestion) ||
            mockedQuestions[0]
          }
          updateAnswers={updateAnswers}
          answer={
            answers.find((answer) => answer.id === currQuestion)?.answer || null
          }
        />
      )}
      <div>
        {isQuizDone ? (
          <button onClick={handleRestart}>Restart</button>
        ) : currQuestion > 1 ? (
          <button onClick={() => setCurrQuestion((prevState) => prevState - 1)}>
            Prev
          </button>
        ) : null}
        {currQuestion < 10 ? (
          <button onClick={() => setCurrQuestion((prevState) => prevState + 1)}>
            Next
          </button>
        ) : !isQuizDone ? (
          <button onClick={() => setIsQuizDone(true)}>Done</button>
        ) : null}
      </div>
    </StyledContainer>
  );
}

export default App;
