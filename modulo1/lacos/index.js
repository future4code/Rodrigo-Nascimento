/*
1.
repetindo o processo até i ser menor que 5 e imprimindo o total de valor(valor somado com ele mesmo + i). no final disso.

2.
a. os números maiores que 18 (19,21,23,25,27,30)

b. poderia ser usado outro modo:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

const diferente = []
for(let i = 0; i < lista.length; i++){
  diferente.push(lista[i])
  console.log(i, lista[i])
}

3. imprimiria 4 linhas com asteristicos. com cada nova linhasendo adicionado um asteristico novo
*/

//Exercícios de escrita de código
//1.
const bichosUsuario = prompt("Quantos bichinhos de estimação você tem?")
const pets = []

if (bichosUsuario > 0) {
    for (let repeticao = 0; repeticao < bichosUsuario; repeticao++) {
        pets.push(prompt("Digite o nome do seu pet"))
    }
} else {
    console.log("Que pena! Você pode adotar um pet!")
}

console.log(pets)

//2.
const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//a.
function imprimeArrayOriginal(array) {
    let guardaArray = []
    for (let i = 0; i < arrayOriginal.length; i++) {
        guardaArray.push(arrayOriginal[i])
    }
    return guardaArray
}

imprimeArrayOriginal(arrayOriginal)

//b.
function divideArrayOriginal(array) {
    let guardaArray = []
    for (let i = 0; i < arrayOriginal.length; i++) {
        guardaArray.push(arrayOriginal[i] / 2)
    }
    return guardaArray
}

divideArrayOriginal(arrayOriginal)

//c.
function paresArrayOriginal(array) {
    let guardaArray = []
    for (let numeroPar of arrayOriginal) {
        if (numeroPar % 2 === 0)
            guardaArray.push(numeroPar)
    }
    return guardaArray
}

paresArrayOriginal(arrayOriginal)

//d.
let numero = []

for (let i = 0; i < arrayOriginal.length; i++) {
    numero = arrayOriginal[i]
    console.log(`O elemento do índex ${i} é: ${numero}`)
}

//e.
arrayOriginal.sort(function (a, b) {
    if (a > b) return 1

    if (a < b) return -1

    return 0
})

console.log(arrayOriginal[0], arrayOriginal[arrayOriginal.length - 1])