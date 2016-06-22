class DateHelper {

	constructor() {
		throw new Error('Esta classe não pode ser instanciada.');
	}

	static dataParaTexto(data) {
		/*
		return data.getDate()
		     + '/' + (data.getMonth() + 1)
		     + '/' + data.getFullYear();
		*/

		// template string
		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
	}

	// format: yyyy-mm-dd
	static textoParaData(texto) {
		// using regular expression
		if (!/\d{4}-\d{2}-\d{2}/.test(texto))
			throw new Error('O formato da data deve ser aaaa-mm-dd');
		
		return new Date(...texto.split('-').map((item, indice) => item - (indice % 2) ));   // => arrow function
	}
	
}