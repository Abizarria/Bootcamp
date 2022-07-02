// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }
interface pessoa {
    nome: string,
    idade: number,
    profissao: profissao,
}
enum profissao {
    padeiro,
    atriz,
}
let pessoa1: pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: profissao.atriz
}
let pessoa2: pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: profissao.padeiro
}
let pessoa3: pessoa = {
    nome: 'laura',
    idade: 32,
    profissao: profissao.atriz
}
let pessoa4: pessoa = {
    nome: 'carlos',
    idade: 19,
    profissao: profissao.padeiro
}
