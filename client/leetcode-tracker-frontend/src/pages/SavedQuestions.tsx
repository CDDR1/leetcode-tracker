import QuestionList from "../components/QuestionList";
import Form from "../components/Form";

const SavedQuestions = () => {
  return (
    <div className="flex">
      <QuestionList />
      <div className="flex justify-center items-center">
        <Form />
      </div>
    </div>
  );
};

export default SavedQuestions;
