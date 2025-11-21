let cardContainer = document.querySelector(".card-container");
let data = [];

// 1. Função que carrega os dados do JSON e configura os eventos
async function inicializar() {
  let response = await fetch("clubs.json");
  data = await response.json();
  renderizarCards(data); // Mostra todos os clubes inicialmente

  // Adiciona o evento de clique ao botão de busca
  const searchButton = document.getElementById("botao-busca");
  searchButton.addEventListener("click", buscarClube);
}

// 2. Função que filtra os clubes com base no input
function buscarClube() {
  const searchInput = document.getElementById("search-input");
  const searchTerm = searchInput.value.toLowerCase();

  const clubesFiltrados = data.filter((clube) => {
    // Verifica se o nome do clube (em minúsculas) inclui o termo buscado
    return clube.nome.toLowerCase().includes(searchTerm);
  });

  renderizarCards(clubesFiltrados);
}

// 3. Função que exibe os cards na tela
function renderizarCards(clubes) {
  // Limpa o container antes de adicionar os novos cards
  cardContainer.innerHTML = "";

  clubes.forEach((element) => {
    let article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `
      <img src="${element.escudo}" id="escudo" alt="Logo do ${element.nome}" />
      <h2>${element.nome}</h2>
      <p>Fundado em: ${element.fundacao}</p>
    `;
    cardContainer.appendChild(article);
  });
}

// Inicia o processo quando a página carrega
inicializar();
