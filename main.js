let attempts = 0;
let score = 0;
function guess(userGuess) {
  //increasing attemtps by 1
  attempts++;
  document.getElementById("attempts").innerHTML = attempts;
  //generating a random number
  const random_number = Math.floor(Math.random() * 100) + 1;
  // determining the correct answer
  const correctAnswer = random_number % 2 === 0 ? "even" : "odd";
  //sfx function
  function sfx(isCorrect) {
    let audio = isCorrect
      ? document.getElementById("correct")
      : document.getElementById("wrong");
  }
  if (userGuess === correctAnswer) {
    //update the display
    document.getElementById("display").innerHTML =
      "Correct ! The number is " + random_number;
    //increasing the player score
    score++;
    document.getElementById("Score").innerHTML = score;
    //playing the sfx
    sfx(true);
  }
}
