<template>
  <div id="app">
    <nav>
      <router-link to="/">Post it list !</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: yellow;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: yellow;
}

nav a.router-link-exact-active {
  color: yellow;
  font-size: xx-large;
}
</style>
