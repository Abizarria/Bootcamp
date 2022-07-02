"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let v1 = 0;
let v2 = 0;
v1 = 10;
v2 = 15;
let firstName = "Matheus";
let age = 30;
const isAdmin = true;
firstName = "Adilson";
age = 54;
const myNumbers = [1, 2, 3];
console.log(typeof firstName, firstName);
console.log(myNumbers.length, myNumbers);
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [10, 'teste', ['a', 'b']];
const user = {
    name: 'Pedro',
    age: 18,
};
console.log(user, user.name);
let teste = 0;
teste = 'adilson';
teste = 0;
teste = [1, 2, 3];
teste = false;
console.log(teste.typeof);
let id = '10';
id = 200;
id = "coisa";
id = 15;
console.log(typeof id);
const myInf1 = true;
const myInf2 = 10;
const myInf3 = 'texo';
console.log(typeof myInf1, typeof myInf2, typeof myInf3);
var size;
(function (size) {
    size["P"] = "Pegueno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: 'Polo',
    size: size.P
};
console.log(camisa);
let teste1;
let teste2;
teste2 = 'qualquer';
console.log(teste2);
function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(12, 12));
function digaOla(name) {
    return `olá ${name}`;
}
console.log(digaOla("Adilson"));
function logger(msg) {
    console.log(msg);
}
logger('Teste!');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting('José');
greeting('Pedro', 'Sir');
function sumNumber(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumber({ n1: 1, n2: 2 }));
function multiplyNumber(nums) {
    return nums.n1 * nums.n2;
}
const someNumber = {
    n1: 5,
    n2: 7
};
console.log(multiplyNumber(someNumber));
function dosomething(info) {
    if (typeof info === 'number') {
        console.log(`O número é: ${info}`);
        return;
    }
    console.log('Não foi passado um número');
}
dosomething(5);
dosomething(true);
function showArrayItems(arr) {
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
class User {
    constructor(name, role, isApprovate) {
        this.name = name;
        this.role = role;
        this.isApprovate = isApprovate;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
    showUserRole(canShow) {
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
class car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new car('VW', 4);
fusca.showBrand();
class superCar extends car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new superCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function baseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    baseParameters()
], Person);
const sam = new Person('Sam');
console.log(sam);
