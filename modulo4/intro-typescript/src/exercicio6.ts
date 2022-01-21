//6
// Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:

// a) A soma desses números

// b) A subtração desses números

// c) A multiplicação desses números

// d) Qual deles é o maior

// Você pode fazer todas as operações na mesma função.

// Como estamos usando o TypeScript, devemos passar para o código o tipo de parâmetro que é esperado pela função, afinal, no javascript, nada nos impede de passar parâmetros sem especificação. É como diz aquela piada de programador:

function recebeNumeros(num1: number, num2: number) {

  const soma: number = num1 + num2
  const subtracao: number = num1 - num2
  const multiplicacao: number = num1 * num2

  console.log(`Soma dos números: ${soma}, Subtração: ${subtracao}, Multiplicação: ${multiplicacao}}`)
}

recebeNumeros(2, 6)