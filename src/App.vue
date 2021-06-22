<template>
  <div id="app">
    <div>
      <router-link to="/">Products</router-link>
      |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>


<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    background-color: $primary;
  }
</style>
