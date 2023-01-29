var n = 5;
var i = 1;
var piramid = "";
while (i <= n) {
    var j = 1;
    while (j < n - i) {
        piramid += " ";
        j++;
    }
    var k = 1;
    while (k < 2 * i) {
        piramid += "*";
        k++;
    } piramid += "\n";
    i++;

}
console.log(piramid);