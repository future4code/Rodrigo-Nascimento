import { SignupInputDTO } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ){}

  signup = async (input: SignupInputDTO) => {
    //valida os campos passados na requisição
    const { name, email, password } = input
    //joga um erro se os campos faltarem ou forem incorretos
    if(!name || !email || !password){
      throw new Error("É necessário passar um 'name', 'email' e um 'password'")
    }

    const validEmail = email.indexOf("@")

    if(validEmail === -1){
      throw new Error("Informe um e-mail válido")
    }

    if(password.length < 6){
      throw new Error("A senha precisa ter ao menos 6 caracteres")
    }

    //verifica se o usuário existe no banco de dados

    const registeredUser = await this.userDatabase.findUserByEmail(email)
    
    if(registeredUser){
      throw new Error("Esse e-mail já foi cadastrado")
    }
     
    //cria id

    const id = this.idGenerator.generate()

    //criptografa a senha passada

    const hashPassword = await this.hashManager.hash(password)

    //cria usuário no banco de dados
    // pega o model user e insere no banco

    const user = new User(id, name, email, hashPassword)

    const createUser = await this.userDatabase.createUser(user)

    //gera o token e retorna pro usuário

    const token = this.authenticator.generate({id})

    return token
  }
}