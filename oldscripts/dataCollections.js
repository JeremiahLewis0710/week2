// Arrays

// var agesInClass = [23,45,46,44,34];
// console.log(agesInClass);

var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(var i = 0; i < myNumbers.length; i ++){
//     console.log("Number :", myNumbers[i]);}
var total = 0;
for(i = 0; i < myNumbers.length; i ++){
    total = total + myNumbers[i];
}
console.log(total);