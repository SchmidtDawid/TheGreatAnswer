<template>
  <div class="product">
    <div class="photo">
      <img :src="product.image" :alt="product.name">
      <div v-if="product.promo" class="promo">Promo</div>
    </div>
    <div class="content">
      <div class="title">{{ product.name }}</div>
      <p class="description">{{ product.description }}</p>
      <star-rating :rating="product.rating" />

      <button v-if="product.active" class="btn" @click="showDetails">Show details</button>
      <button v-else disabled class="btn">Unavailable</button>
    </div>
  </div>
</template>

<script>
  import StarRating from '@/components/StarRating';

  export default {
    name: 'ProductItem',
    components: { StarRating },
    props: {
      product: {
        type: Object,
        required: true,
      }
    },
    methods: {
      showDetails() {
        this.$emit('showDetails', this.product)
      }
    }
  };
</script>

<style lang="scss" scoped>
  .product {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .content {
    height: 100%;
    padding: 16px 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .photo {
    position: relative;
    flex: 0 0 45vw;
    @media (min-width: $s) {
      flex: 0 0 28vw;
    }
    @media (min-width: $l) {
      flex: 0 0 180px;
    }

    overflow: hidden;
    display: flex;
    align-items: center;
    img {
      max-width: 100%;
      object-fit: contain;
    }
    .promo {
      position: absolute;
      top: 14px;
      left: 0;
      padding: 4px 16px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      color: #fff;
      background-color: $secondary;
    }
  }

  .title {
    font-size: 18px;
    font-weight: 600;
  }

  .description {
    height: 100%;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    color: $grey3;
    margin: 8px 0;
  }

  .btn {
    display: block;
    margin: 0 auto;

  }
</style>
