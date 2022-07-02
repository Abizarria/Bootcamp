"use strict";
let anyValue0;
anyValue0 = 15;
anyValue0 = 'string';
anyValue0 = true; //  se somar boolean, true = 1 e false = 0
let strValue1 = 'palavra';
//strValue = 25       // não aceita
strValue1 = anyValue0;
console.log(`strValue = ${strValue1}, anyvalue = ${anyValue0}`);
let strValue2 = 'outra palavra';
strValue2 = anyValue0;
function somaString(texto1, texto2) {
    console.log(texto1 + texto2);
}
somaString(strValue1, strValue2);
