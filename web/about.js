console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Thanks for submitting!');
}

function imageCompliment(evt) {
	evt.preventDefault();
	alert(`You rock!`)
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img');
image.addEventListener('mouseover', imageCompliment);

function favColor(evt) {
	
	alert('My favorite color is Red')
}

let colorButton = document.querySelector('button#color');
colorButton.addEventListener('click', favColor);