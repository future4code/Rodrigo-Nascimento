/*Exercícios de interpretação de código

1.
a. o resultado da múltiplicação da função por 2 e depois por 5

b. o último resultado da última chamada da função

2.
a. retorna o texto digitado em letras minúsculas(toLowerCase)
   retorna verdadeiro ou falso caso o texto tenha a palavra cenoura (includes("cenoura"))

b.
i. true
ii. true
iii. true

*/

//Exercícios de escrita de código

//1.
//a.
function imprimirConsole(){
    return `Eu sou Rodrigo, tenho 34 anos, moro em Olinda e sou estudante`
}
    
console.log(imprimirConsole())

//b.
function mudancaConsole(nome, idade, cidade, profissao){
    const meuNome = "Laís" 
    const minhaIdade = 23
    const minhaCidade = "São Paulo"
    const minhaProfissao = "Instrutora"
    return `Eu sou ${meuNome}, tenho ${minhaIdade} anos, moro em ${minhaCidade} e sou ${minhaProfissao}`
}
    
console.log(mudancaConsole())

//2.
//a.
function somar(numero1, numero2){
    const soma = numero1 + numero2
    return soma
}
  
console.log(somar(2, 3))

//b.
function comparar(numero1, numero2){
    const compararNumeros = numero1 >= numero2
    return compararNumeros
}
  
console.log(comparar(5, 3))

//c.
function par(numero){
    const parOuImpar = Number(numero) % 2 === 0
    return parOuImpar
}
console.log(par(5))

//d.
function tamanhoMensagem(mensagem){
    const totalLetras = mensagem.length
    const maiuscula = mensagem.toUpperCase()
    console.log(`Sua frase original foi: ${mensagem}
    ${mensagem} possui ${totalLetras} letras
    Exibido em maiúscula: ${maiuscula}`)
    console.log(totalLetras, maiuscula)
}

console.log(tamanhoMensagem("batatinha frita"))

//3.
function somar(numero1, numero2){
    const somatorio = numero1 + numero2
    return(somatorio)
}

//somar(3, 5)
  
function subtrair(numero1, numero2){
    const subtracao = numero1 - numero2
    return(subtracao)
}

//subtrair(2, 1)
  
function multiplicar(numero1, numero2){
    const multiplicacao = numero1 * numero2
    return(multiplicacao)
}

//multiplicar(3, 5)
  
function dividir(numero1, numero2){
    const divisao = numero1 / numero2
    return(divisao)
}

//dividir(2, 2)

const primeiroNumero = Number(prompt("Digite o primeiro número"))
const segundoNumero = Number(prompt("Digite o segundo número"))

console.log(`Números inseridos: ${primeiroNumero} e ${segundoNumero}
Soma = ${somar(primeiroNumero, segundoNumero)}
Diferença = ${subtrair(primeiroNumero, segundoNumero)}
Multiplicação = ${multiplicar(primeiroNumero, segundoNumero)}
Divisão = ${dividir(primeiroNumero, segundoNumero)}`)

//Desafio
//1. a e b


function imprime(algumaCoisa){
    console.log(algumaCoisa)  
}
        
function calcula(numero1, numero2){
    const soma = numero1 + numero2
    imprime(soma)
}
  
console.log(calcula(2, 3))
