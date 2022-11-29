//let sketchDiv; 

const sketchPad = document.getElementById('sketchpad');
let cell = ""

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

createDivs(4);

function mouseOver() {
    cell.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = "black";
    })
}

//let sketchDiv1x1 = document.createElement('div');
//document.getElementById('sketchpad').appendChild(sketchDiv1x1)