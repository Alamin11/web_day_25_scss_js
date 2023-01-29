// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
var numbers = [12, 23, 34, 56, 67, 78, 89];
// for (var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// Break 
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        break;
    }
    // console.log(numbers[i]);
}
// continue
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == 56) {
        continue;
    } console.log(numbers[i]);
}