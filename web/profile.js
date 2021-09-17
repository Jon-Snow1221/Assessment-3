function favColor(evt) {
	alert('My favorite color is Red 🔴');
}

let colorButton = document.querySelector('button#color');
colorButton.addEventListener('click', favColor);

function favPlace(evt) {
	alert('My favorite place is Tokyo 🇯🇵');
}

let placeButton = document.querySelector('button#place');
placeButton.addEventListener('click', favPlace);

function favRitual(evt) {
	alert('My favorite ritual is going to the gym each morning 💪🏼');
}

let ritualButton = document.querySelector('button#ritual');
ritualButton.addEventListener('click', favRitual);