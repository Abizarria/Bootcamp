//  let lines = gets().split('\n');
//  var N = parseInt(lines.shift());

//  for (let i = 1; i <= N; i++) {

//  	if (i % 2 ===  0 ) 
//            print(`${i}^2 = ${i * i}`);
//  }

 function numTomada(tomadas) {
    let soma = -3

    for (let i = 0; i < 4; i++) {
        console.log(i, tomadas[i]);
        if (tomadas[i] >= 2 && tomadas[i] <= 6) {
            soma = soma + tomadas[i];
        }
    }
    return soma;
 }

 console.log(numTomada([7, 5, 4, 3]));