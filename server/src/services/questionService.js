const Question = require("../database/question");

const getAllQuestions = () => {
  const allQuestions = Question.getAllQuestions();
  return allQuestions;
};

const getOneQuestion = () => {
  return;
};

const createNewQuestion = () => {
  return;
};

const updateOneQuestion = () => {
  return;
};

const deleteOneQuestion = () => {
  return;
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  createNewQuestion,
  updateOneQuestion,
  deleteOneQuestion,
};
