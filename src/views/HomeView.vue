<script setup>
import { useRecipesStore } from '../stores/recipes'

const recipesStore = useRecipesStore()
</script>

<template>
  <div class="container">
    <h1>RecipeVault</h1>

    <p>Save and organize your favorite recipes.</p>

    <h2>Total Recipes: {{ recipesStore.totalRecipes }}</h2>

    <div class="recipe-list">
      <div v-for="recipe in recipesStore.recipes" :key="recipe.id" class="recipe-card">
        <h3>{{ recipe.title }}</h3>

        <p><strong>Ingredients:</strong></p>
        <p>{{ recipe.ingredients }}</p>

        <p><strong>Instructions:</strong></p>
        <p>{{ recipe.instructions }}</p>

        <button @click="recipesStore.deleteRecipe(recipe.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

h1 {
  text-align: center;
}

.recipe-list {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.recipe-card {
  border: 1px solid #ccc;
  padding: 15px;
  width: 220px;
  border-radius: 5px;
}

button {
  padding: 6px 10px;
  margin-top: 10px;
}
</style>
