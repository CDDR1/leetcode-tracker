const Question = require("../models/questionModel");

const getAllQuestions = () => {
  return;
};

const getOneQuestion = () => {
  return;
};

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
