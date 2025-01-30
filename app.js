// Array para armazenar os amigos
let listaAmigo = [];

function adicionarAmigo() {
    let campo = document.getElementById("amigo");
    let nomeAmigo = campo.value.trim(); // Remove espaços extras

    // Verifica se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Verifica se o nome já está na lista
    if (listaAmigo.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    // Adiciona o nome ao array
    listaAmigo.push(nomeAmigo);

    // Atualiza a lista visual na interface
    atualizarLista();

    // Limpa o campo de entrada
    campo.value = "";

    // conferir
    console.log("Lista de amigos:", listaAmigo);
}

// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Percorre o array e cria elementos <li> para cada nome
    listaAmigo.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }); 
}

function sortearAmigo() {
    //  Validar se há amigos disponíveis
    if (listaAmigo.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    //  Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * listaAmigo.length);

    //  Obter o nome sorteado
    let amigoSorteado = listaAmigo[indiceAleatorio];

    //  Mostrar o resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado} foi sorteado!</li>`;
}
