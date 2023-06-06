const option = ["rock", "paper", "scissor"]

function getComputerChoice(){
    let choice = option[Math.floor(Math.random()*option.length)]
    /* console.log(choice) */ /* Checking random computer variable */
    return choice;
}

function checkWinner(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        return "Tie";}
        
        else if(
            (playerSelection == "rock" && computerSelection == "scissor") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissor" && computerSelection == "paper")
        ){
                return "Player";}
        else {
            (playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissor") ||
            (paperSelection = "scissor" && computerSelection == "rock")
            return "Computer";
        }
}   

function playRound(playerSelection, computerSelection) {
    let result = checkWinner(playerSelection, computerSelection);

    if (result ==="Tie"){
        return "Tie! Play again!"
    }

    else if (result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }

    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }   
}

/* const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); */ /* Game logic check */

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i <5; i++){
    let playerSelection = prompt("Rock, Paper, or Scissor?").toLowerCase();
    let computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "Player"){
        playerScore ++;
        console.log(`Player 1: ${playerScore}`)
        console.log(`Computer: ${computerScore}`)
    }
    else if (checkWinner(playerSelection, computerSelection) == "Computer"){
        computerScore ++;
        console.log(`Player 1: ${playerScore}`)
        console.log(`Computer: ${computerScore}`)
    }
}

console.log("Game Over");

    if (playerScore < computerScore){
    console.log(`Computer wins with a score of ${computerScore} : ${playerScore}`);
    }

    else {
        console.log(`Player wins with a score of ${playerScore} : ${computerScore}`);
    }
}


game();
