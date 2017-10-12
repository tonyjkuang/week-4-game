var wins = 0;
var losses = 0;
var targetNumber;
var counter;

// button data
var increment1;
var number1;

var increment2;
var number2;

var increment3;
var number3;

var increment4;
var number4;

_gameSetup()

function _gameSetup() {
	targetNumber = Math.floor((Math.random() * 50) + 50);
	$(".randomNumber").text(targetNumber);
	counter = 0;
	$(".userScore").text(counter);
	number1 = 0;
	number2 = 0;
	number3 = 0;
	number4 = 0;
	increment1 = _getRandomNumber();
	increment2 = _getRandomNumber();
	increment3 = _getRandomNumber();
	increment4 = _getRandomNumber();
}

function _getRandomNumber() {
	return Math.floor((Math.random() * 10) + 1);
}

$(".jayhawk1").on("click", function() {
	number1 += increment1;
	counter = number1 + number2 + number3 + number4;
	checkForGameOver();
});

$(".jayhawk2").on("click", function() {
	number2 += increment2;
	counter = number1 + number2 + number3 + number4;
	checkForGameOver();
});

$(".jayhawk3").on("click", function() {
	number3 += increment3;
	counter = number1 + number2 + number3 + number4;
	checkForGameOver();
});

$(".jayhawk4").on("click", function() {
	number4 += increment4;
	counter = number1 + number2 + number3 + number4;
	checkForGameOver();
});

function checkForGameOver() {
	$(".userScore").text(counter);
	var msg;
	if ( counter > targetNumber ) {
		losses++;
		$('.losses').text("Losses: " + losses);
		msg = "You lost!";
		reset(msg);
	}
	else if ( counter === targetNumber ) {
		wins++;
		$('.wins').text("Wins: " + wins);
		msg = "You won!";
		reset(msg);	
	}
}

var reset = function(msg) {
	alert(msg);
	$(".userScore").text(counter);
	_gameSetup();
}