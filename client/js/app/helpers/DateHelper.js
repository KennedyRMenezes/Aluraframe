class DateHelper {

	constructor () {
		throw new Error('Esta não pode ser instanciada')
	}

	static dataParaTexto(data) {

		return data.getDate() // arrumando a data para aparecer dia/mês/ano
		+ "/" + (data.getMonth() + 1)
		+ '/' + data.getFullYear();

	}

	static textoParaData(texto) {
		return new Date(...texto.split('-').map((item, indice) => item - indice % 2));// pode ser usado com uma expressão regular --> .replace(/-/g, ',')
	}


}