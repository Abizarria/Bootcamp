//---> Clone <-----
// const orange = {
// 	price: 2,
// };

// const apple = {
// 	price: 1.5,
// };

// function mapArray() {
// 	const array = [1, 2, 3, 4, 5];

// 	return array.map(function (item) {
// 		return item * this.price;
// 	}, apple);
// }

// console.log(mapArray());
//---> Clone <-----

const maca =  {
	value: 2.5,
}

const pera = {
	value: 3,
}

function mapComThis(arr, thisArg) {
	return arr.map(function(item) {
		return item * this.value;
	}, thisArg);
}

// console.log('this -> maça', mapComThis([1, 2, 5, 12], maca));
// console.log('this -> maça', mapComThis([1, 2, 5, 12], pera));

const numbers = [1, 2, 5, 12];

console.log('this -> maça', mapComThis(numbers, maca));
console.log('this -> pera', mapComThis(numbers, pera));