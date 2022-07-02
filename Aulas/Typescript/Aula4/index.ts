type input = number | string;

function sumValues(input1: input, input2: input) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    return input1 + input2;
}

console.log(sumValues(6, 9));
console.log(sumValues('bom ', 'dia'));
console.log(sumValues('Qual a sua idade: ', 21));