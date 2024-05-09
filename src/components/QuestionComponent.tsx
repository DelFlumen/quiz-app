import styled from "styled-components";
import { Question } from "../mockedQuestions";
import Variant from "./Variant";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-self: flex-start;
  padding: 0 5rem;
  cursor: pointer;

  & > li {
    width: 100%;
    &:hover {
      background-color: lightgray;
    }
  }
`;

const QuestionComponent = ({
  questionItem,
  updateAnswers,
  answer,
}: {
  questionItem: Question;
  updateAnswers: (id: number, answer: number) => void;
  answer: number | null;
}) => {
  return (
    <StyledContainer>
      <h2>{`${questionItem.id}. ${questionItem.question}`}</h2>
      <StyledList>
        {questionItem.variants.map((variant) => (
          <Variant
            key={`${questionItem.id}_${variant}`}
            questionItem={questionItem}
            variant={variant}
            updateAnswers={updateAnswers}
            answer={answer}
          />
        ))}
      </StyledList>
    </StyledContainer>
  );
};

export default QuestionComponent;
