"use strict";
// Como podemos melhorar o esse código usando TS? 
var profissao;
(function (profissao) {
    profissao[profissao["padeiro"] = 0] = "padeiro";
    profissao[profissao["atriz"] = 1] = "atriz";
})(profissao || (profissao = {}));
let pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: profissao.atriz
};
let pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: profissao.padeiro
};
let pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: profissao.atriz
};
let pessoa4 = {
    nome: 'carlos',
    idade: 19,
    profissao: profissao.padeiro
};
