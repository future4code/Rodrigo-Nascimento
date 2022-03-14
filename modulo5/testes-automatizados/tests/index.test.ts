import { podeFazerCompra, Usuario } from "../src"

test("Faça um teste com um usuário com o saldo maior do que o valor de compra", () => {
  const usuario: Usuario = {
    nome: "rodrigo",
    saldo: 500
  }
  const resultado = podeFazerCompra(usuario, 100)

  expect(resultado).toEqual({
    nome: "rodrigo",
    saldo: 400
  })
})

test("Faça um teste com um usuário com o saldo igual ao valor de compra", () => {
  const usuario: Usuario = {
    nome: "rodrigo",
    saldo: 200
  }
  const resultado = podeFazerCompra(usuario, 200)

  expect(resultado?.saldo).toEqual(0)
})

test("Faça um teste com um usuário com o saldo menor do que o valor de compra", () => {
  const usuario: Usuario = {
    nome: "rodrigo",
    saldo: 10
  }
  const resultado = podeFazerCompra(usuario, 20)

  expect(resultado).toEqual(undefined)
  })