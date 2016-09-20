var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
// // Problem 1
var locate = numArray.lastIndexOf(27);
console.log(locate) 
 
//  // Problem 2
 var total = 0;
for (var i = 0; i < numArray.length; i ++){
    total = total + numArray[i];  
}
console.log(total);

// // Problem 3
var numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numArray2.pop();
console.log(numArray2);

// Problem 4
function sum(a, b){
    var add = a + b
    if (add <= 25){
        console.log(true);}
    else{console.log (false);}
        }
sum(23, 44)

// Problem 5
function combine(a, b){
    var com = a + b
    if (com.length > 12){
        console.log("Error string too long");}
    else{console.log (com);}
        }
combine("Hello ","Earthlings")

// Problem 6
var num = 0;
while (num <= 19){
    num ++;
    if(num <= 5){console.log("Very Low Number")}
    else if(num <= 10){console.log("Low Number")}
    else if(num <=15){console.log("High Number")}
    else{console.log ("Very High Number")}  
}
