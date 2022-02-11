import { connection } from "../connection";

export const selectAllProducts = async () => {
  const result = await connection("labecommerce_products")
  return result
}