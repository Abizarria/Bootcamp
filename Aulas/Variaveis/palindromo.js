//-----> Clone <-----
// solução 1
// function verificaPalindromo(string) {
// 	if (!string) return;
// 	console.log(string === string.split('').reverse().join(''));
// }
// verificaPalindromo('cat');

// solução 2

// function varificaPalindromo2(string) {
// 	if (!string) return;
// 	if (!string.length) return;

// 	for (var i = 0; i < string.length / 2; i++) {
// 		if (string[i] !== string[string.length - 1 - i]) {
// 			return console.log(false);
// 		}
// 	}
// 	return console.log(true);
// }

// varificaPalindromo2('asa');
//-----> Clone <-----

//---> Solução 1
function testPalindromo(string) {
	if(!string) return ("String inexistente");

	return string.split("").reverse().join("") === string;
}
console.log(testPalindromo("abba"));

//----> Solução 2

function testPalindromo2(string) {
	if(!string) return ("String inexistente");

	for(let i=0; i < string.length / 2; i++) {
		if(string[i] !== string[string.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log(testPalindromo2("amor roma"));