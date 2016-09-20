var grade = Math.floor((Math.random() * (100 - 1 + 1)) +1);
console.log(grade);

if(grade >=90){
    console.log("Congrats You Got an A!");
  } else if(grade >=80){
      console.log("Hey! You Got a B!");
  } 
   else if(grade >= 70){
       console.log(" You got a C, nice effort");
  }
   else if( grade >= 60){
     console.log("You got a D....What happened?")
   }
  else{
    console.log("You Suck");
    }