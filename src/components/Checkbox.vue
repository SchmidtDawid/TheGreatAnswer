<template>
  <div class="tsh-checkbox" :class="{'checked': checked}" @click="setStatus">
    <div class="input">
      <img src="../assets/icons/check.svg" alt="">
    </div>
    <div v-if="label" class="label">
      {{ label }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Checkbox',
    props: {
      label: String,
      checked: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      setStatus() {
        this.$emit(this.checked ? 'checked' : 'unchecked');
        this.$emit('toggle');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .tsh-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    .input {
      width: 24px;
      height: 24px;
      background: #fff;
      border: 1px solid #E0E2EA;
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        display: none;
        width: 12px;
      }
    }

    .label {
      font-size: 14px;
      font-weight: 600;
    }

    &.checked {
      .input {
        background-color: $primary;
        border-color: $primary;

        img {
          display: block;
          filter: brightness(10);
        }
      }
    }

  }
</style>
