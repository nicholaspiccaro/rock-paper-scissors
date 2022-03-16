let playerScore=0;
let computerScore=0;
let roundWinner='';



function computerPlay (){
    var choice = ['rock', 'paper', 'scissors'];
    var ranChoice=choice[Math.floor(Math.random()*choice.length)];
    return ranChoice;
}



function oneRound(playerSelection,computerSelection){
    if(playerSelection.toLowerCase()==computerSelection.toLowerCase()){
        //console.log("A tie! You both picked: "+computerSelection);
        roundWinner='tie';
    }else if(playerSelection.toLowerCase()=='rock'){
        if(computerSelection.toLowerCase()=='scissors'){
            playerScore++;
            roundWinner='player';
        }else if(computerSelection.toLowerCase()=='paper'){  
            computerScore++;
            roundWinner='computer'
        }else{
            console.log("Invalid Inputs");
        }
    }else if(playerSelection.toLowerCase()=='paper'){
        if(computerSelection.toLowerCase()=='rock'){
            playerScore++;
            roundWinner='player';
        }else if(computerSelection.toLowerCase()=='scissors'){
            computerScore++;
            roundWinner='computer';
        }else{
            console.log("Invalid Inputs");
        }
    }else if(playerSelection.toLowerCase()=='scissors'){
        if(computerSelection.toLowerCase()=='paper'){
            playerScore++;
            roundWinner='player';
        }else if(computerSelection.toLowerCase()=='rock'){
            computerScore++;
            roundWinner='computer';
        }else{
            console.log("Invalid Inputs");
        }
    }else{
        console.log("Invalid Inputs");
    }
}

function gameOver(){
    return playerScore==5 || computerScore == 5;
}

function btnClick(playerSelection){
    computerSelection=computerPlay()
    oneRound(playerSelection, computerSelection);
    console.log(roundWinner);
    updateScore(roundWinner, playerSelection, computerSelection);
}

function updateScore(roundWinner,playerSelection, computerSelection){
    if(roundWinner=='player'){
        scoreMessage.textContent = roundWinner+' wins, '+playerSelection+ ' beats ' + computerSelection;
        playScore.textContent = 'Player: '+ playerScore;
        return
    }
    if(roundWinner=='computer'){
        scoreMessage.textContent = roundWinner+' wins, '+playerSelection+ ' is beaten by ' + computerSelection;
        compScore.textContent= 'Computer: '+computerScore;
        return
    }
        
    scoreMessage.textContent = playerSelection + ' ties ' + computerSelection;
}

const scoreMessage = document.getElementById('scoreMessage');
const playScore = document.getElementById('playerScore');
const compScore = document.getElementById('computerScore');

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', () => btnClick('rock'));
paperBtn.addEventListener('click', () => btnClick('paper'));
scissorsBtn.addEventListener('click', () => btnClick('scissors'));