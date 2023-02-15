type CollapseProps = {
  questionName: string;
  questionNumber: number;
  questionDifficulty: string;
};

const Collapse = ({ questionName, questionNumber, questionDifficulty }: CollapseProps) => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div className="collapse-title text-lg font-medium">
        <h3>{questionName}</h3>
      </div>
      <div className="collapse-content">
        <div className="flex flex-col gap-1">
          <span>Question number: {questionNumber}</span>
          <span>Difficulty: {questionDifficulty}</span>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
