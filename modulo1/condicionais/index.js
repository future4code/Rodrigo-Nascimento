/*
Exercícios de interpretação de código

1.
a. testa se o resto de um número dividido por dois é igual a zero
b. todos os números pares (resto 0)
c. todos os números que tem resto diferente de 0

2.
a. informar o preço da fruta escolhida pelo usuário
b. 2.25
c. pularia pro valor do default e seria exibido o preço 5 (ao invés de 5.5)

3.
a. pedindo pro usuário digitar o primeiro número
b. se for 10 será true e exibirá a mensagem: Esse número passou no teste; sendo -10 exibirá um erro pq não foi definido o que fazer caso o número for diferente de > 0
c. sim, faltou declarar o else com a outra mensagem
*/

//Exercícios de escrita de código
//1
//a. b. c.
const idade = Number(prompt("Qual a sua idade?"))

if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

// //2.
const turno = prompt("Digite M para matutino, V para vespertino ou N para noturno:").toUpperCase()

if (turno === "M") {
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}

// //3.
const turno = prompt("Digite M para matutino, V para vespertino ou N para noturno:").toUpperCase()

switch (turno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    default:
        console.log("Boa noite!")
        break
}

// //4.
const generoFilme = prompt("Qual gênero de filme você gostaria de assistir?")
const ingresso = prompt("Qual o valor do ingresso?")

if (generoFilme === "fantasia" && ingresso <= 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

// //Desafio
// //1.
const generoFilme = prompt("Qual gênero de filme você gostaria de assistir?")
const ingresso = prompt("Qual o valor do ingresso?")

if (generoFilme === "fantasia" && ingresso <= 15) {
    const lanche = prompt("Qual lanche você pretende comprar? Pipoca, chocholate ou outros?")
    console.log(`Bom filme! Aproveite seu/sua ${lanche}`)
} else {
    console.log("Escolha outro filme :(")
}

//2.
const nome = prompt("Digite o seu nome completo:")
const jogo = prompt("Digite IN caso o jogo for internacional ou DO caso seja doméstico").toUpperCase()
const etapaJogo = prompt("Digite SF para semi-final, DT para decisão de terceiro lugar ou FI para final").toUpperCase()
const categoria = Number(prompt("Qual a categoria? Opções: 1, 2, 3 ou 4."))
const qtdIngresso = Number(prompt("Qual a quantidade de ingressos?"))
let valorDoIngresso

function calculaTotal() {
    return valorDoIngresso * qtdIngresso
}

function imprimeJogo() {
    if (jogo === "IN") {
        return "Internacional"
    } else {
        return "Doméstico"
    }
}

function imprimeEtapa() {
    if (etapaJogo === "SF") {
        return "Semi Final"
    } else if (etapaJogo === "DT") {
        return "Decisão 3º lugar"
    } else {
        return "Final"
    }
}

if (categoria === 1 && jogo === "IN" && etapaJogo === "SF") {
    valorDoIngresso = 5412
    calculaTotal()
} else if (categoria === 2 && jogo === "IN" && etapaJogo === "SF") {
    valorDoIngresso = 3608
    calculaTotal()
} else if (categoria === 3 && jogo === "IN" && etapaJogo === "SF") {
    valorDoIngresso = 2255
    calculaTotal()
} else if (categoria === 4 && jogo === "IN" && etapaJogo === "SF") {
    valorDoIngresso = 902
    calculaTotal()
} else if (categoria === 1 && jogo === "IN" && etapaJogo === "DT") {
    valorDoIngresso = 2706
    calculaTotal()
} else if (categoria === 2 && jogo === "IN" && etapaJogo === "DT") {
    valorDoIngresso = 1804
    calculaTotal()
} else if (categoria === 3 && jogo === "IN" && etapaJogo === "DT") {
    valorDoIngresso = 1353
    calculaTotal()
} else if (categoria === 4 && jogo === "IN" && etapaJogo === "DR") {
    valorDoIngresso = 697
    calculaTotal()
} else if (categoria === 1 && jogo === "IN" && etapaJogo === "FI") {
    valorDoIngresso = 8118
    calculaTotal()
} else if (categoria === 2 && jogo === "IN" && etapaJogo === "FI") {
    valorDoIngresso = 5412
    calculaTotal()
} else if (categoria === 3 && jogo === "IN" && etapaJogo === "FI") {
    valorDoIngresso = 3608
    calculaTotal()
} else if (categoria === 4 && jogo === "IN" && etapaJogo === "FI") {
    valorDoIngresso = 1353
    calculaTotal()
} else if (categoria === 1 && jogo === "DO" && etapaJogo === "SF") {
    valorDoIngresso = 1320
    calculaTotal()
} else if (categoria === 2 && jogo === "DO" && etapaJogo === "SF") {
    valorDoIngresso = 880
    calculaTotal()
} else if (categoria === 3 && jogo === "DO" && etapaJogo === "SF") {
    valorDoIngresso = 550
    calculaTotal()
} else if (categoria === 4 && jogo === "DO" && etapaJogo === "SF") {
    valorDoIngresso = 220
    calculaTotal()
} else if (categoria === 1 && jogo === "DO" && etapaJogo === "DT") {
    valorDoIngresso = 660
    calculaTotal()
} else if (categoria === 2 && jogo === "DO" && etapaJogo === "DT") {
    valorDoIngresso = 440
    calculaTotal()
} else if (categoria === 3 && jogo === "DO" && etapaJogo === "DT") {
    valorDoIngresso = 330
    calculaTotal()
} else if (categoria === 4 && jogo === "DO" && etapaJogo === "DT") {
    valorDoIngresso = 170
    calculaTotal()
} else if (categoria === 1 && jogo === "DO" && etapaJogo === "FI") {
    valorDoIngresso = 1980
    calculaTotal()
} else if (categoria === 2 && jogo === "DO" && etapaJogo === "FI") {
    valorDoIngresso = 1320
    calculaTotal()
} else if (categoria === 3 && jogo === "DO" && etapaJogo === "FI") {
    valorDoIngresso = 880
    calculaTotal()
} else if (categoria === 4 && jogo === "DO" && etapaJogo === "FI") {
    valorDoIngresso = 330
    calculaTotal()
}

console.log(`---Dados da compra--- 
Nome do cliente:  ${nome} 
Tipo do jogo:  ${imprimeJogo()} 
Etapa do jogo:  ${imprimeEtapa()} 
Categoria:  ${categoria} 
Quantidade de Ingressos:  ${qtdIngresso} 
---Valores--- 
Valor do ingresso:  R$ ${valorDoIngresso}
Valor total:  ${calculaTotal()}`)
