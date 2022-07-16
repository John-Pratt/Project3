
let player1Score = 0;
document.getElementById("p1").innerHTML = "Player 1: " + player1Score;

let player2Score = 0;
document.getElementById("p2").innerHTML = "Computer: " + player2Score;


document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("p1").innerHTML = username + ": " + player1Score;
}

document.getElementById("playerSelection").onclick = function() {
    playerSelection = document.getElementById("tttText").value;
}

function game() {
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return alert("It is a Tie!");
        }
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                return alert("You lose. Paper beats Rock!");
            }
            else if (computerSelection === "scissors")
                return alert("You Win! Rock beats Sciccors");
      }
    }

}
/*
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

    function getComputerChoice() {
        
    }


    
    for (let i = 0; i < 5; i++) {

    }