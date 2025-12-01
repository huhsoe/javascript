const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet('Alice')); // "Hello, Alice!" - Function Expression




function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // "Hello, Alice!" - Function Declaration



const greet = (name) => `Hello, ${name}!`;
console.log(greet('Alice')); // "Hello, Alice!" - Arrow Function