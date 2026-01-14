const startButton = document.getElementById('startButton');
const testArea = document.querySelector('.testArea');
const questionArea = document.getElementById('questionArea');
const resultArea = document.getElementById('resultArea');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const submitAndCheckRadioButton = document.getElementById('submitAndCheckButton');
const buttonAfterAnswer = document.getElementById('buttonAfterAnswer');
const inputContainer = document.getElementById('inputContainer');
const textAnswer = document.getElementById('textAnswer');
const feedback = document.getElementById('feedback');
const nextButton = document.getElementById('nextButton');
const restartButton = document.getElementById('restartButton');
const scoreDisplay = document.getElementById('scoreDisplay');


startButton.addEventListener('click', startTest);
submitAndCheckRadioButton.addEventListener('click', checkRadioAnswer);
nextButton.addEventListener('click', handleNextQuestion);
restartButton.addEventListener('click', restartTest);

function startTest() {
    console.log('Test started!');
    testArea.style.display = 'none';
    questionArea.style.display = 'flex';
}

function checkRadioAnswer() {
    const radioButtons = document.querySelectorAll('input[name="q1"], input[name="q2"], input[name="q3"]');
    const resultElement = document.getElementById('result');

    let selectedValue = null;
    let selectedRadio = null;
    
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
            selectedLabel = radioButton.nextElementSibling;
            break;
        }
    }
    
    if (selectedValue === null) {
        resultElement.textContent = "Please, answer the question";
        resultElement.style.color = "orange";
    } else if (selectedValue === "1") { 
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Wrong, please, try again";
        resultElement.style.color = "red";
        selectedLabel.classList.add = 'incorrectAnswer';
    }


}


function nextAction() {
    const buttonAfterAnswer = document.getElementById('buttonAfterAnswer');

    
}