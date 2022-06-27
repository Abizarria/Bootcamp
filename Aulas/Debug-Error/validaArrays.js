//-----> Clone <-----
// function validaArrays(arr, num) {
// 	try {
// 		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

// 		if (typeof arr !== 'object')
// 			throw new TypeError('Envie um elemento do tipo Array!');

// 		if (typeof num !== 'number')
// 			throw new TypeError('Envie um elemento do tipo Number!');

// 		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

// 		return arr;
// 	} catch (e) {
// 		if (e instanceof RangeError) {
// 			console.log('RangeError!');
// 			console.log(e.stack);
// 		} else if (e instanceof ReferenceError) {
// 			console.log('ReferenceError!');
// 			console.log(e.stack);
// 		} else {
// 			console.log('Outro tipo de erro!');
// 			console.log(e.stack);
// 		}
// 	}
// }

// console.log(validaArrays([1, 2, 3], 0));
//-----> Clone <-----

function validaArray(arr, num) {
	try {
		if(!arr || !num) {
			throw new ReferenceError('envie os parâmetros');
		}		

		if(typeof arr !== 'object') {
			throw new TypeError('envie um elemento do tipo Array');
		}

		if(typeof num !== 'number') {
			throw new TypeError('envie um elemento do tipo Number');
		}

		if(arr.length !== num) {
			throw new RangeError('tamanho do Array inválido');
		}

		return arr;
	}

	catch (e) {
		let erro = '';

		if (e instanceof ReferenceError) {
			erro = 'RefereceError!';
		} else if (e instanceof TypeError) {
			erro = 'TypeError!';
		} else if (e instanceof RangeError) {
			erro = 'RangeError!';
		} else {
			erro = 'diferente!'
		}
		
		console.log(`Este é um erro ${erro}, ${e.message}!`);
		// throw e;
		// console.log(e.name);
		// console.log(e.stack);
	}
}	

console.log(validaArray([1, 2, 3, 4, 5], 5));