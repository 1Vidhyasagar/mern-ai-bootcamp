// Write at least two functions: one simple (like add or square), and one for the guessing game.
// Run them with different inputs.

function add(a,b){
 return a+b;
}
 console.log(add(8,4)); 


function square(a){
return a*a;   
}
console.log(square(8))

function guessGame(guess){
    let secretNumber = Math.floor(Math.random() * 10) + 1;
    if (guess === secretNumber) {
      console.log("🎉 Correct! The secret number was", secretNumber);
    } else {
      console.log("❌ Wrong guess. The secret number was", secretNumber);
    }
}

guessGame(2)