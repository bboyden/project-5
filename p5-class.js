class GameEngine {
    constructor() {
      this.options = ["rock", "paper", "scissors"];
    }
  
    getComputerChoice() {
      const randomIndex = Math.floor(Math.random() * this.options.length);
      return this.options[randomIndex];
    }
  
    determineOutcome(userChoice, computerChoice) {
      if (userChoice === computerChoice) return "Tie! Your Average";
      if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        return "You win You are the man"
      }
      return "You lose! Try Again or Else";
    }
  }
  
  module.exports = GameEngine;
