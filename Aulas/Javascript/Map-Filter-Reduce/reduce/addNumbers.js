//---> Clone <-----
//function somaNumeros(arr) {
//	if (!arr || !arr.length) return;
//	const soma = arr.reduce((prev, curr) => prev + curr);

//	return soma;
//}

//console.log(somaNumeros([1, 1, 1, 3]));
//---> Clone <-----

function addNumbers(arr) {
	if (!arr || !arr.length) return;

	return arr.reduce(function (prev, current) {
		console.log({ prev });
		console.log({ current });

		return prev + current;
	}, 3);
}


//const arr = [1, 2, 5, 7];
//console.log(addNumbers(arr));

console.log(addNumbers([1, 2, 5, 7]));