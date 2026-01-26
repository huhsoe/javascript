const startButton = document.getElementById('startButton');
const testArea = document.querySelector('.testArea');
const questionArea = document.getElementById('questionArea');
const resultArea = document.getElementById('resultArea');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const submitAndCheckButton = document.getElementById('submitAndCheckButton');
const buttonAfterAnswer = document.getElementById('buttonAfterAnswer');
const inputContainer = document.getElementById('inputContainer');
const textAnswer = document.getElementById('textAnswer');
const feedback = document.getElementById('feedback');
const nextButton = document.getElementById('nextButton');
const finishButton = document.getElementById('finishButton');
const restartButton = document.getElementById('restartButton');
const scoreDisplay = document.getElementById('scoreDisplay');
const finishArea = document.getElementById('finishContainer');
const question1 = document.getElementById('firstQuestion');
const question2 = document.getElementById('secondQuestion');
const question3 = document.getElementById('thirdQuestion');
const question4 = document.getElementById('fourthQuestion');

let totalScore = 0;
let currentQuestion = null;

startButton.addEventListener('click', startTest);
restartButton.addEventListener('click', restartTest);

function startTest() {
    console.log('Test started!');
    testArea.style.display = 'none';
    finishArea.style.display = 'none';
    questionArea.style.display = 'flex';
    question1.style.display = 'flex';
    submitAndCheckButton = 'block';
    nextButton = 'none';
    resultArea = 'none';
}

function checkAnswer() {
    
   if (question1.style.display === 'flex' || question1.style.display === '') {
        currentQuestion = question1;
    } else if (question2.style.display === 'flex') {
        currentQuestion = question2;
    } else if (question3.style.display === 'flex') {
        currentQuestion = question3;
    } else if (question4.style.display === 'flex') {
        currentQuestion = question4;
    }
    
    if (!currentQuestion) {
        console.error('No active question found');
        return;
    }
    
    const radioButtons = currentQuestion.querySelectorAll('input[type="radio"]');
    const resultElement = document.getElementById('result');
    const submitAndCheckButton = document.getElementById('submitAndCheckButton');
    const nextQuestion = document.getElementById('nextQuestion');

    let selectedValue = null;
    let isCorrect = false;
    
    if (currentQuestion !== question4) {
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedValue = radioButton.value;
                break;
            }
        }
    
    
        if (selectedValue === null) {
            resultElement.textContent = "Please, answer the question";
            resultElement.style.color = "orange";
            return;
        } 
        
        isCorrect = (selectedValue === "1");

        if (isCorrect) { 
            resultElement.textContent = "Correct!";
            resultElement.style.color = "green";
            submitAndCheckButton.style.display = 'none';
            nextQuestion.style.display = 'block';
            totalScore = totalScore+=1; 
            console.log(`Total for now: ${totalScore}`);
        } else {
            resultElement.textContent = "Wrong, please, try again next time";
            resultElement.style.color = "red";
            submitAndCheckButton.style.display = 'none';
            nextQuestion.style.display = 'block';
        }
    }

    if (currentQuestion === question4) {
        const correctAnswer = "90";
        const userAnswer = document.getElementById('answerBox').value;
        finishButton.style.display = 'block';
        nextQuestion.style.display = 'none';

        isCorrect = (userAnswer === correctAnswer);
        
        if (isCorrect) {
            resultElement.textContent = "Correct!";
            resultElement.style.color = "green";
            submitAndCheckButton.style.display = 'none';
            nextQuestion.style.display = 'none';
            finishButton.style.display = 'block';
            totalScore += 1;
            console.log(`Total for now: ${totalScore}`);
            
        } else {
            resultElement.textContent = "Wrong, please, try again next time";
            resultElement.style.color = "red";
            submitAndCheckButton.style.display = 'none';
        }
    }
}


function nextQuestion() {
    console.log('Changing questions');
    const nextQuestion = document.getElementById('nextQuestion');
    const submitAndCheckButton = document.getElementById('submitAndCheckButton'); 
    const questionNumberElement = document.getElementById('questionNumber');
    const result = document.getElementById('result');
    const inputTextAnswer = document.querySelector('#fourthQuestion input[type="text"]');
    result.textContent = '';
    

    if (question1.style.display === 'flex' || question1.style.display === '') {
        question1.style.display = 'none';
        question2.style.display = 'flex';
        question3.style.display = 'none';
        question4.style.display = 'none';
        questionNumberElement.textContent = 'Question 2';
        nextQuestion.style.display = 'none';
        submitAndCheckButton.style.display = 'block';

    } 
    else if (question2.style.display === 'flex') {
        question1.style.display = 'none';
        question2.style.display = 'none';
        question3.style.display = 'flex';
        question4.style.display = 'none';
        questionNumberElement.textContent = 'Question 3';
        nextQuestion.style.display = 'none';
        submitAndCheckButton.style.display = 'block';
    }
    else if (question3.style.display === 'flex') {
        question1.style.display = 'none';
        question2.style.display = 'none';
        question3.style.display = 'none';
        question4.style.display = 'flex';
        questionNumberElement.textContent = 'Question 4';
        nextQuestion.style.display = 'none';
        submitAndCheckButton.style.display = 'block';
    }
}

function finishTest() {
    const finishText = document.getElementById('finishText');
    const finalScore = document.getElementById('finalScore');

    testArea.style.display = 'none';
    questionArea.style.display = 'none';
    finishArea.style.display = 'flex';
    restartButton.style.display = 'block';
    finalScore.textContent = totalScore + '/4';
    finalScore.style.fontSize = '22px;'
}

function restartTest() {
    totalScore = 0;
    currentQuestion = null;
    const allRadioButtons = document.querySelectorAll('input[type="radio"]');
    allRadioButtons.forEach(radio => radio.checked = false);

    const answerBox = document.getElementById('answerBox');
    if (answerBox) answerBox.value = '';

    testArea.style.display = 'flex';
    startButton = 'block';

    questionArea.style.display = 'none';
    finishArea.style.display = 'none';
    question1.style.display = 'none';
    question2.style.display = 'none';
    question3.style.display = 'none';
    question4.style.display = 'none';

    submitAndCheckButton.style.display = 'none';
    nextButton.style.display = 'none';
    finishButton.style.display = 'none';
    
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';

    if (scoreDisplay) scoreDisplay.style.display = 'none';

    
    console.log('Тест сброшен. Счет: 0');

}