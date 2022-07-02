// any x unknown

let anyValue: any;

anyValue = 3;
anyValue = 'string';
anyValue = 7;

let strTest: string = 'verificar';
strTest = anyValue;     //  a variável pode ser alterada para any


let unKnownValue: unknown;

unKnownValue = 3;
unKnownValue = 'string';
unKnownValue = true;
unKnownValue = 'teste';

// strTest = unKnownValue; // a variável não pode ser alterada para unknown

if (typeof unKnownValue === 'string') {
    strTest = unKnownValue;     // após ser verificada, permite a alteração
}


