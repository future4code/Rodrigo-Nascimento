import { Request, Response } from "express"
import { RecipeDatabase } from "../data/RecipeDatabase"
import { Authenticator } from "../services/Authenticator"

export const deleteRecipe = async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const token = req.headers.authorization
    const { id } = req.params

    if (!token || !id) {
      codeError = 422
      throw new Error("Informe as informações de 'token' e 'id'")
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    const recipe = new RecipeDatabase()
    const findRecipe = await recipe.findRecipe()

    const data = JSON.parse(JSON.stringify(findRecipe))

    const validate = data.filter((recipe: any) => {
      if (recipe.id === id) {
        return recipe
      }
    })

    if (!validate[0]) {
      codeError = 409
      throw new Error("Receita não encontrada. Informe um id válido")
    }

    if (validate[0].user_id === tokenData.id || tokenData.role === "ADMIN") {
      const deleteRecipe = await recipe.deleteRecipe(id)
      res.status(200).send("Receita deletada.")
    } else {
      codeError = 422
      throw new Error("Só donos da própria receita ou administradores tem permissão para isso.")
    }

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
}