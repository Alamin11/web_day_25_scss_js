function reverseMaker(word) {
    //Write Your solution Here
    let reverseStr = '';
    let length = word.length - 1;
    for (i = length; i >= 0; i--) {
        reverseStr += word[i];
    }
    return reverseStr;
};

const str = 'GeeksfoGeek';
let revStr = reverseMaker(str);
console.log(revStr);