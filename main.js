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

// Populate the dropdown element with data found in the planets array
planets.forEach(planet => {
    var node = document.createElement('option');
    node.textContent = planet[0];
    node.value = planet[0];
    document.getElementById('planets').appendChild(node);
});

// Function to caluculate the correct weight
function calculateWeight(weight, planetName) {
    return weight * planetMap.get(planetName);
}


function handleClickEvent(e) {
    // A variable called userWeight with the assigned the value of the user's weight.
    let userWeight = document.getElementById('user-weight').value;

   // A variable called planetName with the name of the selected planet from the drop down.
   let planetIndex = document.getElementById('planets').selectedIndex;
   let planetName = document.getElementsByTagName('option')[planetIndex].value;

   // A variable called result with the value of the new calculated weight.
   let result = calculateWeight(userWeight, planetName);

   // display the message
   document.getElementById('output').innerHTML = 'If you were on <span style="color:red">' + planetName + '</span>, you would weigh <span style="color:red"> ' + result + 'lbs</span>!';

}

// Set the #calculate-button element's onclick method to use the handleClickEvent function.
document.getElementById('calculate-button').onclick = handleClickEvent;