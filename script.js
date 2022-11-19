let sketchDiv; 

function createDivs() {
    for(x = 0; x < 16; x++) {
        let sketchDiv = document.createElement('div');
        sketchDiv.className = "sketchDiv";
        document.getElementById('sketchpad').appendChild(sketchDiv);
        sketchDiv.style.border = "1px solid grey";
    }
}

createDivs();

//let sketchDiv1x1 = document.createElement('div');
//document.getElementById('sketchpad').appendChild(sketchDiv1x1)