// JavaScript Document
var score= 0; 
function cookie_clicker() {
	score= score+ 1;
	document.getElementById("score").value=score;
}

function chef() {
	window.setInterval(score + 1, 1000);
	document.getElementById("score").value=score;	
}               

