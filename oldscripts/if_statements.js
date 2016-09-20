//Challenge:
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.

var bankAccount = 1200;
var debt = 800;
var difference = bankAccount - debt;

if((bankAccount - debt) > 0){
    console.log("You will have money left over");
} else{
    console.log("Declare Bankruptcy");
}

var homeworkDue = true;
var homeworkComplete = false;

if(homeworkDue || homeworkComplete){
    console.log("Don't Procrastinate")
} else{
    console.log("Good Job!")
}