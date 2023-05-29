let db_noticias = {

	"noticias": [
		{
			"id": 1,
			"usuario": "Lucas_xae",
			"titulo": "Paris 2024, Jogos olímpicos",
			"descricao": "Com mais de 40 modalidades esportivas, os Jogos Olímpicos estão de volta a sua normalidade após as mudanças no devida a pandemia global.",
			"texto": " Com mais de 40 modalidades esportivas, os Jogos Olímpicos estão de volta a sua normalidade após as mudanças no devida a pandemia global. No ano de 2021, cujo foi realizada as Olímpiadas de Tóquio houve muitas mudanças devida à pandemia, como por exemplo a falta de um publico presencial. Porem a boa noticia é que com o controle do COVID as olímpiadas de Paris contará com uma plateia presencial. Agora voltando a normalidade os jogos podem ser aproveitados novamente. ",
			"autor": "Lucas Chaves"


		},
		{
			"id": 2,
			"usuario": "NoobMaster69",
			"titulo": "Com foco em ‘conquistar grandes coisas para o Botafogo’, Victor Sá escolhe competição preferida para ser campeão",
			"descricao": "Botafogo vem embalado em 4 vitorias e líder do Brasileirão de 2023. Será que vai aguentar ate o final da temporada?",
			"texto": " O discurso tem sido recorrente no Botafogo: conquistas grandes coisas na temporada. Ganhar um título de expressão passou a ser um lema interno, que vem sendo alimentado pela boa sequência recente. Em participação no programa “Os Donos da Bola”, da Band, Victor Sá elegeu uma competição favorita para ser campeão. – É difícil escolher uma. Mas vou falar a Copa Sul-Americana, seria bacana ganhar. O Marçal quando falou isso (sobre conquistar títulos) é porque sabe da qualidade do elenco e da gana dos jogadores de quererem vencer o tempo todo. Estamos bem focados para essa temporada para conquistar grandes coisas para o Botafogo, que é o nosso grande objetivo – garantiu Victor Sá.	Editar Excluir",
			"autor": "FogãoNET"


		}
	]
}

let data = [];
if (localStorage.getItem('myData')) {
	data = JSON.parse(localStorage.getItem('myData'));
}

function showData() {
	let output = document.getElementById('output');
	output.innerHTML = '<h2>Dados Salvos</h2>';

	if (data.length > 0) {
		let table = '<table><tr><th>Usuario</th><th>Titulo</th><th>Descricao</th><th>Autor</th><th>Texto</th><th>Ação</th></tr>';

		for (let i = 0; i < data.length; i++) {
			table += '<tr><td>' + data[i].usuario + '</td><td>' + data[i].titulo + '</td><td>' + data[i].descricao + '</td><td>' + data[i].autor + '</td><td>' + data[i].texto + '</td><td><button onclick="editData(' + i + ')">Editar</button> <button onclick="deleteData(' + i + ')">Excluir</button></td></tr>';
		}

		table += '</table>';
		output.innerHTML += table;
	} else {
		output.innerHTML += '<p>Nenhum dado salvo ainda.</p>';
	}
}

function saveData(event) {
	event.preventDefault();

	let usuario = document.getElementById('usuario').value;
	let titulo = document.getElementById('titulo').value;
	let descricao = document.getElementById('descricao').value;
	let autor = document.getElementById('autor').value;
	let texto = document.getElementById('texto').value;

	if (usuario != '' && titulo != '' && descricao != '' && autor != '' && texto != '') {
		let newData = { usuario: usuario, titulo: titulo, descricao: descricao, autor: autor, texto: texto };
		data.push(newData);

		localStorage.setItem('myData', JSON.stringify(data));

		showData();
	} else {
		alert('Por favor, preencha todos os campos.');
	}
}

function editData(index) {
	let usuario = prompt('Digite um novo usuario:', data[index].usuario);
	let titulo = prompt('Digite um novo titulo:', data[index].titulo);
	let descricao = prompt('Digite uma nova descricao:', data[index].descricao);
	let autor = prompt('Digite um novo autor:', data[index].autor);
	let texto = prompt('Digite um novo texto:', data[index].texto);

	if (usuario != null && titulo != null && descricao != null && autor != null && texto != null) {
		data[index].usuario = usuario;
		data[index].titulo = titulo;
		data[index].descricao = descricao;
		data[index].autor = autor;
		data[index].texto = texto;

		localStorage.setItem('myData', JSON.stringify(data));

		showData();
	}
}

function deleteData(index) {
	if (confirm('Tem certeza que deseja excluir ', data[index].titulo)) {
		data.splice(index, 1);

		localStorage.setItem('myData', JSON.stringify(data));

		showData();
	}
}


showData();
document.getElementById('myForm').addEventListener('submit', saveData);
