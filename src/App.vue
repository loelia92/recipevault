<template>
  <div>
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/add">Add Recipe</RouterLink>
      <RouterLink to="/recipe">Recipe Details</RouterLink>
      <RouterLink to="/favorites">Favorites</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 20px;
  padding: 15px;
  background-color: #f5f5f5;
}
</style>
