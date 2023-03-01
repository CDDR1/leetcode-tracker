import useQuestionStore from "../zustand/questionStore";

const Form = () => {
  const addNewQuestion = useQuestionStore((state) => state.create);

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const question = {
      title: formData.get("question-name" as string),
      number: parseInt(formData.get("question-number") as string),
      difficulty: formData.get("question-difficulty" as string),
    };

    try {
      const res = await fetch("https://leetcode-tracker-production-2900.up.railway.app/api/v1/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(question),
      });

      const newQuestion = await res.json();
      addNewQuestion(newQuestion);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={(e) => handleFormSubmission(e)} className="p-6 inline-block gap-4 shadow-lg rounded-md mt-32 bg-white">
      <fieldset>
        <legend className="mx-auto">
          <strong>Add Question</strong>
        </legend>
        <div className="flex flex-col my-4">
          <label htmlFor="question-name">Question Name:</label>
          <input type="text" id="question-name" name="question-name" required className="input input-bordered input-sm w-64" />
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="question-number">Question Number:</label>
          <input type="number" id="question-number" name="question-number" required className="input input-bordered input-sm w-64" />
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="question-difficulty">Question Difficulty:</label>
          <select id="question-difficulty" name="question-difficulty" required className="select select-bordered select-sm max-w-xs w-64">
            <option value="">Select difficulty level</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </fieldset>

      <div>
        <button type="submit" className="btn btn-sm btn-wide btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
