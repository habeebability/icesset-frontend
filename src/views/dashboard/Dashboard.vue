<template>
  <div class="flex">
    <DashboardSideNav />
    <DashboardTopNav />
  </div>
</template>

<script>
import DashboardTopNav from "../../components/dashboard/DashboardTopNav.vue";
import DashboardSideNav from "../../components/dashboard/DashboardSideNav.vue";
export default {
  components: {
    DashboardSideNav,
    DashboardTopNav,
  },
};
</script>

<style></style>
