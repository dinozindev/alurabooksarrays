// quando a function aplicarDesconto é chamada com o parâmetro da array 'livros', será criada uma array atualizada, copiando todas as propriedades dos elementos da array atual através do operando spread (...), exceto a propriedade preço, que terá seu valor atualizado com desconto. A nova array terá todos os elementos com as propriedades normais, porém com o preço atualizado.  
function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })

    return livrosComDesconto;
}