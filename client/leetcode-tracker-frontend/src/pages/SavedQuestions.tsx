import QuestionList from "../components/QuestionList";
import Form from "../components/Form";

const SavedQuestions = () => {
  return (
    <div className="flex bg-slate-50">
      <QuestionList />
      <div className="flex justify-center items-start">
        <Form />
      </div>
    </div>
  );
};

export default SavedQuestions;
