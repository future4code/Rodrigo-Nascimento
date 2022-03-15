import { validarPersonagem } from "../src"

test("Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, '' ", () => {
  const result = validarPersonagem({
    nome: "",
    vida: 1,
    defesa: 1,
    forca: 1
  })

  expect(result).toBe(false)
})

test("Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero.", () => {
  const result = validarPersonagem({
    nome: "Ulala",
    vida: 0,
    defesa: 1,
    forca: 1
  })

  expect(result).toBe(false)
})

test("Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero.", () => {
  const result = validarPersonagem({
    nome: "Ulala",
    vida: 1,
    defesa: 1,
    forca: 0
  })

  expect(result).toBe(false)
})

test("Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero.", () => {
  const result = validarPersonagem({
    nome: "Ulala",
    vida: 1,
    defesa: 0,
    forca: 1
  })
  
  expect(result).toBe(false)
})

test("Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo", () => {
  const result = validarPersonagem({
    nome: "Ulala",
    vida: -1,
    defesa: 1,
    forca: 1
  })

  expect(result).toBe(false)
})

test("Crie um teste que verifique o comportamento da função com um personagem com as informações validas", () => {
  const result = validarPersonagem({
    nome: "Ulala",
    vida: 10,
    defesa: 20,
    forca: 30
  })

  expect(result).toBe(true)
})