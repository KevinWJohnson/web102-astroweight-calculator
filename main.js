// Write your JavaScript code here!

var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

planets.reverse();

var planetMap = new Map(planets);

var planetSelection = document.getElementById('planets');

// Populate the dropdown element with data found in the planets array
planets.forEach(planet => {
    var node = document.createElement('option');
    node.textContent = planet[0];
    node.value = planet[0];
    planetSelection.appendChild(node);
});

// Create the Pluto Option
createPlutoOption();

// Function to caluculate the correct weight
function calculateWeight(weight, planetName) {
    return weight * planetMap.get(planetName);
}


function handleClickEvent(e) {
    // A variable called userWeight with the assigned the value of the user's weight.
    let userWeight = document.getElementById('user-weight').value;

   // A variable called planetName with the name of the selected planet from the drop down.
   let planetIndex = planetSelection.selectedIndex;
   let planetName = document.getElementsByTagName('option')[planetIndex].value;

   // A variable called result with the value of the new calculated weight.
   let result = calculateWeight(userWeight, planetName);

   // display the message
   document.getElementById('output').innerHTML = 'If you were on <span style="color:red">' + planetName + '</span>, you would weigh <span style="color:red"> ' + result + 'lbs</span>!';

}

// Set the #calculate-button element's onclick method to use the handleClickEvent function.
document.getElementById('calculate-button').onclick = handleClickEvent;

function createPlutoOption() {
    var plutoOption = document.getElementById('pluto-option');

    var plutoCheckbox = document.createElement('input');
    plutoCheckbox.type= 'checkbox';
    plutoCheckbox.id = 'pluto-checkbox';

    var plutoCheckboxLabel = document.createElement('label');
    plutoCheckboxLabel.innerHTML = 'Remove Pluto?';

    plutoOption.appendChild(plutoCheckbox);
    plutoOption.appendChild(plutoCheckboxLabel);
}

// Set the #pluto-checkbox element's onchange method to use the handleChangeEvent function.
var plutoCheckboxOption = document.getElementById('pluto-checkbox');
plutoCheckboxOption.onchange = handleChangeEvent;

function handleChangeEvent(e) {
    if(plutoCheckboxOption.checked === true) {
        removePluto();
    } else {
        addPluto();
    }
}

function removePluto() {
    var removePlanet = 'Pluto';
    
    for (var i = 0; i < planets.length; i++) {
        var name = planetSelection[i].innerHTML;
        if(name === removePlanet) {
            planetSelection.removeChild(planetSelection.childNodes[i]);

        }
    }
}

function addPluto() {
    var node = document.createElement('option');
    node.textContent = 'Pluto';
    node.value = 'Pluto';
    planetSelection.appendChild(node);
}
