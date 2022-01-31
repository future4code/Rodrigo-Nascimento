export type Usuario = {
  nome: string,
  cpf: string,
  dataNasc: string,
  saldo: number,
  extrato?: Transacao[]
}

export type Transacao = {
  valor: number,
  data: string,
  descricao: string
}

export const clientes: Usuario[] = [
  {
    nome: "Rodrigo",
    cpf: "063.879.443-10",
    dataNasc: "25/10/1986",
    saldo: 1000,
    extrato: [
      {
        valor: 10,
        data: "01/01/2022",
        descricao: "sorvete"
      }
    ]
  },
  {
    nome: "Karen",
    cpf: "067.500.111-10",
    dataNasc: "07/01/1990",
    saldo: 100,
    extrato: [
      {
        valor: 2000,
        data: "04/01/2021",
        descricao: "melancia"
      }
    ]
  },
  {
    nome: "Soraia",
    cpf: "987.741.888-10",
    dataNasc: "07/05/1992",
    saldo: 150,
    extrato: [
      {
        valor: 500,
        data: "10/02/2020",
        descricao: "manga"
      }
    ]
  }
]