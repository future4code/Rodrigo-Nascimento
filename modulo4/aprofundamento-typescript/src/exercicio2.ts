//2.

//a. entrada: um array de números; saída: um objeto

//b.

function obterEstatisticas(numeros: number[]) {

  const numerosOrdenados: number[] = numeros.sort(
      (a, b) => a - b
  )

  let soma: number = 0

  for (let num of numeros) {
      soma += num
  }

  const estatisticas: {maior: number, menor: number, media: number} = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}

//c.

type AmostraDeDados = {
  numeros: number[],
  obterEstatisticas: {numeros: number[]},
}

console.log(obterEstatisticas([1, 4, 3, 8, 2]))