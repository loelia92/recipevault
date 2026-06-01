<script setup>
import { useRecipesStore } from '../stores/recipes'

const recipesStore = useRecipesStore()
</script>

<template>
  <div>
    <h1>RecipeVault</h1>

    <p>Welcome to RecipeVault!</p>

    <h2>Total Recipes: {{ recipesStore.totalRecipes }}</h2>

    <h2>Recipes</h2>

    <ul>
      <li v-for="recipe in recipesStore.recipes" :key="recipe.id">
        {{ recipe.title }}
      </li>
    </ul>
  </div>
</template>
