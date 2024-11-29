export type QuestionOption = {
  value: number;
  label: string;
};

export type Question = {
  id: string;
  text: string;
  options: QuestionOption[];
};

export type Category = {
  id: string;
  title: string;
  questions: Question[];
};

export type Section = {
  id: string;
  title: string;
  categories: Category[];
};

export type Answer = {
  questionId: string;
  value: number;
};

export type AssessmentState = {
  currentSectionIndex: number;
  currentCategoryIndex: number;
  answers: Answer[];
  addAnswer: (answer: Answer) => void;
  nextCategory: () => void;
  previousCategory: () => void;
};