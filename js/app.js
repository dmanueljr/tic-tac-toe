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

function trackBox(bx) {
	var topRow = []
	switch (bx) {
		case "n":
			topRow.push("nw");
			alert(topRow);
	}
}

window.addEventListener("load", getPlayerMode);

pacman = "url('images/box-pacman.png')";
ghost = "url('images/box-ghost-active.png')";
image = pacman;






















