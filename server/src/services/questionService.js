const Question = require("../models/questionModel");

// GET  all questions
const getAllQuestions = async () => {
  return Question.find();
};

const getOneQuestion = () => {
  return;
};

// POST a new question
const createNewQuestion = async ({ number, title, difficulty }) => {
  return Question.create({ number, title, difficulty });
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
