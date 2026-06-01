<script setup>
import { useRecipesStore } from '../stores/recipes'

const recipesStore = useRecipesStore()
</script>

<template>
  <div class="container">
    <h1>Favorite Recipes</h1>

    <p class="subtitle">This page will be used to save favorite recipes later.</p>

    <div class="recipe-list">
      <div v-for="recipe in recipesStore.recipes" :key="recipe.id" class="recipe-card">
        <h3>{{ recipe.title }}</h3>
        <p>{{ recipe.ingredients }}</p>
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
  font-family: 'Lucida Calligraphy', cursive;
  font-size: 38px;
}

.subtitle {
  text-align: center;
  color: #52525b;
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

.recipe-card h3 {
  color: #9333ea;
  font-family: 'Trebuchet MS', sans-serif;
  font-size: 22px;
}
</style>
