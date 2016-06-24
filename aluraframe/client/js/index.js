var campos = [
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor'),
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

	event.preventDefault();

	//alert('oi');
	var tr = document.createElement('tr');

	campos.forEach(function(campo) {
		var td = document.createElement('td');
		td.textContent = campo.value;
		tr.appendChild(td);
	});

	var tdVolume = document.createElement('td');

	// quantidade * valor
	tdVolume.textContent = campos[1].value * campos[2].value;
	tr.appendChild(tdVolume);

	tbody.appendChild(tr);

	// Reset form fields and set data field focus
	campos[0].value = '';
	campos[1].value = '100';
	campos[2].value = '0';

	campos[0].focus();

});