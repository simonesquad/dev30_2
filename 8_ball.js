// simulate a magic 8 ballusing control flow in javascript
// user should be able to input a question and receive a fortune as output

// Step 1:
const userName = 'Sonic';
// Step 2:
if (userName != null) {
    console.log(`Hello, ${userName}!`)
} else {
    console.log('Hello!')
}
// Step 3:
const userQuestion = 'what is your most burning desire?';
// Step 4:
console.log(`${userName} asked: ${userQuestion}`)
// Step 5:
const randomNumber = Math.floor(Math.random() * 8);
// Step 6:
var eightBall = '';
// Step 7:
if (randomNumber === 0) {
    eightBall = ('It is certain.')
} else if (randomNumber === 1) {
    eightBall = ('It is decidedly so.')
} else if (randomNumber === 2) {
    eightBall = ('Reply hazy try again.')
} else if (randomNumber === 3) {
    eightBall = ('Cannot predict now')
} else if (randomNumber === 4) {
    eightBall = ('Do not count on it.')
} else if (randomNumber === 5) {
    eightBall = ('My sources say no.')
} else if (randomNumber === 6) {
    eightBall = ('Outlook not so good.')
} else {
    eightBall = ('Signs point to yes.')
}
// Step 8:
console.log(eightBall)
