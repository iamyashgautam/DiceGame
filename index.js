
var rn1 = Math.floor(Math.random()* 6) +1;
randDiceImg = "images/dice"+rn1+".png";
document.querySelectorAll("img")[0].setAttribute("src" ,randDiceImg);

var rn2 = Math.floor(Math.random()* 6) +1;
var randDiceImg2 = "images/dice"+ rn2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randDiceImg2);

if(rn1 > rn2){
  document.querySelector("h1").innerHTML = "🎖️ Player 1 Wins";
} else if(rn2 > rn1){
  document.querySelector("h1").innerHTML = "Player 2 Wins 🎖️";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
