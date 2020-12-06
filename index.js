

//set a variable randonNumber1 and set the value at a random number between 1 and 6 - for img1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//set new variable for im2, so that number generated is different
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select each image and generate a different dice for each refresh.
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

// change the text to display the winner, loser or draw.

if (randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "Player 1 Wins!";
  }
  else if (randomNumber1 < randomNumber2){
  document.querySelector("h2").innerHTML =  "Player 2 Wins!";
}
else {
  document.querySelector("h2").innerHTML = "It's a draw!";
}
