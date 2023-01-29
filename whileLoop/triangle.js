var i = 0;
var triangle = "";
while (i < 5) {
    var j = 0;
    while (j <= i) {
        triangle += "*";
        //console.log(j+1);
        j++;
    } triangle += "\n";
    i++;
}
console.log(triangle);