const Question = require("../models/questionModel");

// GET all questions
const getAllQuestions = async () => {
  return Question.find({});
};

// GET single question by id
const getOneQuestion = ({ questionId }) => {
  return Question.findById(questionId);
};

// POST a new question
const createNewQuestion = ({ number, title, difficulty }) => {
  return Question.create({ number, title, difficulty });
};

// UPDATE single question by id
const updateOneQuestion = ({ params: { questionId }, body }) => {
  return Question.findOneAndUpdate({ _id: questionId }, { ...body }, {new: true});
};

// DELETE single question by id
const deleteOneQuestion = ({ questionId }) => {
  return Question.findOneAndDelete({ _id: questionId });
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  createNewQuestion,
  updateOneQuestion,
  deleteOneQuestion,
};
