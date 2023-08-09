
function calcularValorTotalDeLivrosDisponiveis(livros) {
    // retorna a o preço total dos livros disponíveis através de reduce, em que adicionaremos o preço de cada livro ao valor total (acc), tendo como valor inicial zero.
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}