import { Request, Response } from "express"
import { RecipeDatabase } from "../data/RecipeDatabase"
import { Recipe } from "../entities/Recipe"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export const createRecipe = async (req: Request, res: Response) => {
  let codeError = 400
  try {
    const { title, description } = req.body
    const token = req.headers.authorization

    if (!title || !description) {
      codeError = 422
      throw new Error("Informe 'title' e 'description'.")
    }

    if (!token) {
      codeError = 422
      throw new Error("Informe um token válido.")
    }

    const recipeDatabase = new RecipeDatabase()
    const recipe = await recipeDatabase.findRecipeByName(title, description)

    if (recipe) {
      codeError = 409
      throw new Error("Receita já existe.")
    }

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const newDate = new Date()
    const date = newDate.toLocaleDateString("pt-BR")

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    const newRecipe = new Recipe(id, title, description, date, tokenData.id)
    await recipeDatabase.createRecipe(newRecipe)

    res.status(201).send({ message: "Receita criada com sucesso!" })

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
}