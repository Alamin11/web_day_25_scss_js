var number = 1011;

function evenOddCheck(num) {
    if (num % 2 == 0) {
        return 'Even number';
    } else {
        return 'Odd number';
    }
}

let numberType = evenOddCheck(number);
console.log(`${number} is ${numberType}`);