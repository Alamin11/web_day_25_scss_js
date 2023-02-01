let num = 4;

function calculateFactorial(number) {
    let factorial = 1
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

let factorialValue = calculateFactorial(num);
console.log(factorialValue);