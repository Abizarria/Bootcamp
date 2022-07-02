"use strict";
function sumValues(numero1, numero2, callback) {
    let result = numero1 + numero2;
    return callback(result);
}
function potValues(numero) {
    return numero * numero;
}
function divValues(numero) {
    return numero / numero;
}
console.log(sumValues(7, 4, potValues));
console.log(sumValues(7, 4, divValues));
