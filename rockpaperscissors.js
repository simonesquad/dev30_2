// the classic game
// outcome scenarios are:
// rock destroys scissors
// scissors cuts paper
// paper covers rock
// tie then game ends in a draw

// Step 1 & 2 & 3:
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || 'paper' || 'scissors') {
        return userInput
    } else {
        console.log('not valid')
    }
}

// Step 4:
// console.log(getUserChoice('paper'));
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

console.log(getComputerChoice());

