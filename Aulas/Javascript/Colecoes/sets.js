// ----> Clone <-----
// function uniqueElements(array) {
// 	let unique = new Set(array);
// 	return [...unique];
// }

// const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

// console.log(uniqueElements(arr));
// ----> Clone <-----

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valUnics(arr) {
	const mySet = new Set(arr);

	return [...mySet];
}

console.log(valUnics(arr));