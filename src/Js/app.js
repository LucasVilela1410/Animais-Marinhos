function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa){
      section.innerHTML = "<p class='erro-pesquisa'>Nada foi encontrato.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na array de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLocaleLowerCase()
      descricao = dado.descricao.toLocaleLowerCase()
      tags = dado.tags.toLowerCase()
      // Constrói o HTML para cada item de resultado
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        
        resultados += `
        <div class="item-resultado">
          <h3>${dado.titulo}</h3>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Saiba mais</a>
        </div>
      `;
      }
    }

    if (!resultados) {
      resultados = "<p class='erro-pesquisa'>Desculpe, não localizei sua busca! Mas não se procupe, nossa equipe já está em desenvolvimento de futuras atualizações nas informações desta pagina.</p>";
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }