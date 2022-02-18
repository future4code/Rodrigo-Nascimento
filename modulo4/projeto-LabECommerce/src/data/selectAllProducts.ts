import { connection } from "../connection";

export const selectAllProducts = async (): Promise<string[]> => {
  const result = await connection("labecommerce_products")
  return result
}