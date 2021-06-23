<template>
  <div id="search-bar">
    <input type="text" placeholder="Search" @input="setFilter"/>
    <button class="search"><img src="../assets/icons/search.svg" alt=""></button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'SearchBar',
    methods: {
      ...mapActions(['setParam', 'fetchProducts']),
      setFilter(e) {
        console.log(e);
        this.setParam({
          name: 'search',
          value: e.target.value
        });
        this.fetchProducts();
        // user experience na plus oraz nie muszę robić obsługi entera i przycisku lupki czyli win-win :)
        // (przegrywa tylko płacący za serwer ;))
      }
    }
  };
</script>

<style lang="scss" scoped>
  #search-bar {
    position: relative;
  }

  input {
    background: #FFFFFF;
    border: 1px solid #E0E2EA;
    box-sizing: border-box;
    border-radius: 8px;
    height: 48px;
    width: 100%;
    padding: 0 48px 0 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &::placeholder {
      color: $black;
      font-size: 14px;
      font-weight: 600;
    }
  }

  .search {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    border: none;
    background: none;
    padding: 0 15px;
    display: flex;
    align-items: center;

    img {
      width: 17.5px;
    }
  }
</style>
