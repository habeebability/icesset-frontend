<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <!-- <TheLoader /> -->
  <router-view></router-view>
</template>

<style>
.paginate .pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate .paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate .paginate-buttons:hover {
  background-color: #f15025;
  color: white;
}
.paginate .active-page {
  background-color: #540d6e;
  border: 1px solid #540d6e;
  color: white;
}
.paginate .active-page:hover {
  background-color: #f15025;
}
</style>
