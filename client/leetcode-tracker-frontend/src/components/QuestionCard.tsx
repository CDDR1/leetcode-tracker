import { FaTrash, FaEdit } from "react-icons/fa";

type QuestionCardProps = {
  title: string;
  questionNumber: number;
  difficulty: string;
};

const QuestionCard = ({ title, questionNumber, difficulty }: QuestionCardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-lg rounded-md my-4">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <ul>
          <li>Question Number: {questionNumber}</li>
          <li>Difficulty: {difficulty}</li>
        </ul>
        <div className="flex justify-end gap-2 text-xl">
          <button>
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
