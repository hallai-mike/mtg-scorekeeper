var MAX_PLAYERS = 4;

var scores = [];
var numPlayers = 2;
var resetScore = 20;

window.onload = function WindowLoad(event) {
	reset();
}

$(document).ready(function() {
	$(".glyphicon-minus").click(function(event) {
		var player = $(event.target).parent().parent().parent().attr('id').split("-")[1];
		minus(player);
	});
	$(".glyphicon-plus").click(function(event) {
		var player = $(event.target).parent().parent().parent().attr('id').split("-")[1];
		plus(player);
	});
});

function reset() {
	$("#reset-live-amount-btn span").html(resetScore);
	setNumPlayers();
	resetScores();
	showScores();
}

function setNumPlayers() {
	if(numPlayers == 4) {
		$("#player-0").css("transform", "rotate(90deg)");
		$("#player-2").css("transform", "rotate(90deg)");
		$("#player-1").css("transform", "rotate(270deg)");
		$("#player-3").css("transform", "rotate(270deg)");
	} else {
		hideInactivePlayers();
	}
}

function resetScores() {
	scores = [];
	for(var i=0; i<numPlayers; i++) {
		scores.push(resetScore);
	}
}

function hideInactivePlayers() {
	for(var i=numPlayers; i<MAX_PLAYERS; i++) {
		$("#player-" + i).css("display", "none");
	}
}

function showScores() {
	for(var i=0; i<numPlayers; i++) {
		$("#player-"+i+" .score").html(scores[i]);
	}
}

function plus(player) {
	scores[player]++;
	showScores();
}

function minus(player) {
	scores[player]--;
	showScores();
}





















