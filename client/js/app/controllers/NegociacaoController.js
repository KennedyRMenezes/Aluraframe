class NegociacaoController {

	constructor() { // fazer um constructor evita de que as propriedades passem pelo DOM diversas vezes, nesse caso com "this" ele passa só uma.

		let $ = document.querySelector.bind(document);
		
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adiciona (event) {
		event.preventDefault();

		console.log(typeof(this._inputData.value));

		console.log(this._inputData.value);


		// adicionar a negociação em uma lista

	}

}