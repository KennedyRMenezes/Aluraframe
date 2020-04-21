class Negociacao { // toda classe c/ "contructor" só pode ser chamada em outro lugar c/ o opderador "new"

	constructor (data, quantidade, valor) { // constructor é uma espécie de função

		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;
		Object.freeze(this);

	}

	get volume() { // um método também é um espécie de função. A função dentro de uma classe se chama método
		return this._quantidade * this._valor;
	}  

	get data() {
		return new Date(this._data.getTime());
	}

	get quantidade() {
		return this._quantidade;
	}

	get valor () {
		return this._valor;
	}

}