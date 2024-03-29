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
    
    // Allows for box to be colored when color is selected.
    let boxes = document.querySelectorAll('tr td');
    for(let x = 0; x < boxes.length; x++) {
        boxes[x].onclick = function() {
            boxes[x].style.backgroundColor = colorSelected;
        };
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

    // Allows for box to be colored when color is selected.
    let boxes = document.querySelectorAll('tr td');
    for(let x = 0; x < boxes.length; x++) {
        boxes[x].onclick = function() {
            boxes[x].style.backgroundColor = colorSelected;
        };
    };
}

// Remove a row
function removeR() {
    if(numRows == 0) {
        numCols = 0;
    } else{
        numRows--;
        let grid = document.querySelector("#grid");
        grid.removeChild(grid.lastElementChild);
        if(numRows == 0) {
            numCols = 0;
        };
    };
}

// Remove a column
function removeC() {
    if(numCols == 0) {
        numRows = 0;
    } else {
        numCols--;
        let grid = document.querySelector("#grid");
        if(numRows != 0) {
            // Deletes last element of every tr.
            for(let x = 0; x < numRows; x++) {
                grid.children[x].removeChild(grid.children[x].lastElementChild);
            };
            // Case if removeC clears the grid, empty tr's will be removed.
            if(numCols == 0) {
                for(let x = 0; x < numRows; x++) {
                    grid.removeChild(grid.lastElementChild);
                };
            };
        };
        if(numCols == 0) {
            numRows = 0;
        };
    };
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    colorSelected = document.getElementById("selectedColorId").value;
    let boxes = document.querySelectorAll('tr td');
    for(let x = 0; x < boxes.length; x++) {
        if(boxes[x].style.backgroundColor == "") {
            boxes[x].style.backgroundColor = colorSelected;
        };
    };
}

// Fill all cells
function fillAll(){
    colorSelected = document.getElementById("selectedColorId").value;
    let boxes = document.querySelectorAll('tr td');
    for(let x = 0; x < boxes.length; x++) {
        boxes[x].style.backgroundColor = colorSelected;
    };
}

// Clear all cells
function clearAll(){
    let boxes = document.querySelectorAll('tr td');
    for(let x = 0; x < boxes.length; x++) {
        boxes[x].style.backgroundColor = "";
    };
}