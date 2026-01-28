const startButton = document.getElementById('startButton');
const testArea = document.getElementById('testArea');
const questionArea = document.getElementById('questionArea');
const questionNumber = document.getElementById('questionNumber');
const submitAndCheckButton = document.getElementById('submitAndCheckButton');
const nextButton = document.getElementById('nextButton');
const restartButton = document.getElementById('restartButton');
const scoreDisplay = document.getElementById('scoreDisplay');
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');
const resultElement = document.getElementById('result');
const finishButton = document.getElementById('finishButton');
const finalScore = document.getElementById('finalScore');
const finishArea = document.getElementById('finishContainer');

let totalScore = 0;
let currentQuestion = null;
let currentQuestionIndex = 0;

startButton.addEventListener('click', startTest);
submitAndCheckButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextQuestion);
finishButton.addEventListener('click', finishTest);
restartButton.addEventListener('click', restartTest);

function startTest() {
    console.log('Test started!');
    testArea.style.display = 'none';
    finishArea.style.display = 'none';
    questionArea.style.display = 'flex';
    submitAndCheckButton.style.display = 'block';
    nextButton.style.display = 'none';
    question1.style.display = 'flex';
    question2.style.display = 'none';
    question3.style.display = 'none';
    question4.style.display = 'none';
    questionNumber.textContent = 'Question 1';
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
    let selectedValue = null;
    let isCorrect = false;

    function isNotAnswered(resultElement) {
        resultElement.textContent = "Please, answer the question";
        resultElement.style.color = "orange";
        resultElement.style.fontWeight = '800';
        resultElement.style.fontSize = '18px';
        return true; 
    }

    function isRight(resultElement) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
        resultElement.style.fontWeight = '800';
        resultElement.style.fontSize = '18px';
        submitAndCheckButton.style.display = 'none';
        totalScore = totalScore+=1;
        return true;
    }

    function isWrong(resultElement) {
        resultElement.textContent = "Wrong, please, try again next time";
        resultElement.style.color = "red";
        resultElement.style.fontWeight = '800';
        resultElement.style.fontSize = '18px';
        submitAndCheckButton.style.display = 'none';
        return true;
    }
    
    if (currentQuestion !== question4) {
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedValue = radioButton.value;
                break;
            }
        }
    
        questionArea.appendChild(resultElement);
        resultElement.style.textAlign = 'center';
        resultElement.style.marginTop = '20px';


        if (selectedValue === null) {
            isNotAnswered(resultElement);
            return;
        } 
        
        isCorrect = (selectedValue === "1");

        if (isCorrect) { 
            isRight(resultElement);
            nextButton.style.display = 'block';
            console.log(`Total for now: ${totalScore}`);
        } else {
            isWrong(resultElement);
            nextButton.style.display = 'block';
        }
    }

    if (currentQuestion === question4) {
        const correctAnswer = "90";
        const userAnswer = document.getElementById('answerBox').value;
        

        if (userAnswer === '') {
            isNotAnswered(resultElement);
            return;
        }

        finishButton.style.display = 'none';
        nextButton.style.display = 'none';
        submitAndCheckButton.style.display = 'block';

        isCorrect = (userAnswer === correctAnswer);
        
        if (isCorrect) {
            isRight(resultElement);
            nextButton.style.display = 'none';
            finishButton.style.display = 'block';
            console.log(`Total for now: ${totalScore}`);
            
        } else {
            isWrong(resultElement);
            nextButton.style.display = 'none';
            finishButton.style.display = 'block';
        }
    }
}

function nextQuestion() {
    console.log('Changing questions');
    resultElement.textContent = '';

    const questions = [question1, question2, question3, question4];

    questions[currentQuestionIndex].style.display = 'none';
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        questions[currentQuestionIndex].style.display = 'flex';
        questionNumber.textContent = `Question ` + (currentQuestionIndex + 1)
        nextButton.style.display = 'none';
        submitAndCheckButton.style.display = 'block';
    } else {
        nextButton.style.display = 'none';
        submitAndCheckButton.style.display = 'none';
        finishButton.style.display = 'block';
    }
}

function finishTest() {
    testArea.style.display = 'none';
    questionArea.style.display = 'none';
    finishArea.style.display = 'flex';
    restartButton.style.display = 'block';
    finalScore.textContent = totalScore + '/4';
    finalScore.style.fontSize = '35px';
    finalScore.style.fontWeight = '800';
    finalScore.style.color = 'green';
}

function restartTest() {
    totalScore = 0;
    currentQuestion = null;
    currentQuestionIndex = 0;
    const allRadioButtons = document.querySelectorAll('input[type="radio"]');
    allRadioButtons.forEach(radio => radio.checked = false);

    const answerBox = document.getElementById('answerBox');
    if (answerBox) answerBox.value = '';

    questionArea.style.display = 'none';
    finishArea.style.display = 'none';

    submitAndCheckButton.style.display = 'none';
    nextButton.style.display = 'none';
    finishButton.style.display = 'none';
    
    testArea.style.display = 'flex';
    startButton.style.display = 'block';

    const resultElement = document.getElementById('result');
    resultElement.textContent = '';

    if (scoreDisplay) scoreDisplay.style.display = null;
    currentQuestion = question1;
    
    console.log('Тест сброшен. Счет: 0');

}