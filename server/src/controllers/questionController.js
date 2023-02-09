

const getAllQuestions = (req, res) => {
  const allQuestions = questionService.getAllQuestions();
  res.send("Get all questions");
};

const getOneQuestion = (req, res) => {
  const question = questionService.getOneQuestion();
  res.send("Get single question by id");
};

const createNewQuestion = (req, res) => {
  const createdQuestion = questionService.createNewQuestion();
  res.send("Add a new question");
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
