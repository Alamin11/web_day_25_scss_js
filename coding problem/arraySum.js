var numArray = [10, 12, 34];
let sum = 0;
function calculateSum(numberArray) {
    for (let i = 0; i < numberArray.length; i++) {
        sum = sum + numberArray[i];
    }
    return sum;
}

var sumOfArray = calculateSum(numArray);
console.log(sumOfArray);