/* Assign random pc value */

function getComputerChoice(){
   const randNum = (Math.floor(Math.random()*3 + 1));
   if (randNum === 1) {
    console.log("Rock")
   } else if(randNum === 2) {
    console.log("Paper")
}   else if (randNum === 3) {
    console.log("Scissor")
}
}


