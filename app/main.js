// variável que representa a array/lista de livros
let livros = [];
// variável que referencia a API
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
// chama a function getBuscarLivrosDaAPI;
getBuscarLivrosDaAPI()

// quando a function 'getBuscarLivrosDaAPI' é chamada, a API é buscada e espera até que seja concluída. Quando concluída, a promise obtida é inserida dentro da array da variável livros e é formatada em .json, podendo ser lida como uma lista com vários livros. 
async function getBuscarLivrosDaAPI() {
    const response = await fetch(endPointDaAPI);
    livros = await response.json();
    // variável que chama a function aplicarDesconto com o parâmetro da array "livros";
    let livrosComDesconto = aplicarDesconto(livros);
    // console.table(livros);
    // chama a function exibirOsLivrosNaTela, usando como parâmetro a lista "livros" ou a lista atualizada "livrosComDesconto";
    exibirOsLivrosNaTela(livrosComDesconto);
}

