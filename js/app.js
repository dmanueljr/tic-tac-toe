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
			trackBox(this.id);
		});
	}
}

function trackBox(bx) {
	switch (bx) {
		case "nw":
			if (thirdRow.indexOf("nw") < 0) {
				thirdRow.push(bx);
				firstCol.push(bx);
				firstDia.push(bx);				
			}
		break;
		case "n":
			if (thirdRow.indexOf("n") < 0) {
				thirdRow.push(bx);
				secondCol.push(bx);
			}
		break;
		case "ne":
			if (thirdRow.indexOf("ne") < 0) {
				thirdRow.push(bx);
				thirdCol.push(bx);
				secondDia.push(bx);				
			}
		break;
		case "w":
			if (secondRow.indexOf("w") < 0) {
				secondRow.push(bx);
				firstCol.push(bx);
			}
		break;
		case "c":
			if (secondRow.indexOf("c") < 0) {
				secondRow.push(bx);
				secondCol.push(bx);
				firstDia.push(bx);
				secondDia.push(bx);
			}
		break;
		case "e":
			if (secondRow.indexOf("e") < 0) {
				secondRow.push(bx);
				thirdCol.push(bx);
			}
		break;
		case "sw":
			if (firstRow.indexOf("sw") < 0) {
				firstRow.push(bx);
				firstCol.push(bx);
				secondDia.push(bx);
			}
		break;
		case "s":
			if (firstRow.indexOf("s") < 0) {
				firstRow.push(bx);
				secondCol.push(bx);
			}
		break;
		case "se":
			if (firstRow.indexOf("se") < 0) {
				firstRow.push(bx);
				thirdCol.push(bx);
				firstDia.push(bx);
			}
		break;
	}
	getWinner();
}


function getWinner() {
	if (firstRow.length == 3) {
		console.log("three!!");
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
firstRow = [];
secondRow = [];
thirdRow = [];
firstCol = [];
secondCol = [];
thirdCol = [];
firstDia = [];
secondDia = [];






















