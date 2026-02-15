// Event listeners
document.querySelector("button").addEventListener("click", gradeQuiz);

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
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    let userAnswer3 = document.querySelector("#q3").value; 
    let userAnswer4 = document.querySelector("#q4").value;

    //alert("Grading quiz..." + userAnswer1 + " " + userAnswer3 + " " + userAnswer4);

    if (userAnswer1 == answerQ1) {
        // display "Right!"
        document.querySelector("#answer").textContent = "Correct";
        document.querySelector("#answer").style.color = "green";

    }
    document.querySelector("#answer2").textContent = "Correct";
    document.querySelector("#answer2").style.color = "green";
    if (userAnswer3 == answerQ3) {
        // display "Right!"
        document.querySelector("#answer3").textContent = "Correct";
        document.querySelector("#answer3").style.color = "green";
    }
     if (userAnswer4 == answerQ4) {
        // display "Right!"
        document.querySelector("#answer4").textContent = "Correct";
        document.querySelector("#answer4").style.color = "green";
    }
    if (userAnswer1 != answerQ1) {
        document.querySelector("#answer").textContent = "Incorrect";
        document.querySelector("#answer").style.color = "red";
    } 
    if (userAnswer3!= answerQ3) {
        document.querySelector("#answer3").textContent = "Incorrect";
        document.querySelector("#answer3").style.color = "red";
    }
    if (userAnswer4 != answerQ4) {
        document.querySelector("#answer4").textContent = "Incorrect";
        document.querySelector("#answer4").style.color = "red";
    }
}