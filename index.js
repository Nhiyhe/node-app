const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Node Js World");
});

app.listen(5000, () => console.log("Server is running on port 5000"));
