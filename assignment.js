//  QUESTION ONE 
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
//QUESTION TWO
function generateFibonacci(limit) {
    var fibonacciSequence = [0, 1];
    var nextNumber = fibonacciSequence[0] + fibonacciSequence[1];
    while (nextNumber <= limit) {
        fibonacciSequence.push(nextNumber);
        var lgth = fibonacciSequence.length;
        nextNumber = fibonacciSequence[lgth - 1] + fibonacciSequence[lgth - 2];
    }
    return fibonacciSequence;
}
var limit = 100;
var fibonacciSequence = generateFibonacci(limit);
console.log(fibonacciSequence);
//QUESTION THREE
function isPowerofTwo(n) {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}
console.log(isPowerofTwo(8));
console.log(isPowerofTwo(6));
//QUESTION FOUR
function capitilizeWords(input) {
    return input.split("").map(function (word) {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
        return word;
    }).join("");
}
console.log(capitilizeWords("hi"));
console.log(capitilizeWords("i love programming"));
//  QUESTION FIVE
function reverseInteger(n) {
    var isNegative = n < 0;
    var reversedString = Math.abs(n).toString().split("").reverse().join('');
    var reversedNumber = parseInt(reversedString, 10);
    return isNegative ? -reversedNumber : reversedNumber;
    console.log(reverseInteger(500));
    console.log(reverseInteger(-56));
    console.log(reverseInteger(-90));
    console.log(reverseInteger(91));
}
//QUESTION SIX
function countVowels(sentence) {
    var vowels = "aeiouAEIOU";
    var count = 0;
    for (var _i = 0, sentence_1 = sentence; _i < sentence_1.length; _i++) {
        var char = sentence_1[_i];
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Hello World");
console.log("I Like Playing and watching football");
