import { UserDatabase } from "../data/UserDatabase";
import { LoginInputDTO, SignupInputDTO, User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) { }

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

  followUser = async (id: string, token: string) => {
    if (id === ":id") {
      throw new Error("É necessário informar um 'id'")
    }

    if (!token) {
      throw new Error("É necessário passar um 'token'")
    }

    if (token.length < 187) {
      throw new Error("Token inválido")
    }
    
    const tokenData = this.authenticator.getTokenData(token)

    const registeredUser = await this.userDatabase.findUserById(tokenData.id)

    const registeredFollower = await this.userDatabase.findUserById(id)

    if (!registeredUser || !registeredFollower) {
      throw new Error("Usuário não encontrado")
    }

    if (tokenData.id === id) {
      throw new Error("É necessário passar 'ids' diferentes para pedidos de amizade")
    }

    const isAlreadyAFriend = await this.userDatabase.findUserFriends(tokenData.id, id)

    if (isAlreadyAFriend) {
      throw new Error("Essa amizade já existe")
    }

    const userToFollow = await this.userDatabase.followUser(tokenData.id, id)

    const followedUser = await this.userDatabase.followUser(id, tokenData.id)
  }

  unfollowUser = async (id: string, token: string) => {
    if (id === ":id") {
      throw new Error("É necessário informar um 'id'")
    }

    if (!token) {
      throw new Error("É necessário passar um 'token'")
    }

    const tokenData = this.authenticator.getTokenData(token)

    if (token === "invalid token" || token.length !== 187 || token === "invalid signature") {
      throw new Error("Token inválido")
    }

    const registeredUser = await this.userDatabase.findUserById(tokenData.id)
    
    const registeredFollower = await this.userDatabase.findUserById(id)
    
    if (!registeredUser || !registeredFollower) {
      throw new Error("Usuário não encontrado")
    }

    if (tokenData.id === id) {
      throw new Error("É necessário passar 'ids' diferentes para desfazer amizade")
    }

    const isAlreadyAFriend = await this.userDatabase.findUserFriends(tokenData.id, id)

    if (!isAlreadyAFriend) {
      throw new Error("Essa amizade não existe")
    }

    const userToUnfollow = await this.userDatabase.unfollowUser(tokenData.id, id)

    const unfollowedUser = await this.userDatabase.unfollowUser(id, tokenData.id)

  }

  feed = async (token: string, page: string) => {
    if(!token){
      throw new Error("É necessário passar um 'token'")
    }
        
    if(token.length < 187){
      throw new Error("Token inválido")
    }

    if(!page) {
      throw new Error("É necessário passar o valor de 'page'")
    }

    const resultsPerPage = 5

    const offset = resultsPerPage * (Number(page) -1)
    
    const tokenData = this.authenticator.getTokenData(token)

    const registeredUser = await this.userDatabase.findUserById(tokenData.id)

    if(!registeredUser){
      throw new Error("Usuário não encontrado. Verifique as informações passadas via 'token'")
    }

    const result = await this.userDatabase.userFeed(tokenData.id, offset, resultsPerPage)

    return result
  }
}