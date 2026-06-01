<script setup>
import { useRecipesStore } from '../stores/recipes'

const recipesStore = useRecipesStore()
</script>

<template>
  <div class="container">
    <h1>RecipeVault</h1>

    <p class="subtitle">Save and organize your favorite recipes.</p>

    <h2>Total Recipes: {{ recipesStore.totalRecipes }}</h2>

    <div class="recipe-list">
      <div v-for="recipe in recipesStore.recipes" :key="recipe.id" class="recipe-card">
        <img v-if="recipe.image" :src="recipe.image" alt="Recipe image" />

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
  padding: 30px;
  min-height: 100vh;
  background: linear-gradient(180deg, #faf5ff, #f3e8ff);
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #9333ea;
  margin-bottom: 10px;
  font-family: 'Lucida Calligraphy', cursive;
  font-size: 42px;
}

.subtitle {
  text-align: center;
  color: #52525b;
}

h2 {
  text-align: center;
  color: #7e22ce;
  margin-top: 20px;
}

.recipe-list {
  display: flex;
  gap: 20px;
  margin-top: 25px;
  flex-wrap: wrap;
  justify-content: center;
}

.recipe-card {
  background-color: white;
  border: 1px solid #d8b4fe;
  padding: 18px;
  width: 250px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.15);
}

.recipe-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.recipe-card h3 {
  color: #9333ea;
  font-family: 'Trebuchet MS', sans-serif;
  font-size: 22px;
}

button {
  margin-top: 12px;
  padding: 8px 12px;
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
