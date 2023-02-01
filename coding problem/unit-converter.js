var inchValue = 122;
var mileValue = 1020;

function inchToFeet(inchValue) {
    return inchValue / 12;
}
function milesToKilometer(mileValue) {
    return mileValue * 1.609344;
}

let feetValue = inchToFeet(inchValue);
let kilometerValue = milesToKilometer(mileValue);
console.log(`${inchValue} inch = ${feetValue.toFixed(3)} feet`);
console.log(`${mileValue} miles = ${kilometerValue.toFixed(3)} Kilometer`);