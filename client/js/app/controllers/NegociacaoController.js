class NegociacaoController {

	constructor() { // fazer um constructor evita de que as propriedades passem pelo DOM diversas vezes, nesse caso com "this" ele passa só uma.

		let $ = document.querySelector.bind(document);
		
		this.inputData = $('#data');
		this.inputQuantidade = $('#quantidade');
		this.inputValor = $('#valor');
	}

	adiciona (event) {
		event.preventDefault();

		console.log(this.inputData.value);
		console.log(this.inputQuantidade.value);
		console.log(this.inputValor.value);
	}

}