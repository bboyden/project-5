const express = require("express");
const path = require("path");
const app = express();
const { runMatch } = require("./p5-game.js");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/play/:choice", (req, res) => {
  const { choice } = req.params;
  res.json(runMatch(choice));
});

app.post("/play", (req, res) => {
  const { choice } = req.body;
  res.json(runMatch(choice));
});

app.listen(4000, () => {
  console.log("Game server running on http://localhost:4000");
});
