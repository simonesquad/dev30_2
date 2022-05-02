// the classic game
// outcome scenarios are:
// rock destroys scissors
// scissors cuts paper
// paper covers rock
// tie then game ends in a draw

// Step 1 & 2 & 3:

function getUserChoice(userInput) {

    const userInput2 = userInput.toLowerCase();

    if (userInput2 === 'rock' | 'paper' | 'scissors') {
        return userInput2
    } else {
        console.log('not valid')
    }
}

// Step 4:
// console.log(getUserChoice('CUP'));
// it is working*

// Step 5:
function getComputerChoice () {
    function getRandInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let result = getRandInt(0, 2)

    if (result === 0) {
        return 'rock'
    } else if (result === 1) {
        return 'paper'
    } else if (result === 2) {
        return 'scissors'
    }
}
// Step 6: it works!
// console.log(getComputerChoice());

// Step 7 & 8 & 9 & 10: let's pick a winner teehee

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie'
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'computer won'
        } else {
            return 'user won'
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'computer won'
        } else {
            return 'user won'
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'computer won'
        } else {
            return 'user won'
        }
    }
}

// Step 11: test some basic stuff
// getting a hiccup on line 12 but we'll revisit that
// console.log(determineWinner('scissors', 'rock'));

// Step 12: attempting to log results here
function playGame () {
    const userChoice = getUserChoice();
    console.log(userChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    return userChoice, computerChoice
}
// Seems to be working!
// console.log(playGame());

// Step 13: final results
console.log(playGame(determineWinner()));