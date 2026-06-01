<script setup>
import { ref } from 'vue'
import { useRecipesStore } from '../stores/recipes'

const recipesStore = useRecipesStore()

const selectedRecipeId = ref('')
const title = ref('')
const ingredients = ref('')
const instructions = ref('')

function loadRecipe() {
  const recipe = recipesStore.recipes.find((item) => item.id === Number(selectedRecipeId.value))

  if (recipe) {
    title.value = recipe.title
    ingredients.value = recipe.ingredients
    instructions.value = recipe.instructions
  }
}

function updateRecipe() {
  recipesStore.updateRecipe(Number(selectedRecipeId.value), {
    title: title.value,
    ingredients: ingredients.value,
    instructions: instructions.value,
  })

  alert('Recipe updated!')
}
</script>

<template>
  <div class="container">
    <h1>Recipe Details / Edit Recipe</h1>

    <label>Select a recipe:</label>
    <select v-model="selectedRecipeId" @change="loadRecipe">
      <option value="">Choose recipe</option>
      <option v-for="recipe in recipesStore.recipes" :key="recipe.id" :value="recipe.id">
        {{ recipe.title }}
      </option>
    </select>

    <div v-if="selectedRecipeId">
      <br />

      <input v-model="title" type="text" placeholder="Recipe title" />

      <br /><br />

      <textarea v-model="ingredients" placeholder="Ingredients"></textarea>

      <br /><br />

      <textarea v-model="instructions" placeholder="Instructions"></textarea>

      <br /><br />

      <button @click="updateRecipe">Update Recipe</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

input,
textarea,
select {
  width: 300px;
  padding: 8px;
}

button {
  padding: 8px 12px;
}
</style>
