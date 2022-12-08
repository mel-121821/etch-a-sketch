//let sketchDiv; 

const sketchPad = document.getElementById('sketchpad');

const gridSizeButton = document.getElementById('change-size');
const clearGridButton = document.getElementById('clear-grid');
let userField = document.getElementById('new-size');
const form = document.getElementById('form')

//const multiColorButton = document.getElementById('multiColor');
//const greyScaleButton = document.getElementById('greyScale');

const multiColorToggleSwitch = document.getElementById('multi-selector');
const greyScaleToggleSwitch = document.getElementById('greyscale-selector')

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

//multiColorButton.addEventListener('click', () => {
    //toggle(multiColorButton);
    //if (multiColorButton.value === "ON" && greyScaleButton.value === "ON") {, 
        //toggle(greyScaleButton);
    //}
//})

multiColorToggleSwitch.addEventListener('click', () => {
    if (multiColorToggleSwitch.checked === true && greyScaleToggleSwitch.checked === true) {
        toggle(greyScaleToggleSwitch);
    }
    console.log(multiColorToggleSwitch.checked)
    console.log(greyScaleToggleSwitch.checked)
})

//greyScaleButton.addEventListener('click', () => {
    //toggle(greScaleButton);
    //if (greyScaleButton.value === "ON" && multiColorButton.value === "ON") {
        //toggle(multiColorButton);
    //}
//})

greyScaleToggleSwitch.addEventListener('click', () => {
    if (greyScaleToggleSwitch.checked === true && multiColorToggleSwitch.checked === true) {
        toggle(multiColorToggleSwitch);
    }
    resetHslValue();   
})

clearGridButton.addEventListener('click', () => {
    deleteDivs();
    createDivs(16);
    resetHslValue();
})


function mouseOver() {
    cell.addEventListener('mouseenter', (event) => {
        if (multiColorToggleSwitch.checked === true && greyScaleToggleSwitch.checked === false) {
            event.target.style.backgroundColor = 'rgba(' + generateRandomColor() + ',' + generateRandomColor() + ',' + generateRandomColor() + '\)';
        } else if (greyScaleToggleSwitch.checked === true && multiColorToggleSwitch.checked === false) {
            event.target.style.backgroundColor = 'hsl(155, 100%, ' + increaseGreyScale() + '%\)'
        } else {
            event.target.style.backgroundColor = "grey";
        }
        
    })
}

function generateRandomColor() {
    return Math.floor(Math.random() * 255)
}

let hslValue = 100;

function increaseGreyScale() {
    if (hslValue > 0) {
        --hslValue;
    } else {
        hslValue = 0;
    }
    return hslValue;
}

function resetHslValue () {
    hslValue = 100;
    return hslValue;
}

function toggle(toggleSwitchName) {
    if (toggleSwitchName.checked === true) {
        toggleSwitchName.checked  = false;
        toggleSwitchName.style.borderColor = "red"
    } else if (toggleSwitchName.checked === false) {
        toggleSwitchName.checked = true
        toggleSwitchName.style.borderColor = "green"
    }
}

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
    resetHslValue();
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