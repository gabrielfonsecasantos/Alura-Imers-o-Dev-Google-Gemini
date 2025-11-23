# FUTStop ⚽

Bem-vindo ao FUTStop! Este projeto foi pensado para servir de base de conhecimento para partidas de "Stop". Ficou em dúvida se seu amigo anotou um clube que realmente existe? Use o FUTStop! É uma ferramenta simples e divertida para testar e expandir seus conhecimentos sobre o esporte.

## 📜 Descrição

O FUTStop foi criado para ser um ponto de parada (`Stop`) para os fãs de futebol (`FUT`). Com uma interface limpa e uma barra de busca funcional, o usuário pode digitar o nome de um time e obter informações relevantes sobre ele. O projeto utiliza uma base de dados local em formato JSON para armazenar os dados dos clubes.

## ✨ Funcionalidades

- **Busca Dinâmica**: Pesquise por times de futebol em tempo real.
- **Interface Amigável**: Uma página inicial acolhedora que guia o usuário sobre como utilizar a aplicação.
- **Base de Dados Abrangente**: Inclui times das principais ligas europeias e do Brasileirão.
- **Design Simples**: Foco na usabilidade e na apresentação clara das informações.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web fundamentais:

- **HTML5**: Para a estruturação semântica da página.
- **CSS3**: Para a estilização e o layout (através do arquivo `style.css`).
- **JavaScript**: Para a manipulação do DOM, lógica de busca e criação dinâmica dos cards de informação (através do arquivo `script.js`).
- **JSON**: Como formato para a base de dados dos clubes.

## 🚀 Como Executar o Projeto

Por ser um projeto front-end, você pode executá-lo facilmente em sua máquina local.

1.  **Clone o repositório (ou baixe os arquivos):**
    ```bash
    git clone <URL-DO-SEU-REPOSITORIO>
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd base-de-conhecimento
    ```
3.  **Abra o arquivo `index.html`:**
    - A maneira mais simples é abrir o arquivo `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).
    - **Observação:** Se a lógica em `script.js` utilizar a API `fetch()` para carregar o `clubs.json`, pode ser necessário usar um servidor local para evitar problemas com a política de mesma origem (CORS). Uma extensão como o **Live Server** para o VS Code resolve isso facilmente.

## 📂 Estrutura do Projeto

```
base-de-conhecimento/
├── 📄 index.html       # Arquivo principal com a estrutura da página
├── 🎨 style.css        # Folha de estilos para a aplicação
├── ⚙️ script.js        # Código JavaScript com a lógica da aplicação
├── 🗃️ clubs.json       # Base de dados com a lista de clubes
└── 📖 README.md        # Este arquivo
```

## 👨‍💻 Autor

Este projeto foi desenvolvido como parte de um estudo sobre manipulação de dados e desenvolvimento web front-end.

*   **Autor**: Gabriel Fonseca
*   **GitHub**: gabrielfonsecasantos

---

Sinta-se à vontade para contribuir, sugerir melhorias ou abrir issues!
