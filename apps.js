/* Assign random pc value */
    function getComputerChoice(){
        const randNum = (Math.floor(Math.random()*3 + 1));
        let computerSelect = "";
        console.log(computerSelect)
        if (randNum === 1) {
         return computerSelect = "rock"
         console.log(computerSelect);
        } else if(randNum === 2) {
         return computerSelect = "paper"
         console.log(computerSelect);
     }   else {
          return computerSelect = "scissor"
         console.log(computerSelect);
     }
     }

    