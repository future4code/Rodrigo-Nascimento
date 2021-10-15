//Exercícios de escrita de código
//1. a. b. c.

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const mostrarCachorros = (cachorro) => {
    return cachorro.nome
}

const soNomes = pets.map(mostrarCachorros)

console.log(soNomes)

const mostrarSalsicha = (cachorro) => {
    return cachorro.raca === "Salsicha"
}

const soSalsicha = pets.filter(mostrarSalsicha)

console.log(soSalsicha)

const mostrarMensagemPoodle = (cachorro) => {
    if (cachorro.raca === "Poodle") {
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorro.nome}!`
    }
}

const desconto = pets.filter(mostrarMensagemPoodle).map(mostrarMensagemPoodle)

console.log(desconto)

//2. a. b. c. d. e.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const mostrarNomeItem = (item) => {
    return item.nome
}
const soNomes = produtos.map(mostrarNomeItem)
console.log(soNomes)

const nomePrecoAlterado = produtos.map((valor) => {
    const novoPreco = (valor.preco - (valor.preco * 0.05)).toFixed(2)
    return { nome: valor.nome, preco: novoPreco }
})
console.log(nomePrecoAlterado)

const mostrarSoBebidas = (item) => {
    return item.categoria === "Bebidas"
}
const soBebidas = produtos.filter(mostrarSoBebidas)
console.log(soBebidas)

const mostrarSoYpe = (item) => {
    return item.nome.includes("Ypê")
}
const soYpe = produtos.filter(mostrarSoYpe)
console.log(soYpe)

const mostrarFrase = (item) => {
    return `Compre ${item.nome} por ${item.preco}`
}
const soAFrase = produtos.filter

const frase = produtos.filter(mostrarSoYpe).map(mostrarFrase)
console.log(frase)

//Desafio
//a.
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]


const nomesPokemon = (item) => {
    return item.nome
}

const ordem = pokemons.map(nomesPokemon)
console.log(ordem.sort())