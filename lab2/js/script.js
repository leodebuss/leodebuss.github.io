document.querySelector("#guessBtn").addEventListener("click", guess)
//globar varibales
let randomNumber = Math.floor(Math.random() * 99) + 1;
//generate number between 1 and 99
let score = 0;
console.log(randomNumber);
function guess() {
    if (score < 7) {
        let userGuess = document.querySelector("#userGuess").value;
        //value is only for input elements
        document.querySelector("#userGuesses").textContent += ` ${userGuess} `; //+= appends, = replaces. Displays players previous guesses
        // document.querySelector("#userGuesses").style.color="red";  to color style. an also use style.backgroundColor="red"
        if (userGuess > randomNumber) {
            document.querySelector("#guess").textContent = "Too high";
            document.querySelector("#guess").style.color = "red";
        }
        if (userGuess < randomNumber) {
            document.querySelector("#guess").textContent = "Too low";
            document.querySelector("#guess").style.color = "red";
        }
        if (userGuess == randomNumber) {
            document.querySelector("#guess").textContent = "Correct!"
            document.querySelector("#guess").style.color = "green";
            alert("Right Guess, Congratulations!");
        }



        score++;
    }
    if (score == 7) {
        alert("Too many guesses");
    }
}