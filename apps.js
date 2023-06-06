const option = ["rock", "paper", "scissor"]

function getComputerChoice(){
    let choice = option[Math.floor(Math.random()*option.length)]
    console.log(choice)
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

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));