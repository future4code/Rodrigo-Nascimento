import * as bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

const hash = async (plainText: string): Promise<string> => {
  const rounds = Number(process.env.BCRYPT_COST)
  const salt = await bcrypt.genSalt(rounds)
  const result = await bcrypt.hash(plainText, salt)
  return result
}

const compare = async (s: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(s, hash)
}