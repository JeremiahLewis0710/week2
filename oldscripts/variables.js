var a = 4;
var b = 5;
var c = 2;




//Challenge #2 - Make a var called myNumber
//Set it to 0.
//Use shorthand to add 10 to it.
//Then use shorthand to subtract 1.
//Use shorthand to multiple by 9.
//Use shorthand to divide by 7.
//Just for practice, print myNumber to the console between each operation.

var myNumber = 0;
myNumber = myNumber + 10;
console.log(myNumber);

//Challenge #3 - Lifetime Supply
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var myAge = 25;
var maxAge = 99;
var snacks = 7;
var clock = ((snacks * 365)*(maxAge - myAge));
var message = "You will need+"  clock + "To last you until you die";
console.log(message);
