function getComputerChoice() {
  const signal = ["rock", "scissors", "paper"];
  const choice = Math.floor(Math.random() * signal.length);
  return signal[choice];
}

function getHumanChoice() {
  const selection = document.querySelector("#selection");
  const buttons = document.querySelector(".buttons");
  selection.textContent = "Click one option please";
  buttons.addEventListener("click", (event) => {
    // console.log(event.target.textContent.toLowerCase());
    return event.target.textContent.toLowerCase();
  });
  // return prompt("Choice rock, scissors or paper: ");
}

function playRound(humanChoice, computerChoice) {
  // let newHumanChoice = humanChoice.toLowerCase();
  console.log(`Your choice is: ${humanChoice}`);
  console.log(`Computer choice is: ${computerChoice}`);
  if (humanChoice == computerChoice) {
    console.log(`¡Tied! ${humanChoice} is equal to ${computerChoice}`);
    return "Tied";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    console.log(`¡You win! ${humanChoice} wins to ${computerChoice}`);
    return "Human wins";
  } else {
    console.log(`¡You lost! ${computerChoice} wins to ${humanChoice}`);
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
