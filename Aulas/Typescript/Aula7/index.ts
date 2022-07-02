function sumValues(numero1: number, numero2: number, callback: (numero: number) => number): number {
    let result = numero1 + numero2;
    return callback(result);
}

function potValues(numero: number): number {
    return numero * numero;
}
function divValues(numero: number): number {
    return numero / numero;
}

console.log(sumValues(7, 4, potValues))
console.log(sumValues(7, 4, divValues))