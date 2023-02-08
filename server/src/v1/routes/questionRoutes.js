const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all questions");
});

router.get("/:questionId", (req, res) => {
  res.send("Get single question by id");
});

router.post("/", (req, res) => {
  res.send("Add a new question");
});

router.patch("/:questionId", (req, res) => {
  res.send("Update existing question by id");
});

router.delete("/:questionId", (req, res) => {
  res.send("Delete existing question by id");
});

module.exports = router;