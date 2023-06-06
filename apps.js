function getComputerChoice(){
    let option = ["rock", "paper", "scissors"]
    let choice = option[Math.floor(Math.random()*option.length)]
    return choice;
}