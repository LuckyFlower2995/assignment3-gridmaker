// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    if(numRows == 0 && numCols == 0) {
        numRows++;
        numCols++;
        let td = document.createElement('td');
        let tr = document.createElement('tr');
        tr.appendChild(td);
        document.querySelector("#grid").appendChild(tr);
    } else {
        numRows++;
        let tr = document.createElement('tr');
        let grid = document.querySelector("#grid");
        for(let x = 0; x < numCols; x++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        };
        grid.appendChild(tr);
    };
}

// Add a column
function addC() {
    if(numRows == 0 && numCols == 0) {
        numRows++;
        numCols++;
        let td = document.createElement('td');
        let tr = document.createElement('tr');
        tr.appendChild(td);
        document.querySelector("#grid").appendChild(tr);
    } else {
        numCols++;
        let grid = document.querySelector("#grid");
        for(let x = 0; x < numRows; x++) {
            let td = document.createElement('td');
            grid.children[x].append(td);
        };
    };
}

// Remove a row
function removeR() {
    if(numRows != 0) {
        numRows--;
        let grid = document.querySelector("#grid");
        grid.removeChild(grid.lastElementChild);
    };
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}