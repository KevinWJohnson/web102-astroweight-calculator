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

// var planetMap = new Map(planets);

var planetSelection = document.getElementById('planets');


// Populate the dropdown element with data found in the planets array
function populateSelectPlanet() {
    planets.forEach(planet => {
        var node = document.createElement('option');
        node.textContent = planet[0];
        node.value = planet[0];
        planetSelection.appendChild(node);
    });
}

// Remove every item from the dropdown box
function removeItemsSelectPlanet() {
    while (planetSelection.firstChild) {
        planetSelection.removeChild(planetSelection.firstChild);
    }
}

// Call the function that populates the dropdown element with data found in the planets array
populateSelectPlanet();

// Create the Pluto Option
createPlutoOption();


// Function to caluculate the correct weight
function calculateWeight(weight, planetName) {
    var planetMap = new Map(planets);
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
        if(planetSelection.childNodes[i] === undefined) {
            break;
        }
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

function addPlanet() {
    var addPlanetName = document.getElementById('add-planet-name').value;
    addPlanetName = capitalizeFirstLetter(addPlanetName);
    var addPlanetMultiplier = document.getElementById('add-planet-multiplier').value;
    addPlanetMultiplier = parseFloat(addPlanetMultiplier);
    var newPlanet = [addPlanetName, addPlanetMultiplier];
    if(addPlanetName !='' && addPlanetMultiplier != '') {
        var newPlanet = [addPlanetName, addPlanetMultiplier];
        planets.push(newPlanet);
        removeItemsSelectPlanet();
        populateSelectPlanet();
    }

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}

// Set the #added-planet-button element's onclick method to use the addPlanet function.
document.getElementById('added-planet-button').onclick = addPlanet;