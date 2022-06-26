//---> Clone <-----
// const array = [1, 2, 3, 4, 5];

// console.log(array.map((item) => item * 2));

// console.log(array);
//---> Clone <-----

function mapSemThis (arr) {
    return arr.map(function(item) {
        return item * 2
    });
}

const numbers = [2, 5, 3, 7, 9];

console.log(numbers);
console.log(mapSemThis(numbers));