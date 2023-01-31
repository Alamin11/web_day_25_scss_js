// Creating object
var car = {
    brand: 'Toyota',
    color: 'Red',
    model: '2020',
    price: 40000000
}

// Getting the object value 
// by property name using dot notation
var carPrice = car.price;
console.log('Car price : ' + carPrice);

// by property name using array like notation
var carColor = car['color'];
console.log('Color of your car is : ' + carColor);

// Accessing all the properties as array 
var properties = Object.keys(car);
console.log(properties);

// accessing all the values of the object 
var values = Object.values(car);
console.log(values);

// printing all the keys of car object using loop
for (var i = 0; i < properties.length; i++) {
    var propertyName = properties[i];
    // console.log(propertyName);
    // printing all the values of car object using loop
    var propertyValue = car[propertyName];
    // console.log(propertyValue);

    console.log(propertyName, propertyValue);


}
// printing all the values of car object using loop
// for (var i = 0; i < values.length; i++) {
//     console.log(values[i]);
// }
