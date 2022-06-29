//-----> Clone <-----
// function changeMode() {
// 	changeClasses();
// 	changeText();
// }

// function changeClasses() {
// 	button.classList.toggle(darkModeClass);
// 	h1.classList.toggle(darkModeClass);
// 	body.classList.toggle(darkModeClass);
//  	footer.classList.toggle(darkModeClass);
// }

// function changeText() {
//  	const lightMode = 'Light Mode';
//  	const darkMode = 'Dark Mode';

//  	if (body.classList.contains(darkModeClass)) {
//  		button.innerHTML = lightMode;
//  		h1.innerHTML = darkMode + ' ON';
//  		return;
// 	}

//  	button.innerHTML = darkMode;
//  	h1.innerHTML = lightMode + ' ON';
// }

// const darkModeClass = 'dark-mode';
// const button = document.getElementById('mode-selector');
// const h1 = document.getElementById('page-title');
// const body = document.getElementsByTagName('body')[0];
// const footer = document.getElementsByTagName('footer')[0];

// button.addEventListener('click', changeMode);
//-----> Clone <-----

function changeMode() {
	//console.log('Cliquei!'); --> Verifica se o botão foi clicado
 	changeClass();
 	changeText();
}
function changeClass() {
 	button.classList.toggle(darkClass);
 	h1.classList.toggle(darkClass);
 	body.classList.toggle(darkClass);
 	footer.classList.toggle(darkClass);
}
function changeText() {
 	const lightMode = 'Light Mode';
 	const darkMode = 'Dark Mode';

 	if (body.classList.contains(darkClass)) {
 		button.innerHTML = lightMode;
 		h1.innerHTML = darkMode + ' ON';
 		return;
	}
 	button.innerHTML = darkMode;
 	h1.innerHTML = lightMode + ' ON';
}
const darkClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

//console.log(button); -> Verifica se o botão foi selecionado
//console.log(body);
button.addEventListener('click', changeMode);
