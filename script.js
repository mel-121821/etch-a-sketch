//let sketchDiv; 

const sketchPad = document.getElementById('sketchpad');
const gridSizeButton = document.getElementById('changeSize');
let userField = document.getElementById('newSize');
const form = document.getElementById('form')

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
        event.target.style.backgroundColor = 'rgba(' + generateRandomColor() + ',' + generateRandomColor() + ',' + generateRandomColor() + '\)';
        
    })
}

function generateRandomColor() {
    return Math.floor(Math.random() * 255)
}



//let randomColor = "";

//function generateRandomColor() {
    //let maxValue = 0xFFFFFF;
    //let randomNum = Math.random() * maxValue;
    //randomNum = Math.floor(randomNum);
    //randomNum = randomNum.toString(16);
    //let randomColor = randomNum.padStart(6, 0);
    //return randomColor
//}

//generateRandomColor();
//console.log(randomColor);



let userInput = "";

function getUserInput() {
    userInput = userField.value;
    if (userInput > 100) {
        alert("Please enter a valid number!")
        userInput = "16"
    } else {
    }
}

function changeGridSize() {
    deleteDivs();
    getUserInput();
    createDivs(userInput);
    clearInput();
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    changeGridSize();
});

function deleteDivs() {
    while (sketchPad.hasChildNodes()) {
        sketchPad.removeChild(sketchPad.firstChild);
    }
}

function clearInput() {
    if (userField.value !== "") {
        userField.value = "";
    }
}


//function changeGridSize() {
    //gridSizeButton.addEventListener('click', 
//}

//let sketchDiv1x1 = document.createElement('div');
//document.getElementById('sketchpad').appendChild(sketchDiv1x1)