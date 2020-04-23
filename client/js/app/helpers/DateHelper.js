class DateHelper {

	constructor () {
		throw new Error('Esta não pode ser instanciada')
	}

	static dataParaTexto(data) {

		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`; // arrumando a data para aparecer dia/mês/ano
		
	}

	static textoParaData(texto) {

		if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
			throw new Error ('Deve estar no formato aaaa-mm-dd');

		return new Date(...texto.split('-').map((item, indice) => item - indice % 2));// pode ser usado com uma expressão regular --> .replace(/-/g, ',')
	}


}

// data.getDate() // arrumando a data para aparecer dia/mês/ano
	//	+ "/" + (data.getMonth() + 1)
	//	+ '/' + data.getFullYear();
