// Has return has parameter
function odd_even(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else { return 'Odd'; }
}

var typeOfNumber = odd_even(10);
console.log(typeOfNumber);

// Has parameter no return

function even_odd(number) {
    if (number % 2 == 0) {
        console.log('Even number');
    } else {
        console.log('Odd number');
    }
}

even_odd(24);