//Exercício
//1.

//a. process.argv[posição a partir do 2]

//b.

const nome = String(process.argv[2])

const idade = Number(process.argv[3])

if (typeof nome === undefined || typeof idade !== Number() ) {

  console.log("Você precisa digitar dois parâmetros. Uma string e um número")

} else {

  console.log("\x1b[40m\x1b[34m", `Olá, ${nome}! Você tem ${idade} anos`, "\x1b[0m")

  //c

  console.log("\x1b[44m\x1b[30m", `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7} anos`, "\x1b[0m")

}




