// the classic game
// outcome scenarios are:
// rock destroys scissors
// scissors cuts paper
// paper covers rock
// tie then game ends in a draw

// Step 1 & 2 & 3:

var getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else if (userInput === 'bomb') {
        return userInput
    } else {
        console.log('That is not a valid answer.')
    }
};

// Step 4:
// console.log(getUserChoice('Rock'));
// it is working*

// Step 5:
var getComputerChoice = function () {
    var randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors'
    }
};
// Step 6: it works!
// console.log(getComputerChoice());

// Step 7 & 8 & 9 & 10: let's pick a winner teehee

var determineWinner = function (userChoice, computerChoice) {
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
    } else if (userChoice === 'bomb') {
        return 'user won end of story'
    }
}

// Step 11: test some basic stuff
var userChoice = getUserChoice('bomb');
var computerChoice = getComputerChoice();

// console.log(determineWinner(userChoice, computerChoice));

// Step 12: attempting to log results here
var playGame = function (userInput) {
    var userChoice = getUserChoice(userInput);
    var computerChoice = getComputerChoice();

    console.log("User Choice", userChoice);
    console.log("Computer Choice", computerChoice);

    var winner = determineWinner(userChoice, computerChoice);

    console.log(winner);
};

var userInput = prompt();

playGame(userInput);
// Seems to be working!
// console.log(playGame());

// Step 13: final results
// console.log(playGame(determineWinner('rock', 'paper')));

// Step 14:
// playGame();