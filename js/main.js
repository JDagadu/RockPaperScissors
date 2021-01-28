// alert("hello!");
const arr = ['rock','paper','scissors'];

for(let i = 0; i <= 4; i++){
    Game()
}


function Game(){
    let userChoice = (prompt("Choose your weapon Player!")).toString().toLowerCase();
    let compChoice =  computerPlay();
    alert(Battlefield(userChoice,compChoice));
}


function computerPlay(){
let compChoice= arr[Math.floor(Math.random() * 3)];

return compChoice;
}



// rock gt scissors    
// rock lt paper

// paper gt rock
// paper lt scissors

// scissors gt paper 
// scissors lt rock 

function Battlefield(playerSelection,computerSelection){
    switch (playerSelection){
        case arr[0]: 
            if(computerSelection==playerSelection) return 'draw';
            else if (computerSelection ==arr[1]) return 'You loose! Paper beats Rock';
            else if (computerSelection == arr[2]) return 'You win! Rock beats Scissors';
        break;
        case arr[1]: 
            if(computerSelection==playerSelection) return 'draw';
            else if (computerSelection ==arr[0]) return 'You win! Paper beats Rock';
            else if (computerSelection == arr[2]) return 'You loose! Scissors beats Paper';
        break;
        case arr[2]:
            if(computerSelection==playerSelection) return 'draw';
            else if (computerSelection ==arr[0]) return 'You loose! Rock beats Scissors';
            else if (computerSelection == arr[1]) return 'You win! Scissors beats Paper';
        break;
    }
}


// rock gt scissors 
// scissors gt paper 
// paper gt rock