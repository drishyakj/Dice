// Dice 1 change
var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceImage1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",diceImage1);
// Dice 2 change
var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceImage2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",diceImage2);
// Check the values and change the results
if(randomNumber1==randomNumber2)
{
  document.querySelector(".container h1").innerHTML = "Draw";
}
else if(randomNumber1>randomNumber2)
{
  document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
}
else
{
  document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
}
