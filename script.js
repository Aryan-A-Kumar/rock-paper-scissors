function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
        body {
          font-family: Arial, sans-serif;
          background: #f0f0f0;
          margin: 0;
          padding: 20px;
          text-align: center;
        }

        button {
          padding: 10px 20px;
          font-size: 16px;
          margin: 5px;
          border: 1px solid #333;
          border-radius: 6px;
          background: #fff;
          cursor: pointer;
        }

        button:hover {
          background: #e0e0e0;
        }

        #scoreBoard {
          margin-top: 15px;
          font-size: 18px;
          font-weight: bold;
        }

        #roundResult {
          margin-top: 10px;
          font-size: 16px;
        }

        #winnerCard {
          margin-top: 15px;
          font-size: 20px;
          font-weight: bold;
          color: darkred;
        }

        #buttonPanel {
          margin-top: 20px;
        }
    `;
    document.head.appendChild(style);
}

injectStyles();

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
       
        return "TIE";
      
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

      return message;

}

function playGame (){
   
const rockBtn = document.createElement("button");
rockBtn.setAttribute("id", "rock");
rockBtn.textContent = "rock";
const paperBtn = document.createElement("button");
paperBtn.setAttribute("id", "paper");
paperBtn.textContent = "paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.setAttribute("id", 'scissors');
scissorsBtn.textContent = "scissors";

const buttonPanel = document.createElement("div");
document.body.appendChild(buttonPanel);
buttonPanel.appendChild(rockBtn);
buttonPanel.appendChild(paperBtn);
buttonPanel.appendChild(scissorsBtn);

let playerSelection = "", computerSelection = "";

const scoreBoard = document.createElement("div");
function updateScoreBoard()
{
    scoreBoard.textContent = "Player: " + humanScore + " | " + "Computer: " + computerScore;
}

const roundResult = document.createElement("div");
roundResult.textContent = "Begin Playing";
const display = document.createElement("div");
const winnerCard = document.createElement("div");

winnerCard.textContent = "**********"
display.appendChild(roundResult);
display.appendChild(scoreBoard);
display.appendChild(winnerCard);

roundResult.style.textAlign = "center";
display.style.textAlign = "center";
roundResult.style.margin = "3px";
document.body.appendChild(display);
document.body.appendChild(buttonPanel);
// document.body.append()

buttonPanel.style.display = "flex";
buttonPanel.style.gap = "15px";
buttonPanel.style.justifyContent = "space-around";
buttonPanel.style.margin = "10px";

buttonPanel.setAttribute("id", "buttonPanel");
scoreBoard.setAttribute("id", "scoreBoard");
roundResult.setAttribute("id", "roundResult");
winnerCard.setAttribute("id", "winnerCard");

document.addEventListener("click", (e) => {
    if(e.target.id && computerScore<5 && humanScore <5)
    {
        playerSelection = e.target.id==="rock"? "rock" : e.target.id==="paper"? "paper": "scissors";
        console.log(`The player selected ${playerSelection}`);
        computerSelection = getComputerChoice();
        const message = playRound(playerSelection, computerSelection);
        roundResult.textContent = message;
        updateScoreBoard();
        
        if(computerScore===5){
            winnerCard.textContent = "Computer Wins!"
        }
        if(humanScore===5){
            winnerCard.textContent = "Player Wins!"
        }
        
    }
});


}

playGame();


