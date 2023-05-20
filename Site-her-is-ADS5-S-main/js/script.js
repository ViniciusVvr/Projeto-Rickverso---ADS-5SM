
const criarElemento = (personagem) => {

  //cria os elementos html do personagem
  const divColuna = document.createElement("div");
  divColuna.className = "colunaDados";

  const divContainer = document.createElement("div");
  divContainer.className = "container";

  const imagem = document.createElement("img");
  imagem.src = personagem.image;

  // Criando um parágrafo para exibir as informações do personagem
  const paragrafoNome = document.createElement("p");
  paragrafoNome.textContent = "Nome: " + personagem.name;

  const paragrafoStatus = document.createElement("p");
  paragrafoStatus.textContent = "Status: " + personagem.status;

  const paragrafoEspecie = document.createElement("p");
  paragrafoEspecie.textContent = "Espécie: " + personagem.species;

  
  const paragrafoGenero = document.createElement("p");
  paragrafoGenero.textContent = "Gênero: " + personagem.gender;

  const paragrafoOrigem = document.createElement("p");
  paragrafoOrigem.textContent = "Origem: " + personagem.origin.name;

  // Anexa os elementos criados (imagem, nome, status, espécie, gênero e origem) ao divContainer
  divContainer.appendChild(imagem);
  divContainer.appendChild(paragrafoNome);
  divContainer.appendChild(paragrafoStatus);
  divContainer.appendChild(paragrafoEspecie);
  divContainer.appendChild(paragrafoGenero);
  divContainer.appendChild(paragrafoOrigem);

  // Anexa o divContainer ao divColuna
  divColuna.appendChild(divContainer);

  // Retorna o elemento criado (divColuna) que contém todos os dados do personagem
  return divColuna;
};


function buscarDados() {
  let busca = document.querySelector("#nome");
  const namePersonagem = document.querySelector("#nome").value;
  const url = `https://rickandmortyapi.com/api/character/?name=${namePersonagem}`;
  fetch(url)
      .then(response => response.json())
      .then(dados => {
          // Verifica se os dados estão vazios ou inválidos
          if (dados.results.length === 0) {
            alert("Personagem não encontrado.");
            return;
        }
          if (busca.value.length == 0) {
              alert("Preencha o campo corretamente.");
              return;
          }

          const personagem = dados.results[0]; // Obtém o primeiro personagem encontrado
          const elementoPersonagem = criarElemento(personagem);

          // Adiciona o elemento à página
          const main = document.querySelector("#main");
          main.appendChild(elementoPersonagem);

          // Limpa o valor do input
          busca.value = '';
      })
      .catch(error => {
          console.error('Ocorreu um erro na requisição:', error);
      });
}









  