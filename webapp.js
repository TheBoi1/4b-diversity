// JavaScript Document

// global variables
var score= 0; 
var grill = 0;
var chef = 0;

function cookie_clicker() {
	if( grill >= 0 ) {
		score+= 1+grill;
	} else {
		score++;
	}
	document.getElementById("score").value=score;

}

// for buying items
function shop(sel) {
	switch(sel) {
		case "grill":
			if( score >= 100 ) {
				score-=100;
				grill++;
			}
		case "chef":
	}
}

// dispense bonuses every second
setInterval(bonus, 1000);
function bonus() {
	score+=grill * 
}