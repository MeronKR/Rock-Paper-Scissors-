
const option = ["rock", "paper", "scissor"]

function getComputerChoice(){
    let choice = option[Math.floor(Math.random()*option.length)]
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
            (playerSelection = "scissor" && computerSelection == "rock")
            return "Computer";
        }
}   

let roundCounter =1;
let maxRound = 5

let playerSelection = "";
let computerSelection =""; 

const playerInpRock = document.getElementById("rock");
const playerInpPaper = document.getElementById("paper");
const playerInpScissor = document.getElementById("scissor");
const resultBox = document.querySelector(".logger");
const playerLog = document.querySelector(".playerText")
const computerLog = document.querySelector(".computerText")

//Writing to page, assigning initial value + starting round + round counter
function playerWrite(){
    playerLog.textContent = `Player Chose: ${playerSelection.toUpperCase()}`;
    }
function computerWrite(){
    computerLog.textContent = `Computer Chose: ${computerSelection.toUpperCase()}`;
}

    playerInpRock.addEventListener("click", function() {
        if (roundCounter < 6){
        playerSelection = playerInpRock.textContent.toLowerCase();
        playerWrite()
        computerSelection = getComputerChoice()
        computerWrite()
        playRound(playerSelection,computerSelection)
        roundCounter += 1
        }
    });
    
playerInpPaper.addEventListener("click", function() {
    if (roundCounter < 6){
        playerSelection = playerInpPaper.textContent.toLowerCase();
        playerWrite()
        computerSelection = getComputerChoice()
        computerWrite()
        playRound(playerSelection,computerSelection)
        roundCounter += 1
    }
    });
    
playerInpScissor.addEventListener("click", function() {
    if (roundCounter < 6){
        playerSelection = playerInpScissor.textContent.toLowerCase();
        playerWrite()
        computerSelection = getComputerChoice()
        computerWrite()
        playRound(playerSelection,computerSelection)
        roundCounter += 1
}
    });

    let playerScore=0;
    let computerScore=0;

function playRound(playerSelection, computerSelection) {

    function updateScore (){
        const liveScore = document.createElement("p");
        liveScore.textContent = `Player ${playerScore} : ${computerScore} Computer `;
        computerLog.appendChild(liveScore)
    }

    const roundTie = document.createElement("p")
    const roundWin = document.createElement("p");
    const roundLoss = document.createElement("p");
    
    function gameT (){
        const gameTie = document.createElement("p");
        gameTie.textContent = `Player & Computer tie with a score of 
        ${playerScore} : ${computerScore}`;
        computerLog.appendChild(gameTie);

    }
    
    function gameW (){
        const gameWin = document.createElement("p");
        gameWin.textContent =  `Player wins with a score of ${playerScore} : ${computerScore}`;
        computerLog.appendChild(gameWin);
    }

    function gameL (){
        const gameLoss = document.createElement("p");
        gameLoss.textContent = `Computer wins with a score of ${computerScore} : ${playerScore}`;
        computerLog.appendChild(gameLoss);
    }
    
    roundTie.textContent = `Round ${roundCounter} : Tie! Play again!`;
    roundWin.textContent = `Round ${roundCounter} : You win! ${playerSelection} 
    beats ${computerSelection}`;
    roundLoss.textContent = `Round ${roundCounter} : You lose! ${computerSelection}
    beats ${playerSelection}`;
    
    

    let result = checkWinner(playerSelection, computerSelection);      
        if (result ==="Tie" ){
            
            computerLog.appendChild(roundTie);
            updateScore()
        }
        else if (result == "Player"){
            playerScore = ++playerScore
            computerLog.appendChild(roundWin);
            updateScore()
            
            playerScore;
        }
        else {
            ++computerScore
            computerLog.appendChild(roundLoss)
            updateScore();
        }
        if (roundCounter == 5){
            if (playerScore < computerScore){
                gameL();
                }
                else if (playerScore > computerScore){
                    gameW();
                } 
                else {
                    gameT();
                }
            }
        }
;

//hover 
function addHover(){
this.classList.add("hover")
}

const rockImg = document.querySelector(".rockImg")
const paperImg = document.querySelector(".paperImg")
const scissorImg = document.querySelector(".scissorImg")

playerInpPaper.addEventListener("mouseenter", function(){
    this.classList.add("hover")
    paperImg.classList.add("glow")
})

playerInpRock.addEventListener("mouseenter", function(){
    this.classList.add("hover")
    rockImg.classList.add("glow")
})
playerInpScissor.addEventListener("mouseenter", function(){
    this.classList.add("hover")
    scissorImg.classList.add("glow")
})

