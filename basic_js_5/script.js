let a = 2 * 2 + 2 ;
console.log(a);

const x = Math.round((Math.sin(54) * Math.cos(16)) ** 2);
console.log(x);

const y = Math.round(((16 * Math.sqrt(13.2 * 71.90)) / (2.4 / (7 ** 4)) + 3 * (Math.sqrt(49))) * (2 ** 7));
console.log(y);


const b = 3;
const c = 4;
const d = 5;
const e = 6;

function isEven (number) {
    return number % 2 === 0; // Если число делится на 2 без остатка (остаток 0), то оно четное (true)
};

console.log(isEven(b));
console.log(isEven(c));
console.log(isEven(d));
console.log(isEven(e));

const name = '';

if (!name) {
    console.log("Hello, Guest!")
} else {
    console.log("Hello, " + name + "!")
}