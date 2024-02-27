let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	boardPieces = document.querySelector('.puzzle-pieces'),
	resetButton = document.getElementById('resetBut'),
	draggedPiece;

function changeBGImage() {
	dropZones.forEach(zone => {
	zone.innerHTML = '';});

	boardPieces.innerHTML = '';
	puzzlePieces.forEach(piece => {
		boardPieces.appendChild(piece);
	})

	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
	// Bug Fix #2 Implemented
}

function handleStartDrag() { 
	console.log('started dragging this piece:', this);
	draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault();
	console.log('dragged over me'); 
}

function handleDrop(e) { 
	e.preventDefault();
	console.log('dropped something on me');
	if (!this.hasChildNodes()) {
		this.appendChild(draggedPiece);
	} else {
		console.log('Slot Occupied');
	}
	// Bug Fix #1 Implemented
	
	// Added "if (!this.hasChildNodes())"
	// This is to check if the drop zone has an element within it or child
	// And to prevent other pieces from being placed when it is occupied.
	// Also added code that says Slot Occupied in the console log for info.

	// More Information in the Reference Document located in the assets folder.
}

function fullReset() {
	window.location = window.location.href;
	// Continuation of Bug Fix #2. This function was created to just reset the entire
	// page and not need additional attachment to the initial function. This enables
	// the reset button feature for the puzzle game.

	// More Information in the Reference Document located in the assets folder.
}

theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
resetButton.onclick = fullReset;

// There are several ways to reset the puzzle board with Event Listeners
// However, we can just add to a function and implement them with the already
// present code that targets the same elements. Alternatively, the onclick direction
// is just to make the resetButton functional as it requires to be called.