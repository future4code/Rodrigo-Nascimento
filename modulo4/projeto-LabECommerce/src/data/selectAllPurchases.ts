import { connection } from "../connection"

export const selectAllPurchases = async (): Promise<any[]> => {
  const result = await connection("labecommerce_purchases")
      .select()
      .join("labecommerce_users", "user_id", "labecommerce_users.id")
      .join("labecommerce_products", "product_id", "labecommerce_products.id")
  return result
}