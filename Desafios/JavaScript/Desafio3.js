// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
//let lines = gets().split("\n");

//let line = lines.shift().split(' ');
//let soma = 0

//TODO: Complete os espaços em branco com uma possível solução para o desafio

//for(i=0;i< ;i++){
//  let transfor = parseInt(line[   ])
//  soma = soma +
//}
//print(soma-3)

let lines = gets().split("\n");

let line = lines.shift().split(' ');
let soma = -3

for(i = 0; i < 4; i++){
  if (parseInt(line[i]) >= 2 && parseInt(line[i]) <= 6) {
    let transfor = parseInt(line[i]);
    soma = soma + transfor;
  }
}
print(soma);

// function numTomada(tomadas) {
//     let soma = -3

//     for (let i = 0; i < 4; i++) {
//         console.log(i, tomadas[i]);
//         if (tomadas[i] >= 2 && tomadas[i] <= 6) {
//             soma = soma + tomadas[i];
//         }
//     }
//     return soma;
//  }

//  console.log(numTomada([7, 5, 4, 3]));