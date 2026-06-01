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
            image:
              'https://www.iheartnaptime.net/wp-content/uploads/2020/12/chicken-fettuccine-alfredo-5.jpg',
          },
          {
            id: 2,
            title: 'Pancakes',
            ingredients: 'Flour, Milk, Eggs',
            instructions: 'Mix ingredients and cook on a pan.',
            image:
              'https://media.airedesantafe.com.ar/p/78882ff2fc65ee34d967a13bc6133934/adjuntos/268/imagenes/003/785/0003785863/1200x0/smart/como-hacer-hot-cakes-la-deliciosa-receta-el-desayuno.png',
          },
          {
            id: 3,
            title: 'Chocolate Cake',
            ingredients: 'Flour, Cocoa Powder, Sugar',
            instructions: 'Mix ingredients and bake.',
            image:
              'https://www.cocinadelirante.com/sites/default/files/images/2023/08/receta-de-pastel-de-chocolate-facil.jpg',
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
        recipe.image = updatedRecipe.image

        this.saveRecipes()
      }
    },
  },
})
