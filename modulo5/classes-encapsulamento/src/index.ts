//1.
//a.
//O método construtor, é o método que será executado no momento da criação de uma instância daquela classe, ou seja, no momento da criação de um objeto. Ele é um conjunto de instruções que deve ser executada a fim de preparar o objeto para ser usado. O método construtor pode, ou não, receber atributos.

//b.
class Transaction {
  private date: string;
  private value: number;
  private description: string;

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }
}

class UserAccount {
  private cpf: string
  private name: string
  private age: number
  private balance: number = 0
  private transactions: Transaction [] = []

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf
     this.name = name
     this.age = age
  }

  public getTransaction() {
    return this.transactions
  }

  public setTransaction(trans: Transaction) {
    this.transactions.push(trans)
  }
}

const rodrigo = new UserAccount("06700077740", "rodrigo", 35)

const transacao = new Transaction("08/10/2022", 500, "dinheiros")

rodrigo.setTransaction(transacao)

console.log(rodrigo.getTransaction())

//1

//c.
//Não conseguimos ter acesso a propriedades privadas de uma classe.

//2.
//a.

// type Transaction = {
//   description: string,
//   value: number,
//   date: string
// }


//3.

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]){
    this.accounts = accounts
  }
}
