import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

  public async createRecipe(recipe: Recipe) {
    try {
      const newRecipe = await BaseDatabase.connection("cookenu_recipes").insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        created_at: recipe.getDate(),
        user_id: recipe.getUserId()
      })
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async findRecipeByName(title: string, description: string) {
    try {
      const recipe = await BaseDatabase.connection("cookenu_recipes").where({title, description})
      return recipe[0]
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)   
    }
  }
}