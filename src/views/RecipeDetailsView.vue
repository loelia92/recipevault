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
    <div class="card">
      <h1>Recipe Details / Edit Recipe</h1>

      <label>Select a recipe:</label>
      <select v-model="selectedRecipeId" @change="loadRecipe">
        <option value="">Choose recipe</option>
        <option v-for="recipe in recipesStore.recipes" :key="recipe.id" :value="recipe.id">
          {{ recipe.title }}
        </option>
      </select>

      <div v-if="selectedRecipeId">
        <label>Title</label>
        <input v-model="title" type="text" placeholder="Recipe title" />

        <label>Ingredients</label>
        <textarea v-model="ingredients" placeholder="Ingredients"></textarea>

        <label>Instructions</label>
        <textarea v-model="instructions" placeholder="Instructions"></textarea>

        <button @click="updateRecipe">Update Recipe</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 30px;
  min-height: 100vh;
  background: linear-gradient(180deg, #faf5ff, #f3e8ff);
  font-family: Arial, sans-serif;
}

.card {
  max-width: 500px;
  margin: auto;
  background-color: white;
  padding: 25px;
  border-radius: 18px;
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.2);
}

h1 {
  color: #9333ea;
  text-align: center;
  font-family: 'Lucida Calligraphy', cursive;
  font-size: 34px;
}

label {
  display: block;
  margin-top: 15px;
  font-weight: bold;
  color: #3f3f46;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  border: 1px solid #d8b4fe;
  border-radius: 8px;
}

textarea {
  height: 90px;
}

button {
  margin-top: 18px;
  padding: 10px 14px;
  background-color: #9333ea;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #7e22ce;
}
</style>
