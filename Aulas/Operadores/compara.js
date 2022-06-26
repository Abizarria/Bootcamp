//-----> Clone <-----
// function comparaNumeros(num1, num2) {
// 	/* FAZER CHECAGEM DE NÚMEROS VÁLIODS */

// 	const primeiraFrase = criaPrimeiraFrase(num1, num2);
// 	const segundaFrase = criaSegundaFrase(num1, num2);

// 	return `${primeiraFrase} ${segundaFrase}`;
// }

// function criaPrimeiraFrase(num1, num2) {
// 	let primeiraFrase = `Os números ${num1} e ${num2}`;
// 	let simNao = 'não';

// 	if (num1 === num2) {
// 		simNao = '';
// 	}

// 	return `${primeiraFrase} ${simNao} são iguais.`;
// }

// function criaSegundaFrase(num1, num2) {
// 	const soma = num1 + num2;
// 	let comparaDez = 'menor';
// 	let comparaVinte = 'menor';

// 	if (soma > 10) {
// 		comparaDez = 'maior';
// 	}

// 	if (soma > 20) {
// 		comparaVinte = 'maior';
// 	}

// 	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
// }

// console.log(comparaNumeros(0, 8));
//-----> Clone <-----
function comparaNum(num1, num2) {
	if (!num1 || !num2) return `Defina dois números`
	const frase1 = criaFrase1(num1, num2);
	const frase2 = criaFrase2(num1, num2);

	return `${frase1}${frase2}`;
}

console.log(comparaNum(5, 18));

function criaFrase1(num1, num2) {
	const iguais = num1 === num2;

	//-----> if (comum)
	// let resposta = ''
	// if (!iguais) {
	// 	resposta = `não `;	
	// }
	// return `Os números ${num1} e ${num2} ${resposta}são iguais. `

	//----> if (ternário)
	return `Os números ${num1} e ${num2}` + (iguais ? "" : " não") + ` são iguais. `; 
}

function criaFrase2(num1, num2) {
	const soma = num1 + num2;

	let resp10 = 'maior'
	let resp20 = 'maior'

	if(soma <= 10) {
		resp10 = "menor";
		resp20 = "menor";
	}
	else {
		if (soma <=20) {
			resp20 = "menor";
		} 
	}

	return `Sua soma é ${soma} que é ${resp10} que 10 e ${resp20} que 20.`
}