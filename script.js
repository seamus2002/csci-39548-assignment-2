let colorSelected; 

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length);
    
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");

        col.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };

        row.appendChild(col);
        grid.appendChild(row);

    }
    else {
        let node = rows[0].cloneNode(true);
        grid.appendChild(node);
    }

}
//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let cols = document.getElementsByTagName("td");
    let rows = document.getElementsByTagName("tr");

    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");

        row.appendChild(col);
        grid.appendChild(row);

    }
    else {
        for (let i = 0; i < rows.length; i++) {
            let col = document.createElement("td");
            rows[i].appendChild(col);
        }
    }

    console.log(cols.length); 
}

//Removes a row
function removeR() {
    let grid = document.getElementById("grid");
    if (grid.rows.length > 0) {
        grid.deleteRow(grid.rows.length - 1);
    }
    else {
        alert("There is nothing to delete.")
    }
    //alert("Clicked Remove Row")
}

//Remove a column
function removeC() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    let numCols = rows[0].childElementCount;
    if (numCols > 1) {
        for (let i = 0; i < grid.rows.length; i++) {
            grid.rows[i].lastElementChild.remove();
        }
    }
    else if (numCols === 1) {
        const totalRows = grid.rows.length;
        for (let i = 0; i < totalRows; i++) {
            removeR();
        }
    }
    else {
        alert("There is nothing to delete.")
    }
    //alert("Clicked Remove Col")
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colorSelected;
    }
}

function clearAll(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
    }
}

function fillU(){
    let cells = document.getElementsByTagName("td");
    if (cells.length > 0) {
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].style.backgroundColor == "") {
                cells[i].style.backgroundColor = colorSelected;
            }
        }
    }
}