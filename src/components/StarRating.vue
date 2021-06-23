<template>
  <div class="star-rating">
    <img v-for="index in rating" :key="index" src="../assets/icons/star-solid.svg" alt="solid star">
    <img v-for="index in 5 - rating" :key="rating + index" src="../assets/icons/star-empty.svg" alt="empty star">
  </div>
</template>

<script>
  export default {
    name: 'StarRating',
    props: {
      rating: {
        type: Number,
        default: 5, //a marketer would be proud ;)
      }
    }
  };
</script>

<style scoped>
  .star-rating {
    display: flex;
    gap: 10px;
    padding: 18px 0;
  }
</style>
