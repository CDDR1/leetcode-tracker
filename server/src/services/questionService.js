const Question = require("../models/questionModel");

// GET  all questions
const getAllQuestions = async () => {
  try {
    const allQuestions = await Question.find();
    return allQuestions;
  } catch (error) {
    return error;
  }
};

const getOneQuestion = () => {
  return;
};

// POST a new question
const createNewQuestion = async ({ number, title, difficulty }) => {
  try {
    const createdQuestion = await Question.create({ number, title, difficulty });
    return createdQuestion;
  } catch (error) {
    return error;
  }
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
