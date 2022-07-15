
let player1Score = 0;
document.getElementById("p1").innerHTML = "Player 1: " + player1Score;

let player2Score = 0;
document.getElementById("p2").innerHTML = "Player 2: " + player2Score;


document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myLabel").innerHTML = "Hello " + username + " " + "Let's Play!";
}






/* Below is the starting code for the game.
function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

    function getComputerChoice() {
        // your code here!
    }

    for (let i = 0; i < 5; i++) {

    }
*/