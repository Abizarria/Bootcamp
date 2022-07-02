let v1 = 0 // Inference
let v2: number = 0; // Anotation

v1 = 10;    // v1 = '1'; > Exibe erro
v2 = 15;    // v2 = '1'; > Exibe erro

// Tipos básicos

let firstName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;

// string = != string

firstName = "Adilson";  // firstName = 1 > Exibe erro
age = 54;               // age = '54' > Exibe erro

// Object

const myNumbers: number[] = [1, 2, 3];  // Os [] definem que é array

console.log(typeof firstName, firstName);
console.log(myNumbers.length, myNumbers);

myNumbers.push(5);
console.log(myNumbers);

// Tuplas -> tuple

let myTuple: [number, string, string[]];

myTuple = [10, 'teste', ['a', 'b']]; // Só serão aceitos valores correspondes ao tipo

// object literals -> {prop: value}

const user: {name: string; age: number} = {
    name: 'Pedro',
    age: 18,
};
console.log(user, user.name);

// any - Aceita qualquer tipo de valor

let teste: any = 0;

teste = 'adilson';
teste = 0;
teste = [1, 2, 3];
teste = false;

console.log(teste.typeof)   // Exibe undefined

// union type - especifica quais os tipos permitidos em uma variável

let id: string | number = '10';

id = 200;
id = "coisa";
id = 15;
// id = false   -> Exibe erro não foi definido boolean

console.log(typeof id); // Alterna conforme o valor

// type alias - Cria um apelido para union type

type varType = number | boolean | string;

const myInf1: varType = true;
const myInf2: varType = 10;
const myInf3: varType = 'texo';


console.log(typeof myInf1, typeof myInf2, typeof myInf3);

// enum - Cria lista de opções
// tamanho de roupas (size: 'médio', size: 'pequeno')

enum size {
    P = 'Pegueno',
    M = 'Médio',
    G = 'Grande'
}

const camisa = {
    name: 'Polo',
    size: size.P
}
console.log(camisa);

// sem literal types

let teste1: 'qualquer';
//teste1 = 'outro';   //-> Exibe erro
//teste1 = "palavra"; //-> Exibe erro

// com literal types

let teste2: 'qualquer' | 'teste';
// teste2 = 'outro';   //-> Exibe erro
teste2 = 'qualquer';

console.log(teste2);

//  Funções - Tipando argumentos

function soma(num1: number, num2: number) {
    return num1 + num2;
}
console.log(soma(12, 12));
// console.log(soma('a', 'b')); //-> Só aceitará numeros

//  Funções - Tipando return

function digaOla(name: string): string {
//    return true   //-> só aceitará string como retorno
    return `olá ${name}`;
}
console.log(digaOla("Adilson"));

// funções sem return

function logger(msg: string): void {    
    console.log(msg);
//    return 'ok';      // não aceitará return, devido ao void
}
logger('Teste!');

// funções com argumentos opcionais

function greeting(name: string, greet?: string): void {   //greet? -> argumento opcional
//    console.log(`Olá ${greet} ${name}`);    //-> no lugar do greet sairia undefined

    if (greet) {                                //
        console.log(`Olá ${greet} ${name}`);    // Seria necessário para contornar o problema acima
        return;                                 //
    }                                           //
    console.log(`Olá ${name}`);                 //
}
greeting('José');
greeting('Pedro', 'Sir');


//  Interfaces

interface mathfunctionParams {
    n1: number;
    n2: number;
}

function sumNumber(nums: mathfunctionParams) {
    return nums.n1 + nums.n2;
}
console.log(sumNumber({ n1: 1, n2: 2 }));

function multiplyNumber(nums: mathfunctionParams) {
    return nums.n1 * nums.n2;
}

const someNumber: mathfunctionParams = {
    n1: 5,
    n2: 7
}

console.log(multiplyNumber(someNumber));

// narrowing - checagem de tipos

function dosomething(info: number | boolean) {
    if (typeof info === 'number') {
        console.log(`O número é: ${info}`);
        return;
    }
    console.log('Não foi passado um número');
}

dosomething(5);
dosomething(true);

//  Generics

function showArrayItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Item: ${arr}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['A', 'B', 'C', 'D'];
const a3 = [1];
showArrayItems(a1);
showArrayItems(a2);
showArrayItems(a3);

// Classes

class User {
    name;
    role;
    isApprovate;

    constructor(name: string, role: string, isApprovate: boolean) {
        this.name = name;
        this.role = role;
        this.isApprovate = isApprovate;
    }

    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }

    showUserRole(canShow: boolean) {
        if (canShow) {
            console.log(`O cargo do usuário é: ${this.role}`);
            return;
        }
        console.log('Informação restrita!');
    }
}
const joao = new User('João', 'Gerente', true);

console.log(joao);
joao.showUserName();
joao.showUserRole(true);

// Interfaces em Classes

interface Ivehicle {    //  preferencialmente iniciar o nome da interface com I maiúsculo
    brand: string
    showBrand(): void
}

class car implements Ivehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}

const fusca = new car('VW', 4);
fusca.showBrand();

//  Herança

class superCar extends car {
    engine;

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new superCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();

//  Decorators  > Necessita desbloquear (experimentalDecorators) no tsconfig.js
//  Construction Decorator
function baseParameters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {    // Pode aceitar várias classes
        return class extends constructor {
            id = Math.random()
            createdAt = new Date();
        }
    }
}

@baseParameters()

class Person {
    name

    constructor(name: string) {
     this.name = name;
    }
}

const sam = new Person('Sam');
console.log(sam);

