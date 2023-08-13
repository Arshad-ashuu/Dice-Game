var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomDice = "images/dice" + randomNumber + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDice);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDice2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if (randomNumber>randomNumber2) {
    document.querySelector("h1").innerHTML="player 1 wins! ⛳";
} 
else if (randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML="player 2 wins! ⛳";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}