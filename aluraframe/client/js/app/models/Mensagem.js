class Mensagem {

	// DEIXOU DE RECEBER O PARÂMTRO OPCIONAL
    //constructor(texto) {
    //
    //    this._texto = texto || ''; // se texto for undefined, vai passar ''
    //}

	constructor(texto='') {

		this.m_texto = texto;
	}

	get texto() {
		
		return this.m_texto;
	}

	set texto(texto) {
		
		this.m_texto = texto;
	}


}