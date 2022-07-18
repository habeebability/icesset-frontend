<template>
  <div class="flex">
    <DashboardSideNav @closeModal="closeModal" />
    <div class="flex-1">
      <DashboardTopNav />
      <router-view />
    </div>
  </div>
</template>

<script>
import DashboardSideNav from "../../components/dashboard/DashboardSideNav.vue";
import Dashboard from "../dashboard/Dashboard.vue";
import DashboardTopNav from "../../components/dashboard/DashboardTopNav.vue";
export default {
  components: { DashboardSideNav, Dashboard, DashboardTopNav },
  computed() {
    return closeModal();
  },
  methods: {
    closeModal() {
      // return event.target;
      console.log("close modal");
    },
  },
};
</script>

<style></style>
