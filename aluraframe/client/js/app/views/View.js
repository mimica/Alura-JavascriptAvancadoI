class View {

	constructor(elemento) {

        this._elemento = elemento;
    }

    template(model) {

    	// Força a implementação deste método pelas classes filhas
    	throw new Error('O método template() deve ser implementado.');
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    
}