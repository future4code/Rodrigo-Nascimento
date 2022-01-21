//Exercício

//2.

const operacao = process.argv[2]

const numero1 = Number(process.argv[3])

const numero2 = Number(process.argv[4])

switch(operacao) {
  case "soma":
    console.log("\x1b[40m\x1b[34m", "Resposta da soma:", numero1 + numero2, "\x1b[0m")
    break;
  case "sub":
    console.log("\x1b[40m\x1b[34m", "Resposta da subtração:", numero1 - numero2, "\x1b[0m")
    break;
  case "mult":
    console.log("\x1b[40m\x1b[34m", "Resposta da multiplicação:", numero1 * numero2), "\x1b[0m"
    break;
  case "div":
    console.log("\x1b[40m\x1b[34m", "Resposta da divisão:", numero1 / numero2, "\x1b[0m")
}

