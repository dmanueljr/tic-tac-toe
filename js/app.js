function getPlayerMode() {
	document.getElementById('one-player').addEventListener("click", getPlayerName);
	document.getElementById('two-player').addEventListener("click", getBothNames);
}

function getPlayerName() {
	document.getElementById('mode').style.display = "none";
	document.getElementById('name').style.display = "block";
	document.getElementById('submit-name').addEventListener("click", submitName);
} 

function getBothNames() {
	document.getElementById('mode').style.display = "none";
	document.getElementById('name-one').style.display = "block";
	document.getElementById('submit-name-one').addEventListener("click", function() {
		var nameOne = document.getElementById('player-one').value || "player one";
		document.getElementById('p-one').innerHTML = nameOne;
		document.getElementById('name-one').style.display = "none";
		document.getElementById('name-two').style.display = "block";
		document.getElementById('submit-name-two').addEventListener("click", function() {
			var nameTwo = document.getElementById('player-two').value || "player two";
			document.getElementById('p-comp').innerHTML = nameTwo;
			document.getElementById('name-two').style.display = "none";
			document.getElementById('board').style.display = "block";
			gameOn();	
		}); 
	});
}

function submitName() {
    var pN = document.getElementById('player').value || "you";
    document.getElementById('p-one').innerHTML = pN;
    document.getElementById('name').style.display = "none";
    document.getElementById('p-comp').innerHTML = getCompName();
    document.getElementById('message').innerHTML = "Ready? First to 3 wins the game. Choose your move wisely!";
    document.getElementById('board').style.display = "block";
    gameOn();
}

function getCompName() {
    var compNames = ["The Hulk", "Spiderman", "Superman", "The Joker", "Thor", "Mario", "Luigi", "Bowser", "Creeper", "The Lorax", "Cinderella", "Maleficent", "Enderman", "Chika", "Freddy", "Bonnie", "Mangle", "Foxy", "Chuckie"];
        var pick = Math.floor(Math.random() * compNames.length);
        var namePicker = compNames[pick];
        return namePicker;
}

function gameOn() {
	boxes = document.getElementsByClassName('box');
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener("click", function() {
			if (this.style.backgroundImage == "") {
				this.style.backgroundImage = getImage(image);
			};
			// if (this.style.backgroundImage == "url(file:///Users/dmj/Workspace/tic-tac-toe/images/box-pacman.png)") {				
			// }
			trackBox(this.id);
		});
	}
}

function trackBox(bx) {
	switch (bx) {
		case "nw":
			if (document.getElementById(bx).style.backgroundImage == "url(file:///Users/dmj/Workspace/tic-tac-toe/images/box-pacman.png)") {
				if (pOneThirdRow.indexOf("nw") < 0) {
					pOneThirdRow.push(bx);
					pOneFirstCol.push(bx);
					pOneFirstDia.push(bx);	
				}
			} 	else {
					if (pTwoThirdRow.indexOf("nw") < 0) {
						pTwoThirdRow.push(bx);
						pTwoFirstCol.push(bx);
						pTwoFirstDia.push(bx);	
					}
				}
		break;
		case "n":
			if (document.getElementById(bx).style.backgroundImage == "url(file:///Users/dmj/Workspace/tic-tac-toe/images/box-pacman.png)") {
				if (pOneThirdRow.indexOf("n") < 0) {
					pOneThirdRow.push(bx);
					pOneSecondCol.push(bx);
				}
			} 	else {
					if (pTwoThirdRow.indexOf("n") < 0) {
						pTwoThirdRow.push(bx);
						pTwoSecondCol.push(bx);
					}
				}
		break;
		case "ne":
			if (document.getElementById(bx).style.backgroundImage == "url(file:///Users/dmj/Workspace/tic-tac-toe/images/box-pacman.png)") {
				if (pOneThirdRow.indexOf("ne") < 0) {
					pOneThirdRow.push(bx);
					pOneThirdCol.push(bx);
					pOneSecondDia.push(bx);
				} 
			}	else {
					if (pTwoThirdRow.indexOf("ne") < 0) {
						pTwoThirdRow.push(bx);
						pTwoThirdCol.push(bx);
						pTwoSecondDia.push(bx);
					}				
				}
		break;
		case "w":
			if (document.getElementById(bx).style.backgroundImage == "url(file:///Users/dmj/Workspace/tic-tac-toe/images/box-pacman.png)") {
				if (pOneSecondRow.indexOf("w") < 0) {
					pOneSecondRow.push(bx);
					pOneFirstCol.push(bx);
				} 
			}	else {
					if (pTwoSecondRow.indexOf("w") < 0) {				
						pTwoSecondRow.push(bx);
						pTwoFirstCol.push(bx);
					}
				}
		break;
		case "c":
			if (document.getElementById(bx).style.backgroundImage == "url(file:///Users/dmj/Workspace/tic-tac-toe/images/box-pacman.png)") {
				if (pOneSecondRow.indexOf("c") < 0) {
					pOneSecondRow.push(bx);
					pOneSecondCol.push(bx);
					pOneFirstDia.push(bx);
					pOneSecondDia.push(bx);
				}
			} 	else {
					if (pTwoSecondRow.indexOf("c") < 0) {
						pTwoSecondRow.push(bx);
						pTwoSecondCol.push(bx);
						pTwoFirstDia.push(bx);
						pTwoSecondDia.push(bx);					
					}
				}
		break;
		case "e":
			if (document.getElementById(bx).style.backgroundImage == "url(file:///Users/dmj/Workspace/tic-tac-toe/images/box-pacman.png)") {
				if (pOneSecondRow.indexOf("e") < 0) {
					pOneSecondRow.push(bx);
					pOneThirdCol.push(bx);
				}
			} 	else {
					if (pTwoSecondRow.indexOf("e") < 0) {
						pTwoSecondRow.push(bx);
						pTwoThirdCol.push(bx);					
					}
				}
		break;
		case "sw":
			if (document.getElementById(bx).style.backgroundImage == "url(file:///Users/dmj/Workspace/tic-tac-toe/images/box-pacman.png)") {
				if (pOneFirstRow.indexOf("sw") < 0) {
					pOneFirstRow.push(bx);
					pOneFirstCol.push(bx);
					pOneSecondDia.push(bx);
				}
			} 	else {
					if (pTwoFirstRow.indexOf("sw") < 0) {
						pTwoFirstRow.push(bx);
						pTwoFirstCol.push(bx);
						pTwoSecondDia.push(bx);
					}
				}
		break;
		case "s":
			if (document.getElementById(bx).style.backgroundImage == "url(file:///Users/dmj/Workspace/tic-tac-toe/images/box-pacman.png)") {
				if (pOneFirstRow.indexOf("s") < 0) {
					pOneFirstRow.push(bx);
					pOneSecondCol.push(bx);
				}
			}	else {
					if (pTwoFirstRow.indexOf("s") < 0) {
						pTwoFirstRow.push(bx);
						pTwoSecondCol.push(bx);
					}
				}
		break;
		case "se":
			if (document.getElementById(bx).style.backgroundImage == "url(file:///Users/dmj/Workspace/tic-tac-toe/images/box-pacman.png)") {
				if (pOneFirstRow.indexOf("se") < 0) {
					pOneFirstRow.push(bx);
					pOneThirdCol.push(bx);
					pOneFirstDia.push(bx);
				}
			} 	else {
					if (pTwoFirstRow.indexOf("se") < 0) {
						pTwoFirstRow.push(bx);
						pTwoThirdCol.push(bx);
						pTwoFirstDia.push(bx);
					}
				}
		break;
	}
	getWinner();
}


function getWinner() {
	if (pOneFirstRow.length == 3 || pOneSecondRow.length == 3 || pOneThirdRow.length == 3 || pOneFirstCol.length == 3 || pOneSecondCol.length == 3 || pOneThirdCol.length == 3 || pOneFirstDia.length == 3 || pOneSecondDia.length == 3) {
		console.log("player one wins");
	} else if (pTwoFirstRow.length == 3 || pTwoSecondRow.length == 3 || pTwoThirdRow.length == 3 || pTwoFirstCol.length == 3 || pTwoSecondCol.length == 3 || pTwoThirdCol.length == 3 || pTwoFirstDia.length == 3 || pTwoSecondDia.length == 3) {
		console.log("player two wins");
	} else {
		console.log("it's a tie!")
	}
}

function getImage(img) {
	var background;
	switch (img) {
		case pacman:
			background = pacman;
			image = ghost;
		break;
		case ghost:
			background = ghost;
			image = pacman;
		break;
	}
	return background;
}




window.addEventListener("load", getPlayerMode);

pacman = "url('images/box-pacman.png')";
ghost = "url('images/box-ghost-active.png')";
image = pacman;
pOneFirstRow = [];
pOneSecondRow = [];
pOneThirdRow = [];
pOneFirstCol = [];
pOneSecondCol = [];
pOneThirdCol = [];
pOneFirstDia = [];
pOneSecondDia = [];
pTwoFirstRow = [];
pTwoSecondRow = [];
pTwoThirdRow = [];
pTwoFirstCol = [];
pTwoSecondCol = [];
pTwoThirdCol = [];
pTwoFirstDia = [];
pTwoSecondDia = [];






















