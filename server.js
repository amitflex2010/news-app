const express = require("express");
const path = require("path");
const dotenv = require('dotenv');

const app = express();
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("dist/news-app"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "news-app", "index.html"));
  });
} else {
  app.use(express.static("dist/news-app"));
 
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "news-app", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
