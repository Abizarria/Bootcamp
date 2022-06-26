//---> Clone <-----
// function filtraPares(arr) {
// 	if (!arr || !arr.length) return;

// 	const filteredArr = arr.filter((item) => item % 2 === 0);

// 	return filteredArr;
// }

// console.log(filtraPares([1, 2, 3, 4]));
//---> Clone <-----

function filterPairs(arr) {
    return arr.filter(callBack);
}

function callBack(item){
    return item % 2 === 0;
}

function filterOdds(arr) {
    return arr.filter(function(item) {
        return item % 2 !== 0;
    })
}

const colection = [1, 25, 3, 16, 48, 21, 7, 8];

console.log(filterPairs(colection));
console.log(filterOdds(colection));