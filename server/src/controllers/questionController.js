const questionService = require("../services/questionService");

const getAllQuestions = (req, res) => {
  const allQuestions = questionService.getAllQuestions();
  res.send("Get all questions");
};

const getOneQuestion = (req, res) => {
  const question = questionService.getOneQuestion();
  res.send("Get single question by id");
};

const createNewQuestion = async (req, res) => {
  try {
    const createdQuestion = await questionService.createNewQuestion(req.body);
    res.status(200).send(createdQuestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOneQuestion = (req, res) => {
  const updatedQuestion = questionService.updateOneQuestion();
  res.send("Update existing question by id");
};

const deleteOneQuestion = (req, res) => {
  questionService.deleteOneQuestion();
  res.send("Delete existing question by id");
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  createNewQuestion,
  updateOneQuestion,
  deleteOneQuestion,
};
