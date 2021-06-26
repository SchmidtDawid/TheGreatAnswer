<template>
  <div class="login">
    <img src="@/assets/images/login.png" alt="">
    <div class="from-holder">
      <logo class="logo" />
      <form @submit.prevent="handleSubmit">
        <div class="title">
          Login
        </div>
        <div class="login-input">
          <label>
            username:
            <input v-model="username" name="username" placeholder="Enter username" />
          </label>
        </div>
        <div class="login-input">
          <label>
            password:
            <input v-model="password" name="password" type="password" placeholder="Enter password" />
          </label>
        </div>
        <button class="btn" type="submit">Log in</button>
        <div class="forgot" @click="forgotPassword">
          Forgot password?
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo';
  import { mapActions } from 'vuex';

  export default {
    components: { Logo },
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      ...mapActions(['logInUser']),
      handleSubmit() {
        if (this.password && this.username) {
          this.logInUser();
          this.$router.push('/');
        }
      },
      forgotPassword() {
        alert('you can use any password, but shhhh....');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    background-color: #fff;
    min-height: 100vh;
  }

  img {
    display: none;
    height: 100vh;
    @media (min-width: $l) {
      display: block;
    }
  }

  .from-holder {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 24px;
    @media (min-width: $l) {
      min-height: 720px;
      margin-left: 100px;
    }
  }

  .logo {
    position: absolute;
    margin: 24px 0;
    @media (min-width: $l) {
      margin: 52px 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    @media (min-width: $l) {
      width: 496px;
    }
  }

  .title {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 29px;
  }

  .login-input {
    label {

    }

    input {
      display: block;
      width: 100%;
      margin: 8px 0 22px;

      &::placeholder {
        color: $grey3;
      }
    }
  }

  .btn {
    height: 48px;
    margin: 56px 0 9px;
  }

  .forgot {
    font-weight: 600;
    font-size: 14px;
    color: $grey3;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
