import { create } from "zustand";

type Question = {
  _id: string;
  number: number;
  title: string;
  difficulty: string;
};

interface QuestionState {
  questions: Question[];
  load: (newQuestions: Question[]) => void;
  create: (newQuestion: Question) => void;
  delete: (deletedQuestion: Question) => void;
  update: (updatedQuestion: Question) => void;
}

const useQuestionStore = create<QuestionState>()((set) => ({
  questions: [],
  load: (newQuestions: Question[]) => set(() => ({ questions: [...newQuestions] })),
  create: (newQuestion: Question) => set((state) => ({ questions: [...state.questions, newQuestion] })),
  delete: (deletedQuestion: Question) => set((state) => ({ questions: state.questions.filter((question) => question._id !== deletedQuestion._id) })),
  update: (updatedQuestion: Question) =>
    set((state) => ({
      questions: state.questions.map((question) => {
        if (question._id === updatedQuestion._id) {
          return updatedQuestion;
        }
        return question;
      }),
    })),
}));

export default useQuestionStore;
