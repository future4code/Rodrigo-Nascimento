//1.

//a.

const minhaString: string = "alala" // quando atribuo um número ele acusa um erro dizendo que número não é uma string (a variável só recebe string).

//b.

const meuNumero: number | string = 2 // adicionando o comparador | (ou) no tipo aceito.

//c.

const pessoa: {nome: string, idade: number, corFavorita: string} = {
  nome: "Rodrigo",
  idade: 35,
  corFavorita: "Preto"
}

console.log(pessoa)

//d.

enum CoresArcoIris {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta"
}

const pessoa2: {nome: string, idade: number, corFavorita: CoresArcoIris} = {
  nome: "Rodrigo",
  idade: 35,
  corFavorita: CoresArcoIris.AZUL
}

console.log(pessoa2)

