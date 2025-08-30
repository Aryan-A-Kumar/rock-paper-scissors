// console.log("mop");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(3*Math.random())];
    return choice;
}
// console.log(getComputerChoice());

function getHumanChoice() {
    let userInput = prompt("What do you choose?");
    return userInput;
}
// console.log(getHumanChoice());
let humanScore = 0, computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let currentHumanScore = humanScore, currentComputerScore = computerScore;
    if(humanChoice===computerChoice)
    {
       
        console.log("TIE");
        return;
    }
    if(humanChoice==="rock"){
        if(computerChoice==="scissors")
            humanScore++;
        else computerScore++;
    }

    if(humanChoice==="paper"){
        if(computerChoice==="rock")
            humanScore++;
        else computerScore++;
    }

    if(humanChoice==="scissors"){
        if(computerChoice==="paper")
            humanScore++;
        else computerScore++;
    }
    let message = "You ";
    
    if(computerScore > currentComputerScore)
        message += "Lose!. " + computerChoice + " beats " + humanChoice;
    else message += "Win!. " + humanChoice + " beats " + computerChoice;

    console.log(message);

}

function playGame (){
    for(let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("round is over");
    }
}
playGame();

