// JavaScript Document

// global variables
var score= 0; 
var grill = 0;
var chef = 0;
var trap = 0;
var cat = 0;
var poison= 0;
var exterminator = 0;
var factory = 0;
var planet = 0;
var ratgod = 0;

window.onload = function() {
	// add event listeners
	document.getElementById("grillButton").addEventListener("click", function() {
		shop("grill");
	});
	document.getElementById("chefButton").addEventListener("click", function() {
		shop("chef");
	});
		document.getElementById("trapButton").addEventListener("click", function() {
		shop("trap");
	});
		document.getElementById("catsButton").addEventListener("click", function() {
		shop("cat");
	});
		document.getElementById("poisonButton").addEventListener("click", function() {
		shop("poison");
	});
	document.getElementById("catcherButton").addEventListener("click", function() {
		shop("catcher");
	});
	document.getElementById("factoryButton").addEventListener("click", function() {
		shop("factory");
	});
	document.getElementById("planetButton").addEventListener("click", function() {
		shop("planet");
	});
	document.getElementById("jesusButton").addEventListener("click", function() {
		shop("ratgod");
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
			else alert( "You don't have enough rats!")
			break;
		case "chef":
			if(score >= 150) {
				score-=150;
				chef++;	
			}
			else alert( "You don't have enough rats!")
			break;
		case "trap":
			if(score >= 250) {
				score-=250;
				trap++;
			}
			else alert( "You don't have enough rats!")
			break;
		case "cat":
			if(score >= 1000) {
				score-=1000;
				cat++;	
			}
			else alert( "You don't have enough rats!")
			break;
		case "poison":
			if(score >= 2500) {
				score-=2500;
				poison++;	
			}
			else alert( "You don't have enough rats!")
			break;
		case "catcher":
			if(score >= 5000) {
				score -= 5000;
				exterminator++;
			}
			else alert( "You don't have enough rats!")
			break;
		case "factory":
			if(score >= 50000) {
				score -= 50000;
				factory++;	
			}
			else alert( "You don't have enough rats!")
			break;
		case "planet":
			if(score >= 100000) {
				score -= 100000;
				planet++;	
				
			}
			else alert( "You don't have enough rats!")
			break;
		case "ratgod":
			if(score >= 50000000) {
			score -= 50000000;
			ratgod++;	
			}
			else alert( "You don't have enough rats!")
			break;
	}
	document.getElementById("score").value=score; 
}

// dispense bonuses every second
setInterval(bonus, 1000);
function bonus() {
	score+=chef*1;
	score+=trap*2.5;
	score+=cat*10;
	score+=poison*20;
	score+=exterminator*45;
	score+=factory*60;
	score+=planet*100;
	score+=ratgod*250;
	document.getElementById("score").value=score; 
}