//let count = 0;

//const CURRENT_NUMBER = document.getElementById('currentNumber');

//function increment() {
//	count++;
//	CURRENT_NUMBER.innerHTML = count;
//}

//function decrement() {
//	count--;
//	CURRENT_NUMBER.innerHTML = count;
//}

//function test() {
//	kdowkdpo;
//}

var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0

function increment() {
	if (currentNumber < 10) {
		currentNumber = currentNumber + 1
		currentNumberWrapper.innerHTML = currentNumber

		if (currentNumber > 0) {
			document.getElementById('currentNumber').style.color = 'blue'
		}
	}		
}

function decrement() {
	if (currentNumber > -10) {
		currentNumber = currentNumber - 1
		currentNumberWrapper.innerHTML = currentNumber
			
		if (currentNumber < 0) {
			document.getElementById('currentNumber').style.color = 'red'
		}
	} 
}
