/*
Exercícios de interpretação de código

1.
a. Matheus Nachtergaele (primeiro índice do array elenco)
   Virginia Cavendish (último índice do array elenco)
   canal: "Globo", horario: "14h" (índice [2] do array transmissoesHoje)

2.
a. em cachorro: nome, idade e a raça dela; em gato: copia as informações de cachorro e substitui o nome por juba, a mesma idade e a mesma raça; em tartaruga: copia as informações de gato e substitui os "a" por "o".

b. ocorrerá uma cópia de um objeto

3.
a. false e não definido

b. o valor de backender é false e altura não foi definido.


*/

//Exercícios de escrita de código

//1.
//a.
const exercicio = {
    nome: "Rodrigo",
    apelidos: ["Digão", "Preto", "Digo"],
}
  
function imprimeObjetio(objeto){
    return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`
}
  
console.log(imprimeObjetio(exercicio))

//b.
const novosApelidos = {
    ...exercicio,
    apelidos: ["Azul", "Lilás", "Vermelho"]
}
  
console.log(imprimeObjetio(novosApelidos))

//2.
//a.
const propriedades1 = {
    nome: "Rodrigo",
    idade: 34,
    profissao: "estudante"
  
}
  
const propriedades2 = {
    nome: "Rebeca",
    idade: 25,
    profissao: "estagiária"
}

//b.
function mostraPropriedades(propriedades){
    return [`${propriedades.nome}, ${propriedades.nome.length}, ${propriedades.idade}, ${propriedades.profissao}, ${propriedades.profissao.length}`]
  
}
  
console.log(mostraPropriedades(propriedades1))
  
console.log(mostraPropriedades(propriedades2))

//3.
//a.
const carrinho = []

//b.
const fruta1 = {
  nome: "Maçã",
  disponibilidade: true 
}

const fruta2 = {
  nome: "Melancia",
  disponibilidade: true
}

const fruta3 = {
  nome: "Laranja",
  disponibilidade: true
}

//c.
function recebeFruta(fruta){
  carrinho.push(fruta1, fruta2, fruta3)
  return carrinho
}

console.log(recebeFruta())
