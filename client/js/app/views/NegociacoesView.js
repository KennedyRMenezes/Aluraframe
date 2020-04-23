class NegociacoesView {

	constructor (elemento) {
		this._elemento = elemento;
	}

	_template() {
		return `
			<table class="table table-hover table-bordered">
			    <thead>
			        <tr>
			            <th>DATA</th>
			            <th>QUANTIDADE</th>
			            <th>VALOR</th>
			            <th>VOLUME</th>
			        </tr>
			    </thead>
			        
			    <tbody>
			    </tbody>
			        
			    <tfoot>
			    </tfoot>
			</table>
		`; 
	}

	update() {
		this._elemento.innerHTML = this._template(); // iner converte uma string (se constriuida corretamente) com um elemento do DOM.
	}
}

