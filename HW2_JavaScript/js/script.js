let superheroes = [
    "superman",
    "batman",
    "spider-Man",
    "iron Man",
    "captain America",
    "black Panther",
    "wonder Woman",
    "wolverine",
    "the Flash",
    "hulk",
    "black Widow",
    "green Lantern",
    "booster Gold",
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
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;    
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
    document.getElementById('hangmanPic').src = './img/0.jpg/';
    randWord();
    guessedWord();
    updateMistakes();
    genBtns();
}

document.getElementById('maxWrong').innerHTML = maxWrong;