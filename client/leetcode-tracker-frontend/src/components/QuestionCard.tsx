import { FaTrash, FaEdit } from "react-icons/fa";
import useQuestionStore from "../zustand/questionStore";

type QuestionCardProps = {
  id: string;
  title: string;
  questionNumber: number;
  difficulty: string;
};

const QuestionCard = ({ id, title, questionNumber, difficulty }: QuestionCardProps) => {
  const deleteQuestion = useQuestionStore((state) => state.delete);

  const handleDelete = async () => {
    try {
      const res = await fetch(`https://leetcode-tracker-production-2900.up.railway.app/api/v1/questions/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const deletedQuestion = await res.json();
      deleteQuestion(deletedQuestion);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-lg rounded-md my-4">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <ul>
          <li>Question Number: {questionNumber}</li>
          <li>Difficulty: {difficulty}</li>
        </ul>
        <div className="flex justify-end gap-2 text-xl">
          <button onClick={handleDelete}>
            <FaTrash />
          </button>
          <button>
            <FaEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
