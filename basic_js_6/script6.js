let num = 3;

if (num > 0) {
    console.log ('Positive number')
} else if (num === 0) {
    console.log ('Zero')
} else {
    console.log ('Negative number')
};


let height = prompt ('Your height (m):');
let weight = prompt ('Your weight (kg):');
let BMI = Math.round(weight / (height**2));

console.log (BMI);

if (BMI >= 30) {
    document.body.innerHTML = 'Obesity :(';
} else if (BMI >= 25) {
    document.body.innerHTML = 'Overweight';
} else if (BMI >= 18) {
    document.body.innerHTML = 'Normal';
} else {
    document.body.innerHTML = 'Underweight';
};