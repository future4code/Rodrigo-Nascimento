import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { clientes } from "./data"

const app: Express = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Servidor rodando em http://localhost:${address.port}`)
  } else {
    console.error(`Falha ao iniciar o servidor`)
  }
})

app.get("/clientes", (req: Request, res: Response) => {
  res.status(200).send({ resultado: clientes })
})

app.get("/cliente", (req: Request, res: Response) => {
  let codeError = 400
  try {
    const cpf: string = req.query.cpf as string
    let guardaCliente: number | undefined

    const verificaLetra = /[a-zA-Z]/
    const digitoCpf = /\d{3}\.\d{3}\.\d{3}\-\d{2}/

    if (!cpf || !digitoCpf.test(cpf) || verificaLetra.test(cpf)) {
      codeError = 401
      throw new Error("CPF inválido")
    }

    const retornaSaldo = clientes.filter((cliente) => {
      if (cpf === cliente.cpf) {
        guardaCliente = cliente.saldo
        guardaCliente
      }
    })

    if (guardaCliente === undefined) {
      codeError = 401
      throw new Error("CPF não cadastrado")
    }

    res.status(200).send({ saldo: guardaCliente })

  } catch (error: any) {
    res.status(codeError).send({ mensagem: error.message })

  }
})

app.post("/criar", (req: Request, res: Response) => {
  let codeError = 400
  try {
    const nome: string = req.body.nome
    const cpf: string = req.body.cpf
    const dataNasc: string = req.body.dataNasc
    const saldo: number = 0

    function comparaIdade(data: string) {
      const dataSemBarra = data.split("/")
      const converteIdade = new Date(Number(dataSemBarra[2]), Number(dataSemBarra[1]) - 1, Number(dataSemBarra[0])).getTime()
      const dataAtual = new Date().getTime()
      return Math.floor(((dataAtual - converteIdade) / 1000 / 60 / 60 / 24 / 365))
    }

    if (comparaIdade(dataNasc) < 18) {
      codeError = 401
      throw new Error("Cliente menor de idade");
    }

    const verificaLetra = /[a-zA-Z]/
    const digitoCpf = /\d{3}\.\d{3}\.\d{3}\-\d{2}/

    if (verificaLetra.test(cpf) || !digitoCpf.test(cpf)) {
      codeError = 401
      throw new Error("CPF inválido")
    }

    const comparaCpf = clientes.filter((cliente) => {
      if (cliente.cpf === cpf) {
        codeError = 401
        throw new Error("CPF já cadastrado")
      }
    })

    clientes.push({ nome, cpf, dataNasc, saldo })

    res.status(200).send({ resultado: nome, cpf, dataNasc })

  } catch (error: any) {
    res.status(codeError).send({ mensagem: error.message })

  }
})

app.post("/pagamento", (req: Request, res: Response) => {
  let codeError = 400
  try {
    let data: string = req.body.data
    const descricao: string = req.body.descricao
    const valor: number = req.body.valor
    const cpf: string = req.body.cpf
    const dataHoje = new Date().toLocaleDateString("pt-BR")
    let pagamentoCliente
    let saldoCliente: number | undefined

    for (let i = 0; i < clientes.length; i++) {
      if (clientes[i].cpf === cpf) {
        if (data === undefined) {
          data = dataHoje
        }
        clientes[i].extrato?.push({ valor, data, descricao })
        pagamentoCliente = clientes[i]
        saldoCliente = clientes[i].saldo as number
      }
    }

    if (saldoCliente as any < valor) {
      codeError = 400
      throw new Error("Saldo insuficiente")
    }

    if (pagamentoCliente === undefined) {
      codeError = 401
      throw new Error("Cliente não encontrado")
    }

    res.status(200).send({ resultado: clientes })

  } catch (error: any) {
    res.status(codeError).send({ mensagem: error.message })
  }
})

app.post("/transferir", (req: Request, res: Response) => {
  let codeError = 400
  try {
    const nome: string = req.body.nome
    const cpf: string = req.body.cpf
    const valor: number = req.body.valor
    const nomeDest: string = req.body.nomeDest
    const cpfDest: string = req.body.cpfDest
    const data = new Date().toLocaleDateString("pt-BR")
    let guardaRemetente
    let guardaDestinatario
    let guardaSaldoRemetente: undefined | number

    if (!nome || !cpf || !valor || !nomeDest || !cpfDest) {
      codeError = 401
      throw new Error("Dados inválidos")
    }

    const verificaRemetente = clientes.filter((remetente) => {
      if (cpf === remetente.cpf && nome === remetente.nome) {
        guardaRemetente = remetente
        guardaSaldoRemetente = remetente.saldo
        remetente.saldo = remetente.saldo - valor
        remetente.extrato?.push({ valor: valor, data: data, descricao: `Transferência para ${nomeDest}` })
      }
    })

    const verificaDestinatario = clientes.filter((receptor) => {
      if (cpfDest === receptor.cpf && nomeDest === receptor.nome) {
        guardaDestinatario = receptor
        receptor.saldo = receptor.saldo + valor
        receptor.extrato?.push({ valor: valor, data: data, descricao: `Recibo de transferência de ${nome}` })
      }
    })

    if (guardaSaldoRemetente as number < valor) {
      codeError = 400
      throw new Error("Saldo insuficiente")
    }

    if (guardaRemetente && guardaDestinatario === undefined) {
      codeError = 401
      throw new Error("Verifique os dados do destinatário e do remetente")
    }

    res.status(200).send({ transferencia: clientes })

  } catch (error: any) {
    res.status(codeError).send({ mensagem: error.message })
  }
})

app.put("/atualizar", (req: Request, res: Response) => {
  let codeError = 400
  try {
    const cpf = req.query.cpf
    let guardaExtrato
    let guardaSaldo
    let novoSaldo

    for (let i = 0; i < clientes.length; i++) {
      if (cpf === clientes[i].cpf) {
        guardaExtrato = clientes[i].extrato
        guardaSaldo = clientes[i].saldo
      }
    }

    const validaData = guardaExtrato?.filter((item) => {
      if (item.data < new Date().toLocaleDateString("pt-BR") || item.descricao !== "Depósito de dinheiro") {
        item.valor
      }
    })

    if (validaData?.length === 0) {
      const saldoSomado: any = guardaExtrato?.map(cliente => cliente.valor).reduce((anterior, atual) => anterior - atual, 0)
      novoSaldo = saldoSomado
    }

    res.status(200).send({ saldo: novoSaldo })

  } catch (error: any) {
    res.status(codeError).send({ mensagem: error.message })
  }
})

app.put("/saldo", (req: Request, res: Response) => {
  let codeError = 400
  try {
    const nome: string = req.body.nome.toUpperCase()
    const cpf: string = req.body.cpf
    const saldo: number = req.body.saldo
    const data: string = req.body.data
    let novoSaldo: any

    if (!nome || !cpf || !data) {
      codeError = 401
      throw new Error("Dados incorretos")
    }

    if (!saldo) {
      codeError = 401
      throw new Error("Saldo inválido")
    }

    const verificaCliente = clientes.filter((cliente) => {
      if (cpf === cliente.cpf && nome === cliente.nome.toUpperCase()) {
        cliente.saldo = saldo
        cliente.extrato?.push({ valor: saldo, data: data, descricao: "Depósito em dinheiro" })
        novoSaldo = cliente
      }
    })

    if (novoSaldo === undefined) {
      codeError = 401
      throw new Error("Cliente não encontrado")
    }

    res.status(200).send({ resultado: clientes })

  } catch (error: any) {
    res.status(codeError).send({ mensagem: error.message })
  }
})






