<template>
  <div class="proucts">
    <Navigation />
    <div class="page-container">
      <div class="products-grid">
        <product-item
            v-for="product in products.items"
            :key="product.id"
            :product="product"
        />
      </div>
    </div>
  </div>
</template>


<script>
  import Navigation from '@/components/Navigation';
  import { mapActions, mapState } from 'vuex';
  import ProductItem from '@/components/ProductItem';

  export default {
    components: { ProductItem, Navigation },
    data() {
      return {
        productss: {}
      };
    },
    computed: {
      ...mapState(['products'])
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
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    padding: 24px;
    background-color: $mainBackground;

    @media (min-width: $s) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: $l) {
      padding: 40px 108px;
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: $xl) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
