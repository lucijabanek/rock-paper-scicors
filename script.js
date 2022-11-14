let playerScore = 0;
let computerScore = 0;
const playerChoiceDiv = document.getElementById("playerChoice");
const computerChoiceDiv = document.getElementById("computerChoice");
const roundWinner = document.getElementById("Winner");


function getPlayerChoice(playerSelection){

    const choice = ["rock", "paper", "scissors"]
    let computerSelection = 0;
    let playerChoice = playerSelection.id;

    computerSelection = getComputerChoice(choice);
    playRound(playerChoice, computerSelection);
}

let getComputerChoice = (choice) => {
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        updateChoiceDiv(playerSelection, computerSelection);
        roundWinner.textContent = `IT'S TIE!`;
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            participantWinRound(playerSelection, computerSelection);
        } else {
            computerWinRound(playerSelection, computerSelection);
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            participantWinRound(playerSelection, computerSelection);
        } else {
            computerWinRound(playerSelection, computerSelection);
        }
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            participantWinRound(playerSelection, computerSelection);
        }
        else {
            computerWinRound(playerSelection, computerSelection);
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
        resetCounter();
        roundWinner.textContent = `PLAYER WIN!`;
    } else if (computerScore === 5) {
        resetCounter();
        roundWinner.textContent = `COMPUTER WIN!`;
    }
}

function resetCounter() {
    playerScore = 0;
    computerScore = 0;
}

function participantWinRound(playerSelection, computerSelection){
    playerScore++;
    updateChoiceDiv(playerSelection, computerSelection);
    roundWinner.textContent = `PLAYER BEAT COMPUTER THIS ROUND!`;
}

function computerWinRound(playerSelection, computerSelection){
    computerScore++;
    updateChoiceDiv(playerSelection, computerSelection);
    roundWinner.textContent = `COMPUTER BEATS PLAYER THIS ROUND!`;
}

function updateChoiceDiv(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    playerChoiceDiv.textContent = `${playerSelection}`;
    computerChoiceDiv.textContent = `${computerSelection}`;
}


