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
  justify-content: center;
  gap: 25px;
  padding: 18px;
  background: linear-gradient(90deg, #c084fc, #a855f7);
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
}

.nav a:hover {
  text-decoration: underline;
}
</style>
