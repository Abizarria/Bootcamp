"use strict";
//  >>>> forma não recomenda
const person = {
    name: 'Renata',
    age: 38,
    profession: 'Juíza'
};
person.age = 42;
const julio = {
    name: 'Julio',
    age: 49,
    profession: 'Parasita'
};
const rita = {
    name: 'Rita',
    age: 51,
    profession: 'Professora'
};
//  >>>> forma não recomenda
var profession;
(function (profession) {
    profession[profession["professor"] = 0] = "professor";
    profession[profession["ju\u00EDz"] = 1] = "ju\u00EDz";
    profession[profession["atleta"] = 2] = "atleta";
    profession[profession["militar"] = 3] = "militar";
    profession[profession["estudante"] = 4] = "estudante";
})(profession || (profession = {}));
const vanessa = {
    name: 'Vanessa',
    age: 42,
    profession: profession.professor,
    hobby: 'ler'
};
const claudia = {
    name: 'Cláudia',
    age: 55,
    profession: profession.militar,
    hobby: 'cozinhar'
};
const pedro = {
    name: 'Pedro',
    age: 12,
    profession: profession.estudante,
    classes: ['Matemática', 'Inglês', 'Literatura', 'História']
};
const monica = {
    name: 'Mônica',
    age: 29,
    profession: profession.estudante,
    classes: ['Arquitetura', 'Decoração', 'Cálculos'],
    hobby: 'viajar'
};
function list(list) {
    for (const item of list) {
        console.log('- ', item);
    }
}
list(pedro.classes);
