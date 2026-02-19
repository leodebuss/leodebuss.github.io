// Event listeners
document.querySelector("button").addEventListener("click", gradeQuiz);

let score = 0;

shuffleQ1Choices();
function shuffleQ1Choices() {
    let q1Choices = ["Bad Bunny", "Nikki Minaj", "Kendrick Lamar", "The Weekend"];
    q1Choices = _.shuffle(q1Choices);
    console.log(q1Choices);

    // <label><input type="radio" name="q1" value="fontColor"> font-color</label>

    for (let i of q1Choices) {
    let radioElement = document.createElement("input");
    radioElement.type = "radio";
    radioElement.name = "q1";
    radioElement.value = i;
    
    let labelElement = document.createElement("label");
    labelElement.textContent = i;

    labelElement.prepend(radioElement);

    document.querySelector("#q1ChoicesDiv").append(labelElement);

    console.log(radioElement);
    }
}


function gradeQuiz() {
    let answerQ1 = "Bad Bunny";
    let answerQ3 = "Jay-Z";
    let answerQ4 = 2000;
    let answerQ5 = "Paul" && "Ringo";
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    let userAnswer3 = document.querySelector("#q3").value; 
    let userAnswer4 = document.querySelector("#q4").value;
    let userAnswer5 = document.querySelector("#Paul").value && document.querySelector("#Ringo").value; 

    //alert("Grading quiz..." + userAnswer1 + " " + userAnswer3 + " " + userAnswer4);

    if (userAnswer1 == answerQ1) {
        // display "Right!"
        document.querySelector("#markImg1").innerHTML = "<img src='img/checkmark.png' alt='Checkmark'>";
        document.querySelector("#answer").textContent = "Correct";
        document.querySelector("#answer").style.color = "green";
        score += 20;

    }
    document.querySelector("#markImg2").innerHTML = "<img src='img/checkmark.png' alt='Checkmark'>";
    document.querySelector("#answer2").textContent = "Correct";
    document.querySelector("#answer2").style.color = "green";
    score += 20;
    if (userAnswer3 == answerQ3) {
        // display "Right!"
        document.querySelector("#markImg3").innerHTML = "<img src='img/checkmark.png' alt='Checkmark'>";
        document.querySelector("#answer3").textContent = "Correct";
        document.querySelector("#answer3").style.color = "green";
        score += 20;
    }
     if (userAnswer4 == answerQ4) {
        // display "Right!"
        document.querySelector("#markImg4").innerHTML = "<img src='img/checkmark.png' alt='Checkmark'>";
        document.querySelector("#answer4").textContent = "Correct";
        document.querySelector("#answer4").style.color = "green";
        score += 20;
    }
    if (userAnswer5 == answerQ5) {
        document.querySelector("#markImg5").innerHTML = "<img src='img/checkmark.png' alt='Checkmark'>";
        document.querySelector("#answer5").textContent = "Correct";
        document.querySelector("#answer5").style.color = "green";
        score += 20;
    }
    if (userAnswer1 != answerQ1) {
        document.querySelector("#markImg1").innerHTML = "<img src='img/xmark.jpg' alt='xmark'>";
        document.querySelector("#answer").textContent = "Incorrect";
        document.querySelector("#answer").style.color = "red";
    } 
    if (userAnswer3!= answerQ3) {
        document.querySelector("#markImg3").innerHTML = "<img src='img/xmark.jpg' alt='xmark'>";
        document.querySelector("#answer3").textContent = "Incorrect";
        document.querySelector("#answer3").style.color = "red";
    }
    if (userAnswer4 != answerQ4) {
        document.querySelector("#markImg4").innerHTML = "<img src='img/xmark.jpg' alt='xmark'>";
        document.querySelector("#answer4").textContent = "Incorrect";
        document.querySelector("#answer4").style.color = "red";
    }
    if (document.querySelector("#Keith").value || document.querySelector("#Mick").value) {
        document.querySelector("#markImg5").innerHTML = "<img src='img/xmark.jpg' alt='xmark'>";
        document.querySelector("#answer5").textContent = "Incorrect";
        document.querySelector("#answer5").style.color = "red";
    }
    document.querySelector("#totalScore").innerHTML = 'Total Score: ' + score;
    if (score >= 80) {
        document.querySelector("#message").textContent = "YAYYYY CONGRATS!!!";
        document.querySelector("#message").style.color = "green";
    } else {
        document.querySelector("#message").textContent = "...oooooohh... listen to more music...";
        document.querySelector("#message").style.color = "red";
    }
}