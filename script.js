//let sketchDiv; 

const sketchPad = document.getElementById('sketchpad');

function createDivs(num) {
    for(x = 0; x < num; x++) {
        row = document.createElement('div');
        row.className = "row";
        
        for(y = 1; y <= num; y++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }
        sketchPad.appendChild(row); 
    }
}

createDivs(4);

//let sketchDiv1x1 = document.createElement('div');
//document.getElementById('sketchpad').appendChild(sketchDiv1x1)