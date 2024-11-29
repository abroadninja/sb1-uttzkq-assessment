import { create } from 'zustand';
import { AssessmentState, Answer } from '../types/assessment';

export const useAssessmentStore = create<AssessmentState>((set) => ({
  currentSectionIndex: 0,
  currentCategoryIndex: 0,
  answers: [],
  addAnswer: (answer: Answer) =>
    set((state) => ({
      answers: [
        ...state.answers.filter((a) => a.questionId !== answer.questionId),
        answer,
      ],
    })),
  nextCategory: () =>
    set((state) => ({
      currentCategoryIndex: state.currentCategoryIndex + 1,
    })),
  previousCategory: () =>
    set((state) => ({
      currentCategoryIndex: Math.max(0, state.currentCategoryIndex - 1),
    })),
}));