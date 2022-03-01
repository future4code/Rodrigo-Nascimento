import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

  public async createRecipe(recipe: Recipe) {
    try {
      const newRecipe = await BaseDatabase.connection("cookenu_recipes")
        .insert({
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

  public async findRecipe(title?: string, description?: string) {
    try {
      if (title && description) {
        const recipe = await BaseDatabase.connection("cookenu_recipes")
          .where({ title, description })

        return recipe[0]

      } else {
        const recipe = await BaseDatabase.connection("cookenu_recipes")

        return recipe
      }
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async findRecipeById(id: string) {
    try {
      const recipe = await BaseDatabase.connection("cookenu_recipes")
        .select("id", "title", "description", "created_at as createdAt")
        .where({ id })
      return recipe[0]

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async editRecipe(id: string, title: string, description: string, createdAt: string) {
    try {
      const recipe = await BaseDatabase.connection("cookenu_recipes")
        .where({ id })
        .update({ title, description, created_at: createdAt })
      return recipe

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}