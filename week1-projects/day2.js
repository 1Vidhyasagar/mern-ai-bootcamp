// Number Guessing Game
const secretNumber = Math.floor(Math.random() * 10) + 1; // random number 1-10
let guess = 7; // pretend user guessed 7

if (guess === secretNumber) {
  console.log("🎉 Correct! The secret number was", secretNumber);
} else {
  console.log("❌ Wrong guess. The secret number was", secretNumber);
}
