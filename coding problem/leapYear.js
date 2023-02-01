
var year = 1996;
function leapYearCalculator(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log('Leap year');

    } else {
        console.log('Not a leap year');
    }
}

var isLeapYear = leapYearCalculator(year);