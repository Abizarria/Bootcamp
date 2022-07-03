// -----> Clone <-----
// class ContaBancaria {
// 	constructor(agencia, numero, tipo) {
// 		this.agencia = agencia;
// 		this.numero = numero;
// 		this.tipo = tipo;
// 		this._saldo = 0;
// 	}

// 	sacar(valor) {
// 		if (valor > this._saldo) {
// 			return console.log('Saque negado; saldo insuficiente!');
// 		}

// 		this._saldo = this._saldo - valor;
// 		return this._saldo;
// 	}

// 	depositar(valor) {
// 		this._saldo = this._saldo + valor;
// 		return this._saldo;
// 	}

// 	set saldo(valor) {
// 		this._saldo = valor;
// 	}

// 	get saldo() {
// 		return this._saldo;
// 	}
// }

// class ContaCorrente extends ContaBancaria {
// 	constructor(agencia, numero, cartaoCredito) {
// 		super(agencia, numero);
// 		this.tipo = 'corrente';
// 		this._cartaoCredito = cartaoCredito;
// 	}

// 	set cartaoCredito(valor) {
// 		this._cartaoCredito = valor;
// 	}

// 	get cartaoCredito() {
// 		return this._cartaoCredito;
// 	}
// }

// class ContaPoupanca extends ContaBancaria {
// 	constructor(agencia, numero) {
// 		super(agencia, numero);
// 		this.tipo = 'poupança';
// 	}
// }

// class ContaUniversitaria extends ContaBancaria {
// 	constructor(agencia, numero) {
// 		super(agencia, numero);
// 		this.tipo = 'universitária';
// 	}

// 	sacar(valor) {
// 		if (valor > 500) {
// 			return 'Operação negada.';
// 		}

// 		this._saldo = this._saldo - valor;
// 		return this._saldo;
// 	}
// }

// const minhaConta = new ContaCorrente(1, 211, true);
// const contaUni = new ContaUniversitaria(2, 333);
// -----> Clone <-----

class ContaBancaria {
	constructor(agencia, numero, tipo, saldo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo
		this._saldo = 0;
	}
	get saldo() {
		return this._saldo;
	}
	set saldo(valor) {
		this._saldo = valor
	}
	sacar(valor) {
		if (valor > this._saldo) {
			return "Operação negada!";
		}
		this._saldo = this._saldo - valor;

		return this._saldo;
	}
	depositar(valor) {
		this._saldo = this._saldo + valor;

		return this._saldo;
	}
}
class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		
		this.tipo = 'corrente';
		this._cartaocredito = cartaoCredito;
	}
	get cartaocredito() {
		return this._cartaocredito;
	}
	set cartaocredito(valor) {
		this._cartaocredito = valor;
	}
}
class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupanca';
	}
}
class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitaria';
	}
	sacar(valor) {
		if (valor > 500) {
			return "Operação Negada!";
		}
		this.saldo = this.saldo - valor;

		return this.saldo
	}
}	