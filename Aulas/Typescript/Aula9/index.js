"use strict";
function setError(erro, codigo) {
    throw { error: erro, code: codigo }; // 'trow' - interrompe a função
}
setError('Foi encontrado o erro: ', 500);
