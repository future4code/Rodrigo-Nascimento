import { Request, Response } from "express"
import { RecipeDatabase } from "../data/RecipeDatabase"
import { Authenticator } from "../services/Authenticator"

export const getRecipeById = async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const token = req.headers.authorization
    const { id } = req.params

    if (!token || !id) {
      codeError = 422
      throw new Error("Informe o 'token' e o 'id' corretamente.")
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    const recipeDatabase = new RecipeDatabase()
    const recipe = await recipeDatabase.findRecipeById(id)

    if (!recipe) {
      codeError = 422
      throw new Error("Receita não encontrada.")
    }

    res.status(200).send({ recipe })

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
}