```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salario = 2000
  const comissao = (valorTotalVendas * 0.05) + qtdeCarrosVendidos * 100 
  const valorTotal = comissao + salario
  return valorTotal
} 
```