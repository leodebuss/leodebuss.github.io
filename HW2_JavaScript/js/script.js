let superheroes = [
    "superman",
    "batman",
    "shazam",
    "supergirl",
    "beastboy",
    "raven",
    "starfire",
    "aqualad",
    "flash",
    "batgirl",
    "cyborg",
    "aquaman",
    "robin",
    "nightwing"
]
let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

randWord();
function randWord() {
    answer = superheroes[Math.floor(Math.random() * superheroes.length)];
}

genBtns();
function genBtns() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2 letter-btn"
        id="${letter}"
        data-letter="${letter}"
      >
        ${letter}
      </button>
    `).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;    
    const buttons = document.querySelectorAll('.letter-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            handleGuess(this.dataset.letter);
        });
        button.addEventListener('mouseenter', function() {
            this.classList.remove('btn-primary');
        });
        button.addEventListener('mouseleave', function() {
            if (!this.disabled) {
                this.classList.add('btn-primary');
            }
        });
    });
}

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        checkIfGameLost();
        updateHangmanPic();
    }
}

function updateHangmanPic() {
    document.getElementById('hangmanPic').src = './img/' + mistakes + '.jpg';
}

function checkIfGameWon() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You Won!!!';
    }
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
        document.getElementById('keyboard').innerHTML = "You Lost!!!";
    }
}

guessedWord();
function guessedWord(){
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './img/0.jpg';
    randWord();
    guessedWord();
    updateMistakes();
    genBtns();
}

document.getElementById('maxWrong').innerHTML = maxWrong;