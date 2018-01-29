// JavaScript Document

// global variables
var score= 0; 
var grill = 0;
var chef = 0;

window.onload = function() {
	// add event listeners
	document.getElementById("grillButton").addEventListener("click", function() {
		shop("grill");
	});
	document.getElementById("chefButton").addEventListener("click", function() {
		shop("chef");
	});
};

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
			break;
		case "chef":
			if(score >= 150) {
				score-=150;
				chef++;	
			}
			break;
	}
	document.getElementById("score").value=score; 
}

// dispense bonuses every second
setInterval(bonus, 1000);
function bonus() {
	score+=chef*1;
	document.getElementById("score").value=score; 
}