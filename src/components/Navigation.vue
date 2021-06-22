<template>
 <nav id="navigation">
   <Logo/>
   <div class="searchBar"></div>
   <div class="filters"></div>
   <div class="user"></div>
 </nav>
</template>

<script>
  import Logo from '@/components/Logo';
  export default {
    name: 'Navigation',
    components: { Logo }
  };
</script>

<style lang="scss">


</style>
