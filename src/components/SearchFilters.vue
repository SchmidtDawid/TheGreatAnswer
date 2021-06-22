<template>
  <div id="search-filters">
    <Checkbox label="Active"/>
    <Checkbox label="Promo"/>
  </div>
</template>

<script>
  import Checkbox from '@/components/Checkbox';
  export default {
    name: 'SearchFilters',
    components: { Checkbox }
  };
</script>

<style scoped>
  #search-filters {
    display: flex;
    gap: 32px;
  }
</style>
