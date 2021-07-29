var randomNo1 = Math.floor(Math.random()*6)+1;
var randomNo2 = Math.floor(Math.random()*6)+1;
var imagedice1 = "images/dice"+randomNo1+".png";
var imagedice2 = "images/dice"+randomNo2+".png";

if (randomNo1 === randomNo2) {
    document.querySelector("h1").innerHTML = "It's a Tie";
    document.querySelector("h2").innerHTML = "Let's play again";

    document.querySelector(".D .i7").setAttribute("src", imagedice1);
    document.querySelector(".D .i8").setAttribute("src", imagedice2);

}
else if(randomNo1 > randomNo2) {
    document.querySelector("h1").innerHTML = "✌ Player 1 is Winner";
    document.querySelector("h2").innerHTML = "Congratulations!";
    document.querySelector(".D .i7").setAttribute("src", imagedice1);
    document.querySelector(".D .i8").setAttribute("src", imagedice2);
}
else {
    document.querySelector("h1").innerHTML = "✌ Player 2 is Winner";
    document.querySelector("h2").innerHTML = "Congratulations!";
    document.querySelector(".D .i7").setAttribute("src", imagedice1);
    document.querySelector(".D .i8").setAttribute("src", imagedice2);

}