enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type infoFilmes = {
  nome: string,
  ano: number,
  genero: GENERO,
  nota?: number
}

function filmes (filme: infoFilmes): infoFilmes {
  return filme
} 

console.log(filmes({nome: "teste", ano: 2022, genero: GENERO.DRAMA, nota: 20}))