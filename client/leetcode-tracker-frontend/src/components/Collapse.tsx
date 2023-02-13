import React from "react";

const Collapse = () => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div className="collapse-title text-lg font-medium"><h3>Two Sum</h3></div>
      <div className="collapse-content">
        <div className="flex flex-col gap-1">
          <span>Question number: {1}</span>
          <span>Difficulty: {"Easy"}</span>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
