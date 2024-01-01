const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Node Js World");
});

app.get("/api/customers", (req, res) => {
  res.send([
    { id: 1, name: "james" },
    { id: 2, name: "Abyy" },
  ]);
});

app.listen(5000, () => console.log("Server is running on port 5000"));
