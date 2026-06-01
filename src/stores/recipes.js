import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: [
      {
        id: 1,
        title: 'Chicken Alfredo',
      },
      {
        id: 2,
        title: 'Pancakes',
      },
      {
        id: 3,
        title: 'Chocolate Cake',
      },
    ],
  }),

  getters: {
    totalRecipes: (state) => state.recipes.length,
  },

  actions: {
    addRecipe(recipe) {
      this.recipes.push(recipe)
    },
  },
})
