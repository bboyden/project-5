const GameEngine = require("./p5-class.js");
const engine = new GameEngine();

function runMatch(playerSelection) {
  const computerSelection = engine.getComputerChoice();
  const outcome = engine.determineOutcome(playerSelection, computerSelection);
  return {
    user: playerSelection,
    opponent: computerSelection,
    outcome: outcome,
  };
}

module.exports = { runMatch };
