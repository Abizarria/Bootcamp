function setError(erro: string, codigo: number): never {    
    throw {error: erro, code: codigo};  // 'trow' - interrompe a função
}

setError('Foi encontrado o erro: ', 500);

