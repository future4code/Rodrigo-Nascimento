/*
--Exercícios de interpretação de código
1.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
true && false = false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
true && false && true = false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
o resultado é false quando volta de b e o contrário disso seria true.
true && (true || fase)
true && true = true

console.log("d. ", typeof resultado)
boolean

2.

iria ser apresentado a concatenação de duas strings
ex: numero1 = 10
    numero2 = 20
    soma = 1020

para resolver o problema seria necessário usar o Number()

3.

ex:
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
*/


//Exercícios de escrita de código

//1.

const idade = prompt("Qual a sua idade?")
const idadeAmigx = prompt("Qual a idade do seu melhor amigo?")

let idadeMaiorouMenor = idade > idadeAmigx
let diferencaIdade = idade - idadeAmigx
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaiorouMenor)
console.log("A diferença entre idade é de anos:", diferencaIdade)

//2.

const numeroPar = prompt("Digite um número **par**:")
console.log(numeroPar % 2)

//c) todo número par digitado não tem "resto de divisão". sendo o resultado apresentado = 0
//d) números não pares apresentam resultado diferente de 0 pq possuem "resto de divisão"

//3.

const idade = prompt("Quantos anos você tem?")

const idadeEmMeses = Number(idade) * 12
const idadeEmDias = Number(idade) * 365
const idadeEmHoras = Number(idade) * 8766

console.log("Você tem", idade, "anos")
console.log("Sua idade em meses é:", idadeEmMeses,"meses")
console.log("Sua idade em dias é:", idadeEmDias, "dias")
console.log("Sua idade em horas é:", idadeEmHoras, "horas")

//4.

const numero1 = Number(prompt("Digite o primeiro número:"))
const numero2 = Number(prompt("Digite o segundo número:"))

console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 === 0)

//DESAFIO

//1.

console.log("O valor de 77ºF em K é,", (77 - 32) * 5 / 9 + 273, "K")
console.log("O valor de 80ºC em ºF é,", 80 * 1.8 + 32, "ºF")
console.log("O valor de 30ºC em ºF e K é", 30 * 1.8 + 32, "ºF e", 30 + 273.15, "K")

let celsius = Number(prompt("Digite uma nova temperatura em celsius para ser convertida"))
let celsiusParaKelvin = celsius + 273.15
let celsiusParaFahrenheit = celsius * 1.8 + 32

console.log("A nova temperatura em K é:", celsiusParaKelvin)
console.log("A nova temperatura em ºF é:", celsiusParaFahrenheit)

//2.

let kwHora = 0.05 * 280

console.log("O consumo de 280 quilowatt-hora gerou um total de:", kwHora, "reais")

let desconto = kwHora - (kwHora * 0.15)

console.log("O valor a ser pago com 15% de desconto é de:", desconto)

//3.

let convertLibrasParaKg = 20 / 2.2046
console.log("20lb equivalem a", convertLibrasParaKg, "kg")

let convertOzParaKg = 10.5 / 35.274
console.log("10.5oz equivalem a", convertOzParaKg, "kg")

let convertMiParaM = 100 / 1609
console.log("100mi equivalem a", convertMiParaM, "m")

let convertFtParaM = 50 * 0.3048
console.log("50ft equivalem a", convertFtParaM, "m")

let convertGalParaL = 103.56 * 3.785
console.log("103.56gal equivalem a", convertGalParaL, "l")

let convertXicParaL = 450 * 0.24
console.log("450 xic equivalem a", convertXicParaL, "l")

let novoValor = Number(prompt("Digite um novo valor em Xícaras para ser convertido para Litros"))
let conversao = novoValor * 0.24
console.log(novoValor, "xic equivalem a", conversao, "l")



