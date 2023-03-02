import { create } from "zustand";

type Question = {
  _id: string;
  number: number;
  title: string;
  difficulty: string;
};

interface modalState {
  modalId: string;
  modalTitle: string;
  modalNumber: number;
  modalDifficulty: string;
  setModalValues: (newId: string, newTitle: string, newNumber: number, newDifficulty: string) => void;
}

const useModalStore = create<modalState>()((set) => ({
  modalId: "",
  modalTitle: "",
  modalNumber: 0,
  modalDifficulty: "",
  setModalValues: (newId: string, newTitle: string, newNumber: number, newDifficulty: string) => set(() => ({ modalId: newId, modalTitle: newTitle, modalNumber: newNumber, modalDifficulty: newDifficulty })),
}));

export default useModalStore;
