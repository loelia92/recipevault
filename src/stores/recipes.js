import { defineStore } from 'pinia'

const savedRecipes = localStorage.getItem('recipes')

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: savedRecipes
      ? JSON.parse(savedRecipes)
      : [
          {
            id: 1,
            title: 'Chicken Alfredo',
            ingredients: 'Chicken, Pasta, Cream',
            instructions: 'Cook pasta, cook chicken, then mix together.',
          },
          {
            id: 2,
            title: 'Pancakes',
            ingredients: 'Flour, Milk, Eggs',
            instructions: 'Mix ingredients and cook on a pan.',
          },
          {
            id: 3,
            title: 'Chocolate Cake',
            ingredients: 'Flour, Cocoa Powder, Sugar',
            instructions: 'Mix ingredients and bake.',
          },
        ],
  }),

  getters: {
    totalRecipes: (state) => state.recipes.length,
  },

  actions: {
    saveRecipes() {
      localStorage.setItem('recipes', JSON.stringify(this.recipes))
    },

    addRecipe(recipe) {
      this.recipes.push({
        id: Date.now(),
        ...recipe,
      })

      this.saveRecipes()
    },

    deleteRecipe(id) {
      this.recipes = this.recipes.filter((recipe) => recipe.id !== id)

      this.saveRecipes()
    },

    updateRecipe(id, updatedRecipe) {
      const recipe = this.recipes.find((recipe) => recipe.id === id)

      if (recipe) {
        recipe.title = updatedRecipe.title
        recipe.ingredients = updatedRecipe.ingredients
        recipe.instructions = updatedRecipe.instructions

        this.saveRecipes()
      }
    },
  },
})
