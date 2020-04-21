class Negociacao { // toda classe c/ "contructor" só pode ser chamada em outro lugar c/ o opderador "new"

	constructor (data, quantidade, valor) { // constructor é uma espécie de função

		this._data = data;
		this._quantidade = quantidade;
		this._valor = valor;

	}

	get volume() { // um método também é um espécie de função. A função dentro de uma classe se chama método
		return this._quantidade * this._valor;
	}  

	get data() {
		return this._data;
	}

	get quantidade() {
		return this._quantidade;
	}

	get valor () {
		return this._valor;
	}

}