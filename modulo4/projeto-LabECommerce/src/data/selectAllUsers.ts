import { connection } from "../connection"

export const selectAllUsers = async (): Promise <any[]> => {
  const result = await connection("labecommerce_users")
  return result
}