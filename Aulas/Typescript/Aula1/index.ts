let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function addNumbers(numero1: number, numero2: number, opcPrinter: boolean, frase: string) {
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
    })
}
