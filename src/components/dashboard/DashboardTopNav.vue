<template>
  <nav class="w-full h-20 bg-white shadow-md border-b-2 border-primary p-5">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <h3
        class="hidden text-2xl font-bold md:block"
      >{{$route.path.replace('/', '').charAt(0).toUpperCase() + $route.path.slice(2)}}</h3>
      <h5 class>
        Welcome
        <span class="mx-3 text-xl">{{$store.state.user.data.info.firstName}}</span> -
        <span class="mx-3">{{$store.state.user.data.role}}</span>
      </h5>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

// computed
// const routePath = computed(() => {
//   return $route.path;
// });
</script>

<style>
@media print {
  nav {
    display: none;
  }
}
</style>
