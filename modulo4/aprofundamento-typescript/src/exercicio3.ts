//3.

type Post = {
  autor: string,
  texto: string
}

const posts: Post[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

//a.

const posts2: Post = {
  autor: "Rodrigo",
  texto: "teste 1 2 3"
}

console.log(posts2)

//b.

function buscarPostsPorAutor(posts: {autor: string}[] , autorInformado: string) {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}

console.log(buscarPostsPorAutor)