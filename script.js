document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("botao-busca");
  const cardContainer = document.querySelector(".card-container");
  const initialCard = document.getElementById("initial-card");

  let clubsData = [];

  // 1. Carrega os dados dos clubes do arquivo JSON assim que a página estiver pronta.
  //    Os dados ficam armazenados na variável 'clubsData', mas nada é exibido na tela.
  fetch("clubs.json")
    .then((response) => response.json())
    .then((data) => {
      clubsData = data;
    })
    .catch((error) =>
      console.error("Erro ao carregar os dados dos clubes:", error)
    );

  // Função para exibir os clubes filtrados
  const displayClubs = (clubs) => {
    cardContainer.innerHTML = ""; // Limpa resultados anteriores

    if (searchInput.value.trim() === "") {
      initialCard.style.display = "block";
      return;
    }

    initialCard.style.display = "none";

    if (clubs.length === 0 && searchInput.value.trim() !== "") {
      cardContainer.innerHTML =
        "<p>Nenhum time encontrado. Ta precisando melhorar!</p>";
      return;
    }
    if (clubs.length > 1) {
      const info = document.createElement("p");
      info.textContent = `Foram encontrados ${clubs.length} times. Será que você digitou o nome corretamente?`;
      cardContainer.appendChild(info);
    } else if (clubs.length === 1) {
      const info = document.createElement("p");
      info.textContent = `O clube existe! Pode cobrar sua pontuação no jogo!`;
      cardContainer.appendChild(info);
    }

    clubs.forEach((club) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
          <h2>${club.nome}</h2>
          <p><strong>Liga:</strong> ${club.liga}</p>
          <p><strong>País:</strong> ${club.pais}</p>
        `;
      cardContainer.appendChild(card);
    });
  };

  // Função que realiza a busca
  const performSearch = () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    // 2. Filtra os clubes com base no termo pesquisado.
    const filteredClubs = clubsData.filter((club) =>
      club.nome.toLowerCase().includes(searchTerm)
    );

    // 3. Exibe os clubes que correspondem à busca.
    displayClubs(filteredClubs);
  };

  // Adiciona o evento de clique ao botão de busca
  searchButton.addEventListener("click", performSearch);
});
