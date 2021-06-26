<template>
  <div class="proucts">
    <Navigation />
    <div class="page-container">
      <div v-if="products.items.length" class="products-grid">
        <product-item
            v-for="product in products.items"
            :key="product.id"
            :product="product"
            @showDetails="showProduct"
        />
      </div>
<!--      w sumie tu byłoby spoko zrobić komponent dla pustych wyszukiwań-->
      <div v-else class="empty">
        <img src="@/assets/icons/empty.svg" alt="no products">
        <div class="title">
          Ooops... It's empty here
        </div>
        <p>
          There are no products on the list
        </p>
      </div>
      <paginator
          v-if="products.pagination.totalPages > 1"
          :current-page="products.pagination.currentPage"
          :total="products.pagination.totalPages"
          :padding="2"
          @set-page="setPage"
      />
    </div>
    <product-modal
        v-if="modalProduct.id"
        :product="modalProduct"
        @close="closeModal"
    />
  </div>
</template>


<script>
  import Navigation from '@/components/Navigation';
  import { mapActions, mapState } from 'vuex';
  import ProductItem from '@/components/ProductItem';
  import Paginator from '@/components/Paginator';
  import ProductModal from '@/components/ProductModal';

  export default {
    components: { ProductModal, Paginator, ProductItem, Navigation },
    data() {
      return {
        modalProduct: {}
      };
    },
    computed: {
      ...mapState(['products'])
    },
    methods: {
      ...mapActions(['fetchProducts', 'setParam']),
      setPage(page) {
        this.setParam({
          name: 'page',
          value: page
        });
        this.fetchProducts();
      },
      showProduct(product) {
        this.modalProduct = product;
      },
      closeModal() {
        this.modalProduct = {};
      }
    },
    created() {
      if (window.innerWidth < 1280) {
        this.setParam({
          name: 'limit',
          value: 9
        });
      }

      if (window.innerWidth < 1024) {
        this.setParam({
          name: 'limit',
          value: 8
        });
      }

      if (window.innerWidth < 568) {
        this.setParam({
          name: 'limit',
          value: 4
        });
      }

      // nie ma tu reakcji na resize (w większości projektów w jakich byłem zakładaliśmy, że user korzysta z wyjściowej
      // szerokości urządzenia i jej nie zmienia. Jeśli projekt zakłada, takie zachowanie najlepiej zrobić by jakąś
      // globalną mechnikę z breakpointami itd.)

      this.fetchProducts();
    }
  };
</script>

<style lang="scss" scoped>
  .products-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    margin: 24px;
    background-color: $mainBackground;

    @media (min-width: $s) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: $l) {
      margin: 56px 108px;
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: $xl) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .empty {
    font-weight: 600;
    background-color: #fff;
    margin: 24px;
    max-width: 600px;
    padding: 118px 0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: $l) {
      margin: 56px auto;
      grid-template-columns: repeat(3, 1fr);
    }

    img {
      margin: 22px;
    }

    .title {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      color: $grey3;
      margin-top: 6px;
    }
  }
</style>
