let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const signal = ["rock", "scissors", "paper"];
  const choice = Math.floor(Math.random() * signal.length);
  return signal[choice];
}

function updateScores() {
  document.querySelector("#humanScore").textContent = humanScore;
  document.querySelector("#computerScore").textContent = computerScore;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Tied";
  }
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    return "Human wins";
  }

  return "Computer wins";
}

function handleClick(event) {
  const humanChoice = event.target.dataset.choice;
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  if (result === "Human wins") {
    humanScore++;
  } else if (result === "Computer wins") {
    computerScore++;
  }

  updateScores();
  document.querySelector(".result").textContent =
    `Result: ${result}. Computer chose ${computerChoice}.`;

  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? "Human" : "Computer";
    document.querySelector(".result").textContent = `${winner} wins the game!`;
    document
      .querySelector(".buttons")
      .removeEventListener("click", handleClick);
  }
}

document.querySelector(".buttons").addEventListener("click", handleClick);
