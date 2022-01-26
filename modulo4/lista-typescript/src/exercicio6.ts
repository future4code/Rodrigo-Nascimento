const clientes: cliente[] = 
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type cliente = {
  cliente: string,
  saldoTotal: number,
  debitos?: number[]
}

function clientesEmprestimo (clien: cliente[]) {
  const clienteMap = clien.map((cli) => {
    return cli.debitos
  })

  console.log(clienteMap.forEach((e => {
    console.log(e, "isso é e")
  })))

  return clienteMap

  
  
  // return clienteMap.forEach((e =>{
  //   console.log(e)
  // }))

}


console.log(clientesEmprestimo(clientes))

