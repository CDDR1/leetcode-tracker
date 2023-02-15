import Collapse from "./Collapse";
import { useState, useEffect } from "react";

type QuestionsState = {
  _id: string;
  number: number;
  title: string;
  difficulty: string;
};

const QuestionList = () => {
  const [questions, setQuestions] = useState<QuestionsState[]>([]);

  useEffect(() => {
    fetch("https://leetcode-tracker-production.up.railway.app/api/v1/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mx-auto w-2/3 flex flex-col gap-2">
      {questions.map((question) => (
        <Collapse key={question._id} questionNumber={question.number} questionName={question.title} questionDifficulty={question.difficulty} />
      ))}
    </div>
  );
};

export default QuestionList;
