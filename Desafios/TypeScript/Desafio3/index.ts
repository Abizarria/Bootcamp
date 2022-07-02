// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

let saldo: number;

if (campoSaldo && soma) {
    iniciaCampos();
}
function iniciaCampos (): void {
    soma.value = '';
    campoSaldo.innerHTML = '0';
    saldo = 0;
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
    iniciaCampos();    
    })  
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        let valor = Number(soma.value);

        if (valor = Number(soma.value)) {
            somarAoSaldo(Number(soma.value))
        } else {
            soma.value = "";
        }
    })
}
function somarAoSaldo(valor: number): void {
    saldo += valor;
    campoSaldo.innerText = saldo.toString();
    soma.value = '';
}

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */