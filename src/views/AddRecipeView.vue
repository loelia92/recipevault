<script setup>
import { ref } from 'vue'
import { useRecipesStore } from '../stores/recipes'

const recipesStore = useRecipesStore()

const title = ref('')
const ingredients = ref('')
const instructions = ref('')
const image = ref('')

function saveRecipe() {
  if (!title.value || !ingredients.value || !instructions.value) {
    alert('Please fill out all fields.')
    return
  }

  recipesStore.addRecipe({
    title: title.value,
    ingredients: ingredients.value,
    instructions: instructions.value,
    image: image.value,
  })

  title.value = ''
  ingredients.value = ''
  instructions.value = ''
  image.value = ''

  alert('Recipe added!')
}
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>Add Recipe</h1>

      <form @submit.prevent="saveRecipe">
        <label>Recipe Title</label>
        <input v-model="title" type="text" placeholder="Recipe Title" />

        <label>Ingredients</label>
        <textarea v-model="ingredients" placeholder="Ingredients"></textarea>

        <label>Instructions</label>
        <textarea v-model="instructions" placeholder="Instructions"></textarea>

        <label>Image URL</label>
        <input v-model="image" type="text" placeholder="Paste image URL here" />

        <button type="submit">Save Recipe</button>
      </form>
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
  text-align: center;
  color: #9333ea;
  font-family: 'Lucida Calligraphy', cursive;
  font-size: 38px;
}

label {
  display: block;
  margin-top: 15px;
  font-weight: bold;
  color: #3f3f46;
}

input,
textarea {
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
