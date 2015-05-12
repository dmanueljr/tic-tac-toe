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
			trackBox(this.id);
			if (this.style.backgroundImage == "") {
				this.style.backgroundImage = getImage(image);
			};
		});
	}
}

function trackBox(bx) {
	switch (bx) {
		case "nw":
			thirdRow.push(bx);
			firstCol.push(bx);
			firstDia.push(bx);
		break;
		case "n":
			thirdRow.push(bx);
			secondCol.push(bx);
		break;
		case "ne":
			thirdRow.push(bx);
			thirdCol.push(bx);
			secondDia.push(bx);
		break;
		case "w":
			secondRow.push(bx);
			firstCol.push(bx);
		break;
		case "c":
			secondRow.push(bx);
			secondCol.push(bx);
			firstDia.push(bx);
			secondDia.push(bx);
		break;
		case "e":
			secondRow.push(bx);
			thirdCol.push(bx);
		break;
		case "sw":
			firstRow.push(bx);
			firstCol.push(bx);
			secondDia.push(bx);
		break;
		case "s":
			firstRow.push(bx);
			secondCol.push(bx);
		break;
		case "se":
			firstRow.push(bx);
			thirdCol.push(bx);
			firstDia.push(bx);
		break;
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






















