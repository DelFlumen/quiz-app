import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Question } from "../mockedQuestions";
import styled from "styled-components";

const StyledListItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;

const Variant = ({
  updateAnswers,
  questionItem,
  variant,
  answer,
}: {
  updateAnswers: (id: number, answer: number) => void;
  questionItem: Question;
  variant: number;
  answer: number | null;
}) => {
  const isVariantSelected = variant === answer;

  const handleAnswer = (id: number, answer: number) => {
    updateAnswers(id, answer);
  };

  return (
    <>
      <li onClick={() => handleAnswer(questionItem.id, variant)}>
        <StyledListItemContent>
          {variant}
          {isVariantSelected && <FontAwesomeIcon icon={faCheck} />}
        </StyledListItemContent>
      </li>
    </>
  );
};

export default Variant;
