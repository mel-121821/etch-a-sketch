//let sketchDiv; 

const sketchPad = document.getElementById('sketchpad');
const gridSizeButton = document.getElementById('changeSize');
let cell = "";
let row = "";

function createDivs(num) {
    for(x = 0; x < num; x++) {
        row = document.createElement('div');
        row.className = "row";
        
        for(y = 1; y <= num; y++) {
            cell = document.createElement("div");
            cell.className = "cell";
            mouseOver();
            row.appendChild(cell);
        }
        sketchPad.appendChild(row); 
    }
}

createDivs(16);

function mouseOver() {
    cell.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = "grey";
    })
}

let userInput = "";

function getUserInput() {
    userInput = document.getElementById('newSize').value;
}

gridSizeButton.addEventListener('click', () => {
    deleteDivs();
    getUserInput();
    createDivs(userInput);
});

function deleteDivs() {
    while (sketchPad.hasChildNodes()) {
        sketchPad.removeChild(sketchPad.firstChild);
    }
}


//function changeGridSize() {
    //gridSizeButton.addEventListener('click', 
//}

//let sketchDiv1x1 = document.createElement('div');
//document.getElementById('sketchpad').appendChild(sketchDiv1x1)