class NegociacaoController {

	constructor() { // fazer um constructor evita de que as propriedades passem pelo DOM diversas vezes, nesse caso com "this" ele passa só uma.

		let $ = document.querySelector.bind(document);
		
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._listaNegociacoes = new ListaNegociacoes();
	}

	adiciona (event) {
		event.preventDefault();

		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._limpaFormulario();
		console.log(this._listaNegociacoes.negociacoes);
	}

	_criaNegociacao() {

		return new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value,
		);
	}


	_limpaFormulario() {

		this._inputData.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;

		this._inputData.focus();
	}

}

