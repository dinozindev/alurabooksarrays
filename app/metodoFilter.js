// seleciona todos os elementos com a classe '.btn'
const botoes = document.querySelectorAll('.btn');

// para cada elemento da array 'botoes', será aplicada a arrow function, que ao botão ser clicado, executará a function 'filtrarLivros'
botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));


function filtrarLivros() {
    // busca o id do botão que foi pressionado.
    const botaoElemento = document.getElementById(this.id);
    // busca o valor do botão que foi pressionado.
    const categoria = botaoElemento.value
    // usamos o operador condicional terciário para criar uma situação de if/else. Caso o botão pressionado tenha a categoria 'disponivel', a function 'filtrarPorDisponibilidade()' será chamada. Caso contrário, a function 'filtrarPorCategoria' será invocada.    
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    // chama a function "exibirOsLivrosNaTela", exibindo apenas os livros que foram filtrados por categoria.
    exibirOsLivrosNaTela(livrosFiltrados);
    // se a categoria do botão pressionado for "disponivel", invoca a function 'exibirValorTotalDosLivrosDisponiveisNaTela()'
    if(categoria == 'disponivel') {
        // chama a function 'calcularValorTotalDeLivrosDisponiveis' usando como parâmetro a array com os livros filtrados. 
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) 
    }
}

// Caso o valor do botão pressionado seja 'disponível', a array 'livros' será filtrada, retornando apenas os livros que tiverem quantidade maior que 0.
function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

// Caso o botão pressionado não tenha value = 'disponivel', a array 'livros' será filtrada, retornando apenas os livros que sejam da categoria do botão pressionado.
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

// adiciona dentro da section "valor_total_livros_disponiveis" o banner que indica o valor total dos livros disponíveis.
function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = 
    `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}