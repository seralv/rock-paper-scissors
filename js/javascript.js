function getComputerChoice() {
  const signal = ["rock", "scissors", "paper"];
  const choice = Math.floor(Math.random() * signal.length);
  return signal[choice];
}

console.log("The computer choice is: " + getComputerChoice());
