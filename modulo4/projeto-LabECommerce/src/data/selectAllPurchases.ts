import { connection } from "../connection"

export const selectAllPurchases = async (id: string): Promise<any[]> => {
  const result = await connection("labecommerce_purchases")
    .select("product_id",
      "labecommerce_products.name",
      "price",
      "quantity",
      "total_price",
      "user_id")
    .join("labecommerce_users", "user_id", "labecommerce_users.id")
    .join("labecommerce_products", "product_id", "labecommerce_products.id")
    .where("user_id", id)
  return result
}