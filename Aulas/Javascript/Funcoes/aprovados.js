// -----> Clone <-----
// const alunos = [
// 	{
// 		nome: 'João',
// 		nota: 5,
// 		turma: '1B',
// 	},
// 	{
// 		nome: 'Sofia',
// 		nota: 9,
// 		turma: '1B',
// 	},
// 	{
// 		nome: 'Paulo',
// 		nota: 6,
// 		turma: '2C',
// 	},
// ];

// function alunosAprovados(alunos, media) {
// 	let aprovados = [];

// 	for (let i = 0; i < alunos.length; i++) {
// 		let { nota, nome } = alunos[i];

// 		if (nota >= media) {
// 			aprovados.push(nome);
// 		}
// 	}

// 	return aprovados;
// }

// console.log(alunosAprovados(alunos, 5));
// -----> Clone <-----

const alunos = [
	{
		nome: 'Rita',
		nota: 8,
		turma: '1B',
	},

	{
		nome: 'Viviane',
		nota: 7.5,
		turma: '1A',
	},
	
	{
		nome: 'Cláudia',
		nota: 4.5,
		turma: '1A',
	},
	
	{
		nome: 'Giseli',
		nota: 6,
		turma: '1B',
	},
	
	{
		nome: 'Jorge',
		nota: 5.5,
		turma: '1A',
	},
	
	{
		nome: 'Victor',
		nota: 7,
		turma: '1B',
	},
]
	
function alunosOk(arr, media) {
	let aprovados = [];

	for(let i = 0; i < arr.length; i++) {
		
		//---> com destructution
		const {nota, nome} = arr[i];
		if(nota >= media) {
			aprovados.push(nome);

		//----> sem destructution
		// if(arr[i].nota >= media) {
		// 	aprovados.push(arr[i].nome);
		}
	}

	return aprovados;
}

console.log('Alunos aprovados:', alunosOk(alunos, 7));