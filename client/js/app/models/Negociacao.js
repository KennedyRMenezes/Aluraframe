class Negociacao { // toda classe c/ "contructor" só pode ser chamada em outro lugar c/ o opderador "new"

	constructor (data, quantidade, valor) { // constructor é uma espécie de função

		this.data = data;
		this.quantidade = quantidade;
		this.valor = valor;

	}

	obtemVolume() { // um método também é um espécie de função. A função dentro de uma classe se chama método
		return this.quantidade * this.valor;
	}  

}