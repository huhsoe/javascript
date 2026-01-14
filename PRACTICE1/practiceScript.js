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
    let currentQuestion = null;
    const question1 = document.getElementById('firstQuestion');
    const question2 = document.getElementById('secondQuestion');
    const question3 = document.getElementById('thirdQuestion');
   if (question1.style.display === 'flex' || question1.style.display === '') {
        currentQuestion = question1;
    } else if (question2.style.display === 'flex') {
        currentQuestion = question2;
    } else if (question3.style.display === 'flex') {
        currentQuestion = question3;
    }
    
    if (!currentQuestion) {
        console.error('No active question found');
        return;
    }
    
    // Находим все радио-кнопки в текущем вопросе
    const radioButtons = currentQuestion.querySelectorAll('input[type="radio"]');
    const resultElement = document.getElementById('result');
    const submitAndCheckRadioButton = document.getElementById('submitAndCheckRadioButton');
    const nextQuestion = document.getElementById('nextQuestion');

    let selectedValue = null;
    let isCorrect = false;
    
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
            break;
        }
    }
    
    if (selectedValue === null) {
        resultElement.textContent = "Please, answer the question";
        resultElement.style.color = "orange";
    } else if (selectedValue === "1") { 
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
        submitAndCheckRadioButton.style.display = 'none';
        nextQuestion.style.display = 'block';
    } else {
        resultElement.textContent = "Wrong, please, try again next time";
        resultElement.style.color = "red";
        submitAndCheckRadioButton.style.display = 'none';
        nextQuestion.style.display = 'block';
    }
}


function nextQuestion() {
    console.log('Changing questions');
    const nextQuestion = document.getElementById('nextQuestion');
    const submitAndCheckRadioButton = document.getElementById('submitAndCheckRadioButton'); 
    const questionNumberElement = document.getElementById('questionNumber');
    const question1 = document.getElementById('firstQuestion');
    const question2 = document.getElementById('secondQuestion');
    const question3 = document.getElementById('thirdQuestion');
    const result = document.getElementById('result');
    result.textContent = '';
    

    if (question1.style.display === 'flex' || question1.style.display === '') {
        question1.style.display = 'none';
        question2.style.display = 'flex';
        question3.style.display = 'none';
        questionNumberElement.textContent = 'Question 2';
        nextQuestion.style.display = 'none';
        submitAndCheckRadioButton.style.display = 'block';

    } 
    else if (question2.style.display === 'flex') {
        question1.style.display = 'none';
        question2.style.display = 'none';
        question3.style.display = 'flex';
        questionNumberElement.textContent = 'Question 3';
        nextQuestion.style.display = 'none';
        submitAndCheckRadioButton.style.display = 'block';
    }
    else if (question3.style.display === 'flex') {
        question1.style.display = 'none';
        question2.style.display = 'none';
        question3.style.display = 'none';
        questionNumberElement.textContent = 'Question 4';
        nextQuestion.style.display = 'none';
        submitAndCheckRadioButton.style.display = 'block';
    }
}