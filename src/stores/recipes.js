import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: [
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
    addRecipe(recipe) {
      this.recipes.push({
        id: Date.now(),
        ...recipe,
      })
    },

    deleteRecipe(id) {
      this.recipes = this.recipes.filter((recipe) => recipe.id !== id)
    },
  },
})
