//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//Global variables
let randomNumber;
let attempts = 0;

initializeGame();

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";
  
   //adding focus to textbox
   document.querySelector("#playerGuess").style.display = "inline";

   let playerGuess = document.querySelector("#playerGuess");
   playerGuess.focus(); // adding focus to the textbox
   playerGuess.value = ""; // clearing the textbox

   let feedback = document.querySelector("#feedback");
   feedback.textContent = ""; // clearing the feedback

   // clearing the previous messages
   document.querySelector("#guesses").textContent = "";
}

function checkGuess() {
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player Guess: " + guess);
    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    console.log("Attempts:" + attempts);
    feedback.style.color = "orange";
    if (guess == randomNumber) {
        feedback.textContent = "You guess it! You Won!";
        feedback.style.color = "darkGreen";
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == 7) {
            feedback.textContent = "Sorry, you lost!";
            feedback.style.color = "red";
            gameOver();
        } else if (guess > randomNumber) {
            feedback.textContent = "Guess was high";
        } else {
            feedback.textContent = "Guess was low";
        }
    }
}
function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none"; // hides guess button
    resetBtn.style.display = "inline"; // displays reset button
}