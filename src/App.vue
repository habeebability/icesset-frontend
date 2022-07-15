<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
// import LoginPage from "./views/users/LoginPage.vue";
import DashboardSideNav from "./components/dashboard/DashboardSideNav.vue";
export default {
  components: {
    DashboardSideNav,
  },
};
</script>

<template>
  <div>
    <DashboardSideNav v-show="$route.path !== '/login'" />
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  </div>
  <!-- <LoginPage /> -->
  <router-view></router-view>
</template>

<style>
/* #app {

} */
</style>
