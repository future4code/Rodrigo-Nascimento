/*Exercícios de interpretação de código

1.

let array
console.log('a. ', array)

será exibido: a. e undefined. 
o array não foi definido (foi criada apenas a variável)

array = null
console.log('b. ', array)

será exibido: b. null
a variável array recebe null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

será exibido: o número total de elementos do array. nesse caso será -> c. 11

let i = 0
console.log('d. ', array[i])

o array não foi definido de forma correta. o certo seria:
let i = [0]
console.log('d. ', i)

array[i+1] = 19
console.log('e. ', array)

array não definido de forma correta

const valor = array[i+6]
console.log('f. ', valor)

array não definido de forma correta

*/

//Exercícios de escrita de código

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

const nome = prompt("Digite o seu nome")
const email = prompt ("Digite o seu email")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)

//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
//a) Imprima no console o array completo

const comidasFavoritas = ["Rabada", "Cuscuz", "Batata", "Bolo", "Milho"]

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

console.log(`Essas são as minhas comidas favoritas:
${comidasFavoritas[0]}
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}`)

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

comidaUsuario = prompt("Qual a sua comida favorita?")
comidasFavoritas[1] = comidaUsuario

console.log(comidasFavoritas)

//3. Faça um programa, seguindo os passos:
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

const listaDeTarefas = []

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

const tarefa1 = prompt("Digite a primeira tarefa que você realiza no seu dia")
listaDeTarefas.push(tarefa1)
const tarefa2 = prompt("Digite a segunda tarefa que você realiza no seu dia")
listaDeTarefas.push(tarefa2)
const tarefa3 = prompt("Digite a terceira tarefa que você realiza no seu dia")
listaDeTarefas.push(tarefa3)

listaDeTarefas = [tarefa1, tarefa2, tarefa3]

//c) Imprima o array no console

console.log(listaDeTarefas)

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

removerTarefa = Number(prompt("Escolha uma tarefa para ser removida. Opções: 0, 1 ou 2"))

//e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(removerTarefa, 1)

//f) Imprima o array no console

console.log(listaDeTarefas)

