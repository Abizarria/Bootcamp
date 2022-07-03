//---> Clone <-----
// function calculaSaldo(saldo, itens) {
// 	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

// 	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

// 	return `O saldo final será de ${saldoFinal} reais`;
// }

// lista = [
// 	{
// 		preco: 2,
// 		nome: 'maçã',
// 	},
// 	{
// 		preco: 30,
// 		nome: 'roupa',
// 	},
// 	{
// 		preco: 25,
// 		nome: 'carne',
// 	},
// ];

// saldo = 100;

// console.log(calculaSaldo(saldo, lista));
//---> Clone <-----

const lista = [
    {
    nome:   'óleo do motor',
    preco:  39.9,
    },
    {
    nome:   'filtro de óleo',
    preco:  29,
    },
    {
    nome:  'filtro de ar',
    preco:  42.5,
    }
]

const saldoIncial = 100;

function calcSaldo(saldoIncial, lista) {
    return lista.reduce(function(previous, current, index) {
        console.log("Ítem", index + 1);
        console.log({ previous });
        console.log({ current });
        return previous - current.preco;
    }, saldoIncial);
}

console.log(calcSaldo(saldoIncial, lista));