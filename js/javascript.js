function getComputerChoice() {
  const signal = ["rock", "scissors", "paper"];
  const choice = Math.floor(Math.random() * signal.length);
  return signal[choice];
}

function getHumanChoice() {
  // return prompt("Choice rock, scissors or paper: ");
}

function playRound(humanChoice, computerChoice) {
  let newHumanChoice = humanChoice.toLowerCase();
  if (newHumanChoice == computerChoice) {
    console.log(`!Empates¡ ${newHumanChoice} es igual a ${computerChoice}`);
  } else if (newHumanChoice == "rock" && computerChoice == "paper") {
    console.log(``);
  }
}

let humanScore = 0;
let computerScore = 0;

console.log(`The computer choice is: ${getComputerChoice()}`);
console.log(`The human choice: ${getHumanChoice()}`);
