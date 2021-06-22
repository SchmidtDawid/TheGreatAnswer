<template>
  <div class="proucts">
    <Navigation />
    <h1>This is products page</h1>
<!--    <ul>-->
<!--      <li v-for="product in products" :key="product.id">{{ product.name }}</li>-->
<!--    </ul>-->
  </div>
</template>


<script>
  import Navigation from '@/components/Navigation';
  export default {
    components: { Navigation }
  };
</script>
