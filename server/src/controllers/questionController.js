const getAllQuestions = (req, res) => {
  res.send("Get all questions");
};

const getOneQuestion = (req, res) => {
  res.send("Get single question by id");
};

const createNewQuestion = (req, res) => {
  res.send("Add a new question");
};

const updateOneQuestion = (req, res) => {
  res.send("Update existing question by id");
};

const deleteOneQuestion = (req, res) => {
  res.send("Delete existing question by id");
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  createNewQuestion,
  updateOneQuestion,
  deleteOneQuestion,
};
