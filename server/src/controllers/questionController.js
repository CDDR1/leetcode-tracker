const questionService = require("../services/questionService");

const getAllQuestions = async (req, res) => {
  try {
    const allQuestions = await questionService.getAllQuestions();
    res.status(200).json(allQuestions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOneQuestion = async (req, res) => {
  try {
    const question = await questionService.getOneQuestion(req.params);
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createNewQuestion = async (req, res) => {
  try {
    const createdQuestion = await questionService.createNewQuestion(req.body);
    res.status(200).json(createdQuestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOneQuestion = (req, res) => {
  const updatedQuestion = questionService.updateOneQuestion();
  res.send("Update existing question by id");
};

const deleteOneQuestion = async (req, res) => {
  try {
    const deletedQuestion = await questionService.deleteOneQuestion(req.params);
    res.status(200).json(deletedQuestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  createNewQuestion,
  updateOneQuestion,
  deleteOneQuestion,
};
