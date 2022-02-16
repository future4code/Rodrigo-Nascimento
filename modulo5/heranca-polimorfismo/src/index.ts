import { User, Customer, Client, Place, Cliente } from "./classes";

//HERANÇA

//1.
const userRodrigo = new User("1", "rodrigo@email.com", "rodrigo", "123456")

//a.
//Não é possível imprimir a senha

//b.
//Apenas uma vez

//2.
const customerRodrigo = new Customer("2", "rodrigo2@email.com", "rodrigo2", "1234", "147852369")

//a e b.
//Apenas uma vez

//3.

console.log("Email:", userRodrigo.getEmail())
console.log("Id:", userRodrigo.getId())
console.log("Name:", userRodrigo.getName())

console.log("Email:", customerRodrigo.getEmail())
console.log("Id:", customerRodrigo.getId())
console.log("Name:", customerRodrigo.getName())
console.log("Credit Card:", customerRodrigo.getCreditCard())
console.log("Purchase Total:", customerRodrigo.purchaseTotal)

//a. Não é possível imprimir, pois está setado como privado e não tem nenhum método que utilize ela.

//4.
console.log(customerRodrigo.introduceYourself())

//5.
console.log(userRodrigo.introduceYourself())

//POLIMORFISMO
//1.
//a. a função não foi impressa

const cliente: Client = {
  name: "rodrigo",
  registrationNumber: 123456,
  consumedEnergy: 20,
  calculateBill: () => {
    return 2
  }
}

console.log(cliente)

//2.

// const testeErrado = new Place()
//a.
//Não é possível criar uma instância de uma classe abstrata

//b.
//Precisaríamos tirar o abstract que é chamado antes da classe

//3.

const testaCliente = new Cliente("111111")

console.log(testaCliente.getCPF())