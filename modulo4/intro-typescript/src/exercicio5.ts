//5
function checaRenovacaoRG() {
  const anoAtual: number = 2021
  const anoNascimento: number = 1986
  const anoEmissao: number = 2005
  const idade: number = anoAtual - anoNascimento
  const tempoCarteira: number = anoAtual - anoEmissao

  const cond1: boolean = idade <= 20 && tempoCarteira >= 5
  const cond2: boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
  const cond3: boolean = idade > 50 && tempoCarteira >= 15

  return (cond1 || cond2 || cond3)
}

console.log(checaRenovacaoRG())