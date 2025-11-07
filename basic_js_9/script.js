const numbers = [2, 5, 8, 9];

const squares = numbers.map(num => num ** 2); 

console.log(numbers);

console.log(squares);


const copies = [1, 1, 2, 4, 4, 4, 4, 5, 7, 7];

const unique = copies.filter ((item, index) => copies.indexOf(item) === index);

console.log(unique);


const a = [3, 6, 7, 8, 9];

const sum = a.reduce((total, num) => total + num, 0);

console.log(sum);


const b = [1, 2, 3, 4, 5];

const reversed = b.reduce ((reversed, num) => [num, ...reversed], []);

console.log(reversed);


let job = 'teacher';
job = 'doctor';

console.log(job);

const name = 'Mary';
name = 'Sue';

console.log(name);


let arrLet = [1, 2, 3, 4];
const arrConst = [2, 5, 7, 9];

console.log(arrLet);
console.log(arrConst);


