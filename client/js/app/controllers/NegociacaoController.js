class NegociacaoController {

	constructor() { // fazer um constructor evita de que as propriedades passem pelo DOM diversas vezes, nesse caso com "this" ele passa só uma.

		let $ = document.querySelector.bind(document);
		
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adiciona (event) {
		event.preventDefault();

		

		let negociacao = new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value,
		);

		console.log(negociacao);

		console.log(DateHelper.dataParaTexto(negociacao.data));

	}

}