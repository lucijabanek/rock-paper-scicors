let playerScore = 0;
let computerScore = 0;
const roundWinner = document.getElementById("Winner");

let getPlayerChoice = (playerSelection) => {

    const choice = ["rock", "paper", "scissors"]
    let computerSelection = 0;
    let playerChoice = playerSelection.id;

    computerSelection = getComputerChoice(choice);
    playRound(playerChoice, computerSelection);
}

let getComputerChoice = (choice) => {
    let randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}

let playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        roundWinner.textContent = `${playerSelection} vs. ${computerSelection}: It's tie!`;
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            roundWinner.textContent = `paper vs. rock: Player beat computer!`;
        } else {
            computerScore++;
            roundWinner.textContent = `paper vs scissors: Computer beats player!`;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++;
            roundWinner.textContent = `scissors vs. paper: Player beat computer!`;
        } else {
            computerScore++;
            roundWinner.textContent = `scissors vs. rock: Computer beats player!`;
        }
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            roundWinner.textContent = `rock vs. scissors: Player beat computer!`;
        }
        else {
            computerScore++;
            roundWinner.textContent = `rock vs. paper: Computer beats player!`;
        }
    }
    updateScore();
    gameWinner();
}

function updateScore() {
    const playerCounterPara = document.getElementById("playerCounter");
    const computerCounterPara = document.getElementById("computerCounter");

    playerCounterPara.textContent = `${playerScore}`;
    computerCounterPara.textContent = `${computerScore}`;
}

function gameWinner() {
    if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        roundWinner.textContent = `Player win!`;
    } else if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        roundWinner.textContent = `Computer win!`;
    }
}
