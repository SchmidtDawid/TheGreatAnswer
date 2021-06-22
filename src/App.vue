<template>
  <div id="app">
<!--    <div>-->
<!--      <router-link to="/">Products</router-link>-->
<!--      |-->
<!--      <router-link to="/login">Login</router-link>-->
<!--    </div>-->
    <router-view />
  </div>
</template>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap');

  #app {
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $black
  }

  body {
    background-color: $mainBackground;
  }
</style>
