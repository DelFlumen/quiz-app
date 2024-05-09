export type Question = {
  id: number;
  question: string;
  variants: number[];
  correctAnswer: number;
};

export const mockedQuestions: Question[] = [
  {
    id: 1,
    question: "How much is 1+1?",
    variants: [1, 2, 3, 4],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "How much is 2+1?",
    variants: [1, 2, 3, 4],
    correctAnswer: 3,
  },
  {
    id: 3,
    question: "How much is 3+1?",
    variants: [1, 2, 3, 4],
    correctAnswer: 4,
  },
  {
    id: 4,
    question: "How much is 4+1?",
    variants: [4, 5, 6, 7],
    correctAnswer: 5,
  },
  {
    id: 5,
    question: "How much is 5+1?",
    variants: [4, 5, 6, 7],
    correctAnswer: 6,
  },
  {
    id: 6,
    question: "How much is 6+1?",
    variants: [4, 5, 6, 7],
    correctAnswer: 7,
  },
  {
    id: 7,
    question: "How much is 7+1?",
    variants: [8, 9, 10, 11],
    correctAnswer: 8,
  },
  {
    id: 8,
    question: "How much is 8+1?",
    variants: [8, 9, 10, 11],
    correctAnswer: 9,
  },
  {
    id: 9,
    question: "How much is 9+1?",
    variants: [8, 9, 10, 11],
    correctAnswer: 10,
  },
  {
    id: 10,
    question: "How much is 10+1?",
    variants: [8, 9, 10, 11],
    correctAnswer: 11,
  },
];
