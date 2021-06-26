<template>
  <div class="modal">
    <div class="modal-bg" />
    <div class="modal-body">
      <div class="product">
        <div class="close" @click="$emit('close')">
          <img class="close-img" src="../assets/icons/close.svg" alt="">
        </div>
        <div class="photo">
          <img :src="product.image" :alt="product.name">
          <div v-if="product.promo" class="promo">Promo</div>
        </div>
        <div class="content">
          <div class="title">{{ product.name }}</div>
          <p class="description">{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductModal',
    props: {
      product: {
        type: Object,
        required: true,
      }
    },
    mounted() {
      const body = document.querySelector('body');
      body.style.height = '100vh';
      body.style.overflow = 'hidden';
    },
    destroyed() {
      const body = document.querySelector('body');
      body.style.height = '';
      body.style.overflow = '';
    }
  };
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  .modal-bg {
    height: 100%;
    width: 100%;
    background-color: $black;
    opacity: 0.9;
  }

  .modal-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - (24px * 2));
    max-width: 600px;
  }

  .product {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .content {
    height: 100%;
    padding: 16px 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    height: 32px;
    width: 32px;
    background-color: #f8f8f8;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 18px;
    cursor: pointer;
  }

  .photo {
    position: relative;
    flex: 0 0 45vw;
    @media (min-width: $s) {
      flex: 0 0 44vw;
    }
    @media (min-width: $l) {
      flex: 0 0 400px;
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
</style>
