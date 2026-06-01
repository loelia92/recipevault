<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> | <RouterLink to="/add">Add Recipe</RouterLink> |
      <RouterLink to="/recipe">Recipe Details</RouterLink> |
      <RouterLink to="/favorites">Favorites</RouterLink>
    </nav>

    <hr />

    <RouterView />
  </div>
</template>
