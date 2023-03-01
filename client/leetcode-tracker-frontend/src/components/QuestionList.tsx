import QuestionCard from "./QuestionCard";
import { useEffect } from "react";
import useQuestionStore from "../zustand/questionStore";

const QuestionList = () => {
  const questions = useQuestionStore((state) => state.questions);
  const setQuestions = useQuestionStore((state) => state.load);

  useEffect(() => {
    fetch("https://leetcode-tracker-production.up.railway.app/api/v1/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-8/12">
      <h1 className="text-4xl text-center my-20">Saved Questions</h1>
      <div className="flex flex-col items-center">
        {questions.map((question) => (
          <QuestionCard key={question._id} id={question._id} questionNumber={question.number} title={question.title} difficulty={question.difficulty} />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
