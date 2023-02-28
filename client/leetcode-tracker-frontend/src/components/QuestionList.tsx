import Collapse from "./Collapse";
import QuestionCard from "./QuestionCard";
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
        <QuestionCard key={question._id} questionNumber={question.number} title={question.title} difficulty={question.difficulty} />
      ))}
    </div>
  );
};

export default QuestionList;
