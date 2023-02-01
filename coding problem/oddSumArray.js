var numbers = [12, 23, 34, 45, 56, 67, 78, 89];

function oddSum(numbers) {
    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 1) {
            sum = sum + numbers[i];
        }
    }
    return sum;
}

let oddSumArray = oddSum(numbers);
console.log(oddSumArray);