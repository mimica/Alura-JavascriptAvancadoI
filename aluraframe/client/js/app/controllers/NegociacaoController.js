class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}


	adiciona(event) {

		event.preventDefault();

		// 1st option
		//let data = new Date( this._inputData.value.replace(/-/g, ',') );
		//console.log(data);

		// 2nd option
		//let data = new Date(this._inputData.value.split('-'));
		//console.log(data);

		// 3th option
		//let data = new Date(this._inputData.value.split('-'));
		//console.log(data);

		/*
		// 4th option
		let data = new Date(
			this._inputData.value
				.split('-')
				.map((item, indice) => {		// => arrow function
					if (indice == 1)
						return item - 1;
					else
						return item;
				})
		);
		console.log(data);
		*/

		// 5th option : in-line arrow function
		let data = new Date(
			...this._inputData.value   // ... spread operator
				.split('-')
				.map((item, indice) => item - (indice % 2) ));   // => arrow function
		console.log(data);

		let negociacao = new Negociacao(
			data,
			this._inputQuantidade.value,
			this._inputValor.value
		);

		console.log(negociacao);

		// adicionar a negociação em uma lista

	}

}