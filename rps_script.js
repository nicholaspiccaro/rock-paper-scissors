
function computerPlay (){
    var choice = ["Rock", "Paper", "Scissors"];
    var ranChoice=choice[Math.floor(Math.random()*choice.length)];
    return ranChoice;
}



function oneRound(playerSelection,computerSelection,scorecard){
    if(playerSelection.toLowerCase()==computerSelection.toLowerCase()){
        console.log("A tie! You both picked: "+computerSelection);
    }else if(playerSelection.toLowerCase()=='rock'){
        if(computerSelection.toLowerCase()=='scissors'){
            scorecard[0]+=1;
            console.log("You win the round. " + playerSelection+ " beats "+computerSelection);
        }else if(computerSelection.toLowerCase()=='paper'){  
            scorecard[1]+=1;
            console.log("You lose the round. " + computerSelection+ " beats "+playerSelection);
        }else{
            console.log("Invalid Inputs");
        }
    }else if(playerSelection.toLowerCase()=='paper'){
        if(computerSelection.toLowerCase()=='rock'){
            scorecard[0]+=1;
            console.log("You win the round. " + playerSelection+ " beats "+computerSelection);
        }else if(computerSelection.toLowerCase()=='scissors'){
            scorecard[1]+=1;
            console.log("You lose the round. " + computerSelection+ " beats "+playerSelection);
        }else{
            console.log("Invalid Inputs");
        }
    }else if(playerSelection.toLowerCase()=='scissors'){
        if(computerSelection.toLowerCase()=='paper'){
            scorecard[0]+=1;
            console.log("You win the round. " + playerSelection+ " beats "+computerSelection);
        }else if(computerSelection.toLowerCase()=='rock'){
            scorecard[1]+=1;
            console.log("You lose the round. " + computerSelection+ " beats "+playerSelection);
        }else{
            console.log("Invalid Inputs");
        }
    }else{
        console.log("Invalid Inputs");
    }
}

function game(){
    var score = [0,0];
    for (let i=0; i<5; i++){
        var input = prompt("Enter Rock, Paper, or Scissors");
        oneRound(input,computerPlay(), score);
    }
    if(score[0]>score[1]){
        console.log("VICTORY   Final Score: " + score[0]+" to " +score[1]);
    }else if(score[0]<score[1]){
        console.log("DEFEAT   Final Score: " + score[0]+" to " +score[1]);
    }else{
        console.log("TIE GAME")
    }

}

document.getElementById("rock").addEventListener("click", function(){
    console.log("Rock");
});
document.getElementById("paper").addEventListener("click", function(){
    console.log("Paper");
});
document.getElementById("scissors").addEventListener("click", function(){
    console.log("Scissors");
});