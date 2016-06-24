class ListaNegociacoes {

	constructor(armadilha) {
		
		this._negociacoes = []
	}

	adiciona(negociacao) {

		this._negociacoes.push(negociacao);
	}

	get negociacoes() {

		// Create a copy of the internal list (defensive programming)
		return [].concat(this._negociacoes);
	}

	esvazia() {

		this._negociacoes = [];
	}
}