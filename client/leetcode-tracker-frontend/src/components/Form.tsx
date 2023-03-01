import React from "react";

const Form = () => {
  return (
    <form className="p-6 inline-block gap-4 shadow-lg rounded-md">
      <fieldset>
        <legend className="mx-auto"><strong>Add Question</strong></legend>
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
