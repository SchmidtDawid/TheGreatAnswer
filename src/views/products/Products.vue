<template>
  <div class="proucts">
    <Navigation />
    <div class="products-grid">
      <product-item
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </div>
  </div>
</template>


<script>
  import Navigation from '@/components/Navigation';
  import { mapActions, mapGetters } from 'vuex';
  import ProductItem from '@/components/ProductItem';

  export default {
    components: { ProductItem, Navigation },
    data() {
      return {
        productss: {}
      };
    },
    computed: {
      ...mapGetters({
        products: 'getProducts',
      })
    },
    methods: {
      ...mapActions(['fetchProducts'])
    },
    created() {
      this.fetchProducts();
    }
  };
</script>

<style lang="scss" scoped>
  .products-grid {
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 24px;
    background-color: $mainBackground;
  }
</style>
