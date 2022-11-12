const choice = ["rock", "paper", "scissors"]
let playerSelection = null;
let computerSelection = 0;
let playerScore = 0;
let computerScore = 0;

let getPlayerChoice = (playerSelection) => {

    let rock = document.getElementById("imageRock");
    let paper = document.getElementById("imagePaper");
    let scissors = document.getElementById("imageScissors");

    // console.log(playerChoice);

    if (playerSelection == rock) {
        playerSelection = "rock";
    } else if (playerSelection == paper) {
        playerSelection = "paper";
    } else if (playerSelection == scissors) {
        playerSelection = "scissors";
    } else {
             getPlayerChoice();
    }

    computerSelection = getComputerChoice(choice);
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
}

let getComputerChoice = (choice) => {
    let randomChoice = choice[Math.floor(Math.random()*choice.length)];
    return randomChoice;
}


// function playRound(playerSelection, computerSelection) {
//     return
//     (computerSelection === "rock" && playerSelection === "paper") ? playerWin()
//     : (computerSelection === "rock" && playerSelection === "scissors") ? computerWin()
//     : (computerSelection === "paper" && playerSelection === "rock") ? computerWin()
//     : (computerSelection === "paper" && playerSelection === "scissors") ? playerWin()
//     : (computerSelection === "scissors" && playerSelection === "paper") ? computerWin()
//     : (computerSelection === "scissors" && playerSelection === "rock") ? playerWin()
//     : "It's tie!";
// }

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "paper") {
        console.log("You beat computer: paper beats rock!")
        playerScore++;
        console.log(playerScore, computerScore);
    } 
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("Computer beats you: rock beats scissors!")
        computerScore++;
        console.log(playerScore, computerScore);
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("Computer beats you: paper beats rock!")
        computerScore++;
        console.log(playerScore, computerScore);
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        console.log("You beat computer: scissors beats paper!")
        playerScore++;
        console.log(playerScore, computerScore);
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("Computer beats you: scissors beats paper!")
        computerScore++;
        console.log(playerScore, computerScore);
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        console.log("You beat computer: rock beats scissors!")
        playerScore++;
        console.log(playerScore, computerScore);
    }
    else {
        console.log ("It's tie!");
        console.log(playerScore, computerScore);
    }
}

// let game = () => {
//     while (playerScore < 5 && computerScore < 5) {
//         getPlayerChoice(playerChoice);
//         console.log(playerSelection);
//         computerSelection = getComputerChoice(choice);
//         console.log(computerSelection);
//         playRound(playerSelection, computerSelection);

//         if(playerScore == 5) {
//             console.log("Player win!");
//         } else if (computerScore == 5){
//             console.log("Computer win!")
//         } else 
//         continue;
//     }
// }   

// game();