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
}

const useQuestionStore = create<QuestionState>()((set) => ({
  questions: [],
  load: (newQuestions: Question[]) => set(() => ({ questions: [...newQuestions] })),
}));

export default useQuestionStore;