// Select color input
const colorInput = document.querySelector("#colorPicker");
let userColor = colorInput.value;

// Select size input
const userHeight = document.querySelector("#inputHeight");
const userWidth = document.querySelector("#inputWeight");

// Select design canvas table
const userCanvas = document.querySelector("#pixelCanvas");
	
// Select submit button
 const submitButton = document.querySelectorAll("input[type=submit]")[0];
 
/* -- When size is submitted by the user, call makeGrid() -- */
// Add Event Listener to submit button and call makeGrid 
submitButton.addEventListener('click', function(event){
	event.preventDefault();
	makeGrid();
});

function makeGrid() {
	// Read the user input values for height and size
	let rowsNr = userHeight.value;
	let columnsNr = userWidth.value;
	
	// Clear the Canvas
	//userCanvas.removeChild();
	while (userCanvas.firstChild) {
		userCanvas.removeChild(userCanvas.firstChild);
	}
	
	// Designing the Canvas
	for(var r = 0; r < rowsNr; r++){
		// Create rows
		//userCanvas.insertAdjacentHTML('beforeend', "<tr id='row" + r + "'></tr>");
		let thisRow = document.createElement("TR");
		thisRow.setAttribute("id", "row" + r)
		userCanvas.appendChild(thisRow);
		
		// Create columns (cells)
		for (var c = 0; c < columnsNr; c++){
			document.querySelector('#row' + r).insertAdjacentHTML('beforeend', "<td></td>");
		}
	}
	
	userCanvas.insertAdjacentHTML("beforebegin", "<p><strong>CLICK</strong> to color the cell   <br />   <strong>DOUBLE CLICK</strong> to remove cell color</p>")
	
}
	
// When user pick a color, save it to userColor variable
colorInput.addEventListener("input", function() {
  userColor = colorInput.value;
}, false);

// When user CLICK on a cell, change the background color with the one chose by the user (userColor)
userCanvas.addEventListener('click', function setCellColor(event) {
	event.target.setAttribute("bgcolor", userColor);
}, false);

// When user DOUBLE CLICK on a cell, clear the background color of the cell (set it to white)
userCanvas.addEventListener('dblclick', function clearCellColor(event) {
	event.target.setAttribute("bgcolor", "#fff");
}, false);