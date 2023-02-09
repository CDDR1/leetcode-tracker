require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

// API version 1
const v1QuestionRouter = require("./v1/routes/questionRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/v1/questions", v1QuestionRouter);

// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT} 🚀🚀🚀`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
