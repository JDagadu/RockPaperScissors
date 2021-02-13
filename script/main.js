// alert("hello! works");
function getitem(tag){
    return  document.querySelector(tag);
}

const arr = ['rock','paper','scissors'];

let rockbutton = getitem("#rock-button");
let paperbutton = getitem("#paper-button");
let scissorsbutton = getitem("#scissors-button");

let userscore = getitem("#user-score p");
let computerscore = getitem("#robot-score p");

let cover = getitem(".cover");
let winnerprofile= getitem(".winner-profile");
let winnertext = getitem("#winner-text");
let reset = getitem(".announce-winner button");

reset.addEventListener('click',()=>{
    computerscore.textContent=0;
    userscore.textContent=0;
    cover.style.display ="none";
    uscore = 0 ;
    cscore = 0 ;
})

// alert("hello!");
let uscore = 0;
let cscore = 0;
rockbutton.addEventListener('click',(event)=>{
    Game(event.target.attributes["data-key"].nodeValue);
})

paperbutton.addEventListener('click',(event)=>{
    Game(event.target.attributes["data-key"].nodeValue);
})

scissorsbutton.addEventListener('click',(event)=>{
    Game(event.target.attributes["data-key"].nodeValue);
})
function endGame(){
    if(cscore ==5 || uscore ==5) cover.style.display= "flex";
    if(uscore==5){
        winnerprofile.src = "https://img.icons8.com/color/144/000000/iron-man.png"
        winnertext.textContent = "You Win"
    } else{
        winnerprofile.src ="https://img.icons8.com/color/96/000000/cyborg.png"
        winnertext.textContent = "Computer Wins"
    }
}
function Game(userChoice){
    
        let compChoice =  computerPlay();
        console.log(Battlefield(userChoice,compChoice));
        if(Battlefield(userChoice,compChoice)==0){
            
            computerscore.textContent = Number(computerscore.textContent)+1;
            cscore = computerscore.textContent
        }else if(Battlefield(userChoice,compChoice)==1){
            userscore.textContent = Number(userscore.textContent)+1;
            uscore = userscore.textContent;
        }
        
        endGame()
    
   
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
            if(computerSelection==playerSelection) return 2;
            else if (computerSelection ==arr[1]) return 0;
            else if (computerSelection == arr[2]) return 1;
        break;
        case arr[1]: 
            if(computerSelection==playerSelection) return 2;
            else if (computerSelection ==arr[0]) return 1;
            else if (computerSelection == arr[2]) return 0;
        break;
        case arr[2]:
            if(computerSelection==playerSelection) return 2;
            else if (computerSelection ==arr[0]) return 0;
            else if (computerSelection == arr[1]) return 1;
        break;
    }
}


// rock gt scissors 
// scissors gt paper 
// paper gt rock