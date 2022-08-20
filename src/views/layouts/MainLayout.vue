<template>
  <div class="flex">
    <div class="fixed top-0 z-10">
      <DashboardSideNav @closeModal="closeModal" />
    </div>
    <div class="flex-1 md:ml-60">
      <div class="md:sticky md:top-0 md:z-10">
        <DashboardTopNav v-if="!$route.meta.hideNavbar" />
      </div>
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
