<template>
  <div id="user-widget">
    <div class="user-avatar" v-if="user.isLogedIn">
      <img class="avatar" @click="dropdown = !dropdown" src="../assets/images/user-avatar.png" alt="">
      <div class="dropdown" v-show="dropdown">
        <div class="option" @click="logOutUser">Logout</div>
      </div>
    </div>

    <router-link v-else to="/login">
      <button class="btn reversed">Log in</button>
    </router-link>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'UserWidget',
    data() {
      return {
        dropdown: false,
      };
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      ...mapActions(['logOutUser']),
      logOut() {
        this.logOutUser();
      }
    },
    mounted() {
      document.addEventListener('click', (e) => {
        if (!e.target.matches('.user-avatar, .user-avatar *')) {
          this.dropdown = false;
        }
      });
    }
  };
</script>

<style lang="scss" scoped>
  .user-avatar {
    position: relative;
  }

  .dropdown {
    position: absolute;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px 16px;
    min-width: 184px;
    box-shadow: 0px 8px 32px rgba(17, 18, 20, 0.158514);
    right: 0;
    bottom: -64px;
    cursor: pointer;
  }

  .avatar {
    border-radius: 50%;
    cursor: pointer;
  }
</style>
