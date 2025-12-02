/*const str = 'nurses run';
const strToArr = function(str) {
    return [...str].filter(char => char !== ' ');
};

console.log(strToArr(str));


function checkIfPalindrome(str) {
    const preparedStr = strToArr(str).reverse();

    if ( strToArr(str) === preparedStr ) {
        return true;
    } else
        return false;
};

console.log(checkIfPalindrome(str));*/


function checkIfPalindrome(str) {
    const preparedStr = str.toLowerCase();
    const resultStr = [...preparedStr].filter(char => char !== ' ');
     if ( resultStr === resultStr.reverse() ) {
        return true;
    } else
        return false;
};

console.log(checkIfPalindrome('Nurses run'));