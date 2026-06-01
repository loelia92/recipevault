<script setup>
import { ref } from 'vue'
import { useRecipesStore } from '../stores/recipes'

const recipesStore = useRecipesStore()

const title = ref('')
const ingredients = ref('')
const instructions = ref('')

function saveRecipe() {
  if (!title.value || !ingredients.value || !instructions.value) {
    alert('Please fill out all fields.')
    return
  }

  recipesStore.addRecipe({
    title: title.value,
    ingredients: ingredients.value,
    instructions: instructions.value,
  })

  title.value = ''
  ingredients.value = ''
  instructions.value = ''

  alert('Recipe added!')
}
</script>

<template>
  <div class="container">
    <h1>Add Recipe</h1>

    <form @submit.prevent="saveRecipe">
      <input v-model="title" type="text" placeholder="Recipe Title" />

      <br /><br />

      <textarea v-model="ingredients" placeholder="Ingredients"></textarea>

      <br /><br />

      <textarea v-model="instructions" placeholder="Instructions"></textarea>

      <br /><br />

      <button type="submit">Save Recipe</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

input,
textarea {
  width: 300px;
  padding: 8px;
}

button {
  padding: 8px 12px;
}
</style>
