//  QUESTION ONE 
for (let i=1; i<= 100; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log ("FizzBuzz");
    }else if(i%3 === 0){
        console.log("Fizz");
    }else if(i%5 === 0){
        console.log("Buzz");
    }else {
        console.log(i);
    }

}

//QUESTION TWO
function generateFibonacci(limit: number): number [] {
    let fibonacciSequence: number [] = [0, 1];
    let nextNumber = fibonacciSequence[0] + fibonacciSequence[1];

    while(nextNumber <= limit){
        fibonacciSequence.push(nextNumber);
        let lgth = fibonacciSequence.length;
        nextNumber = fibonacciSequence[lgth - 1] + fibonacciSequence[lgth -2];
    }

    return fibonacciSequence;
}
const limit =100;
const fibonacciSequence =generateFibonacci(limit);

console.log(fibonacciSequence);
    

//QUESTION THREE

function isPowerofTwo (n: number): boolean{
if (n <= 0){
    return false;
}
return (n & (n-1))  === 0;
}

console.log(isPowerofTwo(8));
console.log(isPowerofTwo(6))
console.log(isPowerofTwo(12));


//QUESTION FOUR

function capitalizeWords(sentence: string): string {
    const words: string[] = sentence.split(" ");
    const capitalizedWords: string[] = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
}

console.log(capitalizeWords("will be there tommorrow"))
console.log(capitalizeWords("hi"));
console.log(capitalizeWords("i love programming")); 

 


//  QUESTION FIVE

function reverseInteger (n: number){
    const isNegative = n < 0;
    const reversedString = Math.abs(n).toString ().split ("").reverse().join ('');
    const reversedNumber = parseInt (reversedString, 10);
    return isNegative? -reversedNumber : reversedNumber;
}
    console.log(reverseInteger(500));
    console.log(reverseInteger(-56));
    console.log(reverseInteger(-90));
    console.log(reverseInteger(91));



//QUESTION SIX

function countVowels (sentence: String): number {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of sentence) {
        if (vowels.includes(char)) {
            count ++;
        }
    }
    return count ;

}

console.log( "Hello World");
console.log("I Like Playing and watching football");