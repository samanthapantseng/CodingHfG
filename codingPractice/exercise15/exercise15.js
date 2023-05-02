let firstSeriesResults = [];
let secondSeriesResults = [];
let thirdSeriesResults = [];

function askInput() {
    let input = prompt("Enter a value for n: ");
    n = input;
}

function firstSeries() {
    //askInput();
    let inputBox = document.getElementById("myInputBox");
    let n = inputBox.value;
    for (i = 1; i <= n; i++) {
        firstSeriesResults[i - 1] = i * i;
    }
    console.log(firstSeriesResults);
    let outputFirst = document.getElementById("outputFirst");
    outputFirst.innerText = firstSeriesResults;
}

function secondSeries() {
    //askInput();
    let inputBox = document.getElementById("myInputBox");
    let n = inputBox.value;
    for (i = 1; i <= n; i++) {
        secondSeriesResults[i - 1] = 2 ** (i - 1);
    }
    console.log(secondSeriesResults);
    let outputSecond = document.getElementById("outputSecond");
    outputSecond.innerText = secondSeriesResults;
}

function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    let fib1 = 1;
    let fib2 = 1;
    let result;
    for (let i = 3; i <= n; i++) {
        result = fib1 + fib2;
        fib1 = fib2;
        fib2 = result;
    }
    return result;
}

function thirdSeries() {
    //askInput();
    let inputBox = document.getElementById("myInputBox");
    let n = inputBox.value;
    for (i = 1; i <= n; i++) {
        thirdSeriesResults[i - 1] = fibonacci(i);
    }
    console.log(thirdSeriesResults);
    let outputThird = document.getElementById("outputThird");
    outputThird.innerText = thirdSeriesResults;
}

function isPrime(num) {
    // Check if num is prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // this is a way to find out if it's a prime number
        // if we have checked all possible factors up to the square root of num and none 
        // of them divide num, then num must be prime.
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function fourthSeries() {
    //askInput();
    let inputBox = document.getElementById("myInputBox");
    let n = inputBox.value;
    let count = 0;
    let prime = 2;

    while (count < n) {
        if (isPrime(prime)) {
            count++;
        }
        prime++;
    }
    console.log("The " + n + "th prime number is " + (prime-1) + ".");
    let outputFourth = document.getElementById("outputFourth");
    outputFourth.innerText = "The " + n + "th prime number is " + (prime-1) + ".";
}