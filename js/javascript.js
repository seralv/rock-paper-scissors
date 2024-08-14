function getComputerChoice() {
  const signal = ["rock", "scissors", "paper"];
  const choice = Math.floor(Math.random() * signal.length);
  return signal[choice];
}

function getHumanChoice() {
  return prompt("Choice rock, scissors or paper: ");
}

function playRound(humanChoice, computerChoice) {
  let newHumanChoice = humanChoice.toLowerCase();
  console.log(`Your choice is: ${newHumanChoice}`);
  console.log(`Computer choice is: ${computerChoice}`);
  if (newHumanChoice == computerChoice) {
    console.log(`¡Tied! ${newHumanChoice} is equal to ${computerChoice}`);
    return "Tied";
  } else if (
    (newHumanChoice == "rock" && computerChoice == "scissors") ||
    (newHumanChoice == "scissors" && computerChoice == "paper") ||
    (newHumanChoice == "paper" && computerChoice == "rock")
  ) {
    console.log(`¡You win! ${newHumanChoice} wins to ${computerChoice}`);
    return "Human wins";
  } else {
    console.log(`¡You lost! ${computerChoice} wins to ${newHumanChoice}`);
    return "Computer wins";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let result = playRound(getHumanChoice(), getComputerChoice());

    if (result == "Human wins") {
      humanScore++;
      console.log(`Human score: ${humanScore}`);
      console.log(`Computer score: ${computerScore}`);
    } else if (result == "Computer wins") {
      computerScore++;
      console.log(`Human score: ${humanScore}`);
      console.log(`Computer score: ${computerScore}`);
    } else {
      i = 5;
      if (humanScore == computerScore) {
        console.log(`¡Nobody win!`);
      } else if (humanScore < computerScore) {
        console.log(`¡Computer wins with ${computerScore} points!`);
      } else {
        console.log(`¡You win with ${humanScore} points!`);
      }
    }
  }
}

playGame();
