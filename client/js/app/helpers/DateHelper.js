class DateHelper {

	dataParaTexto(data) {

		return data.getDate() // arrumando a data para aparecer dia/mês/ano
		+ "/" + (data.getMonth() + 1)
		+ '/' + data.getFullYear();

	}
	
	textoParaData(texto) {
		return new Date(...texto.split('-').map((item, indice) => item - indice % 2));// pode ser usado com uma expressão regular --> .replace(/-/g, ',')
	}


}