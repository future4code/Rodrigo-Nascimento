import { LoginInputDTO, SignupInputDTO } from "../controller/UserController";
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
  ) {}

  signup = async (input: SignupInputDTO) => {
    const { name, email, password } = input

    if (!name || !email || !password) {
      throw new Error("É necessário informar um 'name', 'email' e um 'password'")
    }

    const validEmail = email.indexOf("@")

    if (validEmail === -1) {
      throw new Error("Informe um e-mail válido")
    }

    if (password.length < 6) {
      throw new Error("A senha precisa ter ao menos 6 caracteres")
    }

    const registeredUser = await this.userDatabase.findUserByEmail(email)

    if (registeredUser) {
      throw new Error("Esse e-mail já foi cadastrado")
    }

    const id = this.idGenerator.generate()

    const hashPassword = await this.hashManager.hash(password)

    const user = new User(id, name, email, hashPassword)

    const createUser = await this.userDatabase.createUser(user)

    const token = this.authenticator.generate({ id })

    return token
  }

  login = async (input: LoginInputDTO) => {
    const { email, password } = input

    if (!email || !password) {
      throw new Error("É necessário passar 'email' e password'")
    }

    const user = await this.userDatabase.findUserByEmail(email)

    if (!user) {
      throw new Error("Usuário não cadastrado")
    }

    const passwordIsTrue = await this.hashManager.compare(password, user.password)

    if (!passwordIsTrue) {
      throw new Error("Senha inválida")
    }

    const token = this.authenticator.generate({ id: user.id })

    return token
  }

  followUser = async(id: string, token: string) => {
    const userId = id
    
    if(id === ":id"){
      throw new Error("É necessário informar um 'id'")
    }

    if(!token) {
      throw new Error("É necessário passar um 'token'") 
    }
    
    if(token === "invalid token") {
      throw new Error("Token inválido") 
    }
    
    const registeredUser = await this.userDatabase.findUserById(id)

    if(!registeredUser){
      throw new Error("Usuário não encontrado")
    }

    const tokenData = await this.authenticator.getTokenData(token)
 
    if(tokenData.id === registeredUser.id){
      throw new Error("É necessário passar 'ids' diferentes para pedidos de amizade")
    }

    // const teste = await this.userDatabase.findFollowers()
    // // console.log(teste)

    // const userFilter = teste.filter((user) => {
    //   console.log(user.follower_id)
    // })

    const userToFollow = await this.userDatabase.followUser(tokenData.id, userId)

    const followedUser = await this.userDatabase.followUser(userId, tokenData.id)
  }
}