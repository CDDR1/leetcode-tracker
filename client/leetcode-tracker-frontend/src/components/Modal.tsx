import useModalStore from "../zustand/modalStore";

const Modal = () => {
  const modalState = useModalStore((state) => state);

  return (
    <>
      <input type="checkbox" id="questionCard-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form>
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
          </form>
          <div className="modal-action">
            <button>
              <label htmlFor="questionCard-modal" className="btn">
                Save
              </label>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
