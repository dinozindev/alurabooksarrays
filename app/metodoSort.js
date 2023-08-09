// variável que representa o botão de ordenar pelo preço
const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
// quando o botão de ordenar pelo preço for clicado, ele invocará a function 'ordenarLivrosPorPreco'
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    // a variável armazena a array obtida em sort(), que irá ordenar os livros do maior ao menor, levando em consideração o valor das strings de preço de cada elemento. 
    let livrosOrdenados = livros.sort((a,b) => b.preco - a.preco)
    // chamará a function exibirOsLivrosNaTela, utilizando como parâmetro a array dos livros ordenados, que serão exibidos na tela ao clicar no botão de ordenar por preço.
    exibirOsLivrosNaTela(livrosOrdenados);
}