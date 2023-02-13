import Collapse from "./Collapse";
import { useState, useEffect } from "react";

const QuestionList = () => {
  const [questions, setQustions] = useState([]);

  useEffect(() => {
    fetch("https://leetcode-tracker-production.up.railway.app/api/v1/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mx-auto w-2/3 flex flex-col gap-2">
      <Collapse />
      <Collapse />
      <Collapse />
    </div>
  );
};

export default QuestionList;
