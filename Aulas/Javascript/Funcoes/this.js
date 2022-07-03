//-----> Clone <-----
// function calculaIdade(anos) {
// 	return `Daqui a ${anos} anos, ${this.nome} terá ${
// 		this.idade + anos
// 	} anos de idade.`;
// }

// const pessoa1 = {
// 	nome: 'Amelia',
// 	idade: 23,
// };

// const pessoa2 = {
// 	nome: 'Márcia',
// 	idade: 20,
// };

// const pessoa3 = {
// 	nome: 'Jonas',
// 	idade: 13,
// };

// console.log(calculaIdade.call(pessoa3, 40));
// console.log(calculaIdade.apply(pessoa2, [24]));
//-----> Clone <-----

function qualIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
	nome: "Katya",
	idade: 35,
}
const coisa = {
	nome: "Carro",
	idade: 11,
	marca: "BMW",
}
const animal = {
	nome: "King",
	idade: 8,
	Tipo: "Cachorro",
}
const pessoa2 = {
	nome: "Pedro",
	idade: 12,
}

console.log(qualIdade.call(coisa, 12));
