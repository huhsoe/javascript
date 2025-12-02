const task1 = '1st task';
console.log(task1);

function checkIfPalindrome(str) {
    const preparedStr = str.toLowerCase();
    const resultStr = [...preparedStr].filter(char => char !== ' ');
     if ( resultStr.join('') === resultStr.reverse().join('') ) {
        return true;
    } else
        return false;
};

console.log(checkIfPalindrome('Nurses run'));
console.log(checkIfPalindrome('Hello'));
console.log(checkIfPalindrome('rotator'));

const task2 = '2nd task';
console.log(task2);

function findShortestWord(sentence) {
    if (!sentence || sentence.trim().length === 0) {
        return '';
    }
    const words = sentence.trim().split(' ');

    let shortestIndex = 0;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < words[shortestIndex].length) {
            shortestIndex = i;
        }
    }
    
    return words[shortestIndex];
};

console.log(findShortestWord('This is really hard for me'));