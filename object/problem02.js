var total = 0;
function make_avg(values, size) {

    for (var i = 0; i < size; i++) {
        total = total + values[i];
    }
    return (total / size).toFixed(2);
}
var numbers = [12, 23, 34, 45, 56, 67, 78, 89, 90];
var average = make_avg(numbers, numbers.length);
console.log(average);