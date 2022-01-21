function nomeEIdade(nome: string, idade: string): string{
 const separaIdade = idade.split("/")

 return `Olá me chamo ${nome}, nasci no dia ${separaIdade[0]} do mês de ${separaIdade[1]} do ano de ${separaIdade[2]}`

}

console.log(nomeEIdade("rodrigo", "25/10/1986"))