class NegociacaoController {

	constructor() { // fazer um constructor evita de que as propriedades passem pelo DOM diversas vezes, nesse caso com "this" ele passa só uma.

		let $ = document.querySelector.bind(document);
		
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adiciona (event) {
		event.preventDefault();

		let data = new Date(this._inputData.value.split('-')); // pode ser usado com uma expressão regular --> .replace(/-/g, ',')

		console.log(data);


		

	}

}