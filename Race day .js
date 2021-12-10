let raceNumber = Math.floor(Math.random() * 1000);
//random number from 0 to 1000

let registeredEarly = true; //it can be true or false 

let runnerAge = 21; // runner age 

if (registeredEarly && runnerAge > 18) {  
  raceNumber += 1000
} 
// it will check if the runner early and over 18 if it's both true the runner will get a number above 1000 

if (registeredEarly && runnerAge > 18) {
    console.log(`The race will start at 9:30am 
  your race number is: ${raceNumber}.`);
}  else if (!registeredEarly && runnerAge > 18) {
    console.log(`The race will start at 11:00am 
  you race number is: ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`the race will start at 12:30pm 
  your race number is: ${raceNumber}.`);
} else { (runnerAge === 18);
    console.log("please go to the registration desk for more info.");
}
// i can't explain the code block above but i understand it