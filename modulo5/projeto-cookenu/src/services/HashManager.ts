import * as bcryptjs from "bcryptjs"

export class HashManager {
  //criptografar a senha do usuário pra enviar ao banco de dados
  public async hash(data: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcryptjs.genSalt(rounds)
    return bcryptjs.hash(data, salt)
  }
  //compara a senha criptografada para saber se a senha bate com a do banco de dados
  public async compare(data: string, hash: string): Promise<boolean> {
    return bcryptjs.compare(data, hash)
  }
}
