//1a. Crie uma interface para representar os personagens

export interface Personagem {
  nome: string,
  vida: number,
  defesa: number,
  forca: number
}

//1b. Crie uma função validateCharacter que valide as informações de um personagem (devolvendo true se for válida ou false caso contrário). Nenhuma das propriedades pode ser vazia. Em relação a vida, defesa e força, elas só podem possuir valores maiores que 0.

export const validarPersonagem = (input: Personagem) => {
  if(input.vida <= 0 || input.defesa <= 0 || input.forca <= 0 || input.nome === ""){
    return false
  } else if(!input){
    return true
  } else {
    return true
  }
}

// Agora, vamos implementar a função (`performAttack`) que represente o ataque de um personagem a outro. Ela deve receber dois parâmetros: `attacker` (atancante) e `defender` (defensor) que são do tipo `Character`. 

// O comportamento dela deve ser:
// - Caso algum dos personagens esteja inválido, a função deve indicar um erro: `Invalid Character`
// - Ela deve retirar do `defender` o valor final do ataque (`(força do attacker) - (defesa do defender)`)
// - Caso a defesa do `defender` seja maior do que a força do `attacker`, nenhuma vida do `defender` deve ser retirada
// - Você deve fazer duas implementações dessas funções


// *a. Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação*

const atacarPersonagem = (atacante: Personagem, defensor: Personagem) => {
  if(!validarPersonagem(atacante) || !validarPersonagem(defensor)) {
    throw new Error("Personagem inválido")
  }

  if(atacante.forca > defensor.defesa){
    defensor.vida -= atacante.forca - defensor.defesa 
  }
}
// *b. Implemente a função utilizando inversão de dependências*

const atacarPersonagem2 = (atacante: Personagem, defensor: Personagem, validaPersonagem: (input: Personagem) => boolean) => {
  if(!validaPersonagem(atacante) || !validaPersonagem(defensor)){
    throw new Error("Personagem inválido")
  }
  if(atacante.forca > defensor.defesa){
    defensor.vida -= atacante.forca - defensor.defesa
  }
}

// *c. Explique, com as suas palavras, as diferenças entre as duas implementações*

//A ideia é reduzir a dependência da função crianda inicialmente para que, quando ela for alterada, não seja necessário mexer no código por ele ter algum tipo de dependência com a primeira.

