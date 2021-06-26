<template>
  <div class="paginator">
    <div :disabled="currentPage <= 1" @click="changePage(1)">
      First
    </div>
    <div disabled v-if="lowDotsVisibility">
      ...
    </div>
    <template v-for="index in checkingRange">
      <div
          v-if="isVisible(index)"
          :class="{'active': currentPage === index}"
          :disabled="currentPage === index"
          @click="changePage(index)"
          :key="index"
      >
        {{ index }}
      </div>
    </template>
    <div disabled v-if="highDotsVisibility">
      ...
    </div>
    <div :disabled="currentPage >= total" @click="changePage(total)">
      Last
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Paginator',
    props: {
      currentPage: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
      autoRouting: {
        type: Boolean,
        default: false,
      },
      padding: {
        type: Number,
        default: 1,
      }
    },
    computed: {
      lowDotsVisibility() {
        return this.currentPage > this.padding + 2 && this.total > this.totalMidTiles;
      },
      highDotsVisibility() {
        return this.currentPage < (this.total - (this.padding + 1)) && this.total > this.totalMidTiles;
      },
      totalMidTiles() {
        return 2 * this.padding + 3;
      },
      checkingRange() {
        let range = [];
        let minRange = Math.max(Math.floor(this.currentPage - this.totalMidTiles / 2) - 1, 1);
        let maxRange = Math.min(Math.ceil(this.currentPage + this.totalMidTiles / 2) + 1, this.total);
        for (let i = minRange; i <= maxRange; i++) {
          range.push(i);
        }
        return range;
      }
    },
    methods: {
      isVisible(page) {
        return this.isVisibleInStandardRange(page) || this.isVisibleInLowEdgeRange(page) || this.isVisibleInHighEdgeRange(page);
      },
      isVisibleInStandardRange(page) {
        const isPageIsNotLowerThanCurrentPageBy = (value) => page >= this.currentPage - value;
        const isPageIsnNotHigherThanCurrentPageBy = (value) => page <= this.currentPage + value;

        return isPageIsNotLowerThanCurrentPageBy(this.padding)
            && isPageIsnNotHigherThanCurrentPageBy(this.padding);
      },
      isVisibleInLowEdgeRange(page) {
        const isTotalIsNotHigherThan = (value) => this.total <= value;
        const isCurrentPageIsNotHigherThan = (value) => this.currentPage <= value;
        const isPageIsNotHigherThan = (value) => page <= value;

        return isCurrentPageIsNotHigherThan(this.totalMidTiles - (this.padding + 2))
            && isPageIsNotHigherThan(this.totalMidTiles - 1)
            || isTotalIsNotHigherThan(this.totalMidTiles);
      },
      isVisibleInHighEdgeRange(page) {
        const isPageIsNotLowerThanTotalBy = (value) => page + value >= this.total;
        const isCurrentPageIsNotLowerThanTotalBy = (value) => this.currentPage + value >= this.total;

        return isCurrentPageIsNotLowerThanTotalBy(this.totalMidTiles - (this.padding + 2))
            && isPageIsNotLowerThanTotalBy(this.totalMidTiles - 2);
      },
      changePage(page) {
        if (this.autoRouting) {
          this.$router.push({
            name: this.$route.name,
            params: { page: page.toString() }
          }).catch(err => { console.warn(err); });
          return;
        }
        this.$emit('set-page', page);
      }
    },
  };
</script>

<style lang="scss" scoped>
  .paginator {
    display: flex;
    justify-content: center;
    margin: 52px 0;
    gap: 4px;
    cursor: pointer;

    div {
      text-align: center;
      font-weight: 600;
      font-size: 14px;
      width: 20px;

      &.active {
        color: $primary;
      }

      &:first-child,
      &:last-child {
        width: auto;
        padding: 0 17px;
      }
    }
  }
</style>
