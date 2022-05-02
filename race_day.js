// register runners for a race and give them instructions day of
// Categories include:
// Adult runners 18+ exclusive
// Youth runners under 18- exclusive
// Ignoring exactly 18-year olds for now
// Registration happens either early or late
// Runners assigned a race number and start time based on the two variables above
// Youth recieve race numbers >= 1000
// Adults receive race numbers < 1000
// Start time: adults/early @ 9:30am, adults/late @ 11:00am
// Youth: 12:30 always

//Initially I went about this in an entirely different way and you can see below: 
// I'm leaving this in just as an example of what you could to do expedite the process:

// Step 1a: creating separate functions to use later for generating the number based on age:

// function getYouthNumber(min) {
//     min = Math.ceil(1000);
//     return Math.floor(Math.random() * (min));
// }

// function getAdultNumber() {
//     return Math.floor(Math.random() * 1000);
// }

// Step 1b: assign race numbers based on age solely
// if (age < 18) {
//     let raceNumber = getYouthNumber();
// } else if (age > 18) {
//     let raceNumber = getAdultNumber();
// }

// Step 1: the traditional approach from the instructions
let raceNumber = Math.floor(Math.random() * 1000);

// Step 2: create a registration variable
var registeredEarly = false

// Step 3: runner's age variable
const age = 16;

// Step 4: checks age and registration status
// if (age > 18 && registeredEarly === true) {
//     console.log(raceNumber + 1000)
// } 

// Step 5: determining race time 
if (age > 18 && registeredEarly === true) {
    console.log(`Congratulations, your race will start at 9:30am and your race number is: ${raceNumber}`)
} else if (age > 18 && registeredEarly === false) {
    console.log(`Congratulations, your race will start at 11:00am and your race number is: ${raceNumber}`)
} else {
    console.log(`Welcome youth, your race starts at 12:30pm and your race number is: ${raceNumber + 1000}`)
}

// Step 6: written above

// Step 7: written above

// Step 8 & 9: run it.

