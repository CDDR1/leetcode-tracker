import useModalStore from "../zustand/modalStore";
import useQuestionStore from "../zustand/questionStore";

const Modal = () => {
  const modalState = useModalStore((state) => state);

  const updateQuestion = useQuestionStore((state) => state.update);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const question = {
      title: formData.get("question-name" as string),
      number: parseInt(formData.get("question-number") as string),
      difficulty: formData.get("question-difficulty" as string),
    };

    try {
      const res = await fetch(`https://leetcode-tracker-production-2900.up.railway.app/api/v1/questions/${modalState.modalId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(question),
      });

      const updatedQuestion = await res.json();
      updateQuestion(updatedQuestion);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input type="checkbox" id="questionCard-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label htmlFor="questionCard-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <form onSubmit={(e) => handleSubmit(e)}>
            <fieldset>
              <legend className="mx-auto">
                <strong>Edit Question</strong>
              </legend>
              <div className="flex flex-col my-4">
                <label htmlFor="question-name">Question Name:</label>
                <input defaultValue={modalState.modalTitle} type="text" id="question-name" name="question-name" required className="input input-bordered input-sm" />
              </div>

              <div className="flex flex-col my-4">
                <label htmlFor="question-number">Question Number:</label>
                <input defaultValue={modalState.modalNumber} type="number" id="question-number" name="question-number" required className="input input-bordered input-sm" />
              </div>

              <div className="flex flex-col my-4">
                <label htmlFor="question-difficulty">Question Difficulty:</label>
                <select defaultValue={modalState.modalDifficulty} id="question-difficulty" name="question-difficulty" required className="select select-bordered select-sm max-w-xs">
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </fieldset>
            <div className="modal-action">
              <button type="submit">
                <label htmlFor="questionCard-modal" className="btn">
                  Save
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
