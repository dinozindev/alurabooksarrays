// variável que busca a section "livros" dentro do HTML;
const elementoParaInserirLivros = document.getElementById('livros');
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
  // quando a function é invocada, a section 'valor_total_livros_disponiveis' será vazia.
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
  // quando a function é invocada, a section 'livros' será vazia. Com isso, sempre que o botão para filtrar as categorias for clicado, não haverá repetição de livros, já que a section sempre ficará fazia quando a function for invocada. 
  elementoParaInserirLivros.innerHTML = ''
  // para cada elemento da array "livros", será inserido uma div com classe 'livro' na section "livros", que irá representar cada livro da lista. Cada informação de cada livro será obtido através das propriedades de cada elemento da array através de template strings. Através disso, podemos constantemente adicionar e modificar livros sem a necessidade de mudar o HTML, apenas modificando o arquivo .json (banco de dados). 
    listaDeLivros.forEach(livro => {
      // Forma de escrever mais curta, em que temos uma variável disponibilidade, em que se o elemento livro tiver quantidade maior que 0, terá a classe livro__imagens retornada. Caso contrário, terá a mesma classe + indisponivel retornadas. 
      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
      // Adicionamos a concatenação com a variável ${disponibilidade} para que possamos alternar entre livros disponíveis e livros indisponíveis.
      elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    })
}

// Variável disponibilidade irá chamar a function verificarDisponibilidadeDoLivro com o parâmetro sendo o elemento da array. Se a propriedade quantidade for maior que zero, retornará a classe livro__imagens. Caso a quantidade for menor que zero, retornará a classe indisponivel também.
// let disponibilidade = verificarDisponibilidadeDoLivro(livro);
// function verificarDisponibilidadeDoLivro(livro) {
//   if(livro.quantidade > 0){
//     return 'livro__imagens'
//   } else {
//     return 'livro__imagens indisponivel'
//   }
// }