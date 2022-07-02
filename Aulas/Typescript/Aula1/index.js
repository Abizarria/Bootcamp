"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function addNumbers(numero1, numero2, opcPrinter, frase) {
    let resultado = numero1 + numero2;
    if (opcPrinter) {
        return (frase + resultado);
    }
    return 'O resultado é secreto!';
}
let opcPrinter = true;
let frase = 'A soma dos números é: ';
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(addNumbers(Number(input1.value), Number(input2.value), opcPrinter, frase));
        }
    });
}
