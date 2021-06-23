<template>
  <div id="search-filters">
    <Checkbox :checked="products.params.active" label="Active" @toggle="setFilter('active')" />
    <Checkbox :checked="products.params.promo" label="Promo" @toggle="setFilter('promo')" />
  </div>
</template>

<script>
  import Checkbox from '@/components/Checkbox';
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'SearchFilters',
    components: { Checkbox },
    computed: {
      ...mapState(['products'])
    },
    methods: {
      ...mapActions(['setParam', 'fetchProducts']),
      setFilter(param) {
        this.setParam({
          name: param,
          value: this.products.params[param] === true ? null : true
        });
        this.fetchProducts();
      }
    }
  };
</script>

<style scoped>
  #search-filters {
    display: flex;
    gap: 32px;
  }
</style>
