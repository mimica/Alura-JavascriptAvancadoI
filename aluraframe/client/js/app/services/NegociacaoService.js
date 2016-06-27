class NegociacaoService {


	obterNegociacoesDaSemana(cb) {

		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'negociacoes/semana');

		// Configurações
		// 0: requisição não iniciada
		// 1: conexão com o servidor estabelecida
		// 2: requisição recebida
		// 3: processando requisição
		// 4: requisição concluída e a respota pronta 
		xhr.onreadystatechange = () => {

			if (xhr.readyState == 4) {

				if (xhr.status == 200) {
					// success
					console.log('Negociações obtidas do servidor');
					console.log(JSON.parse(xhr.responseText));

					cb(null, JSON.parse(xhr.responseText).map( objeto => {new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)}) );
						

				}
				else {
					// error
					console.log('Não foi possível obter as negociações do servidor!');
					cb('Não foi possível obter as negociações');
				}
			}

		};

		
		xhr.send();
	}
}