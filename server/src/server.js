const express = require("express");

// API version 1
const v1Router = require("./v1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 🚀🚀🚀`);
});