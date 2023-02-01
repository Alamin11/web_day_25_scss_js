let num = 5;

function calculateFactorial(number) {
    let fact = 1;
    let i = 1;
    while (i <= number) {
        fact *= i;
        i++;
    }
    return fact;
}

let factValue = calculateFactorial(num);
console.log(factValue);