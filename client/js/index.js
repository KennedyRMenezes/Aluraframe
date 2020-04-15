var campos = [
	document.querySelector('#data'), // --- Selecionando os campos do form.
	document.querySelector('#quantidade'), // --- Selecionando os campos do form.
	document.querySelector('#valor') // --- Selecionando os campos do form.
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

	event.preventDefault(); // --- Impedir que a página recarregue excluindo o formulário.
	var tr = document.createElement('tr'); // --- Variável para criar uma nova linha.

	campos.forEach(function(campo) {

		var td = document.createElement('td');
		td.textContent = campo.value;
		tr.appendChild(td);
	});

	var tdVolume = document.createElement('td'); // --- Variável para criar um novo campo.
	tdVolume.textContent = campos[1].value * campos[2].value; // --- Adicionando resultado da operação.

	tr.appendChild(tdVolume);

	tbody.appendChild(tr);

	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 0;

	campos[0].focus();

});