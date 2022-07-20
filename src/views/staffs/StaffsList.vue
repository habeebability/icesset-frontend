<template>
  <ul>
    <li v-for="staff in filteredStaffs" :key="staff">{{ staff.firstName }}</li>
  </ul>
</template>

<script>
export default {
  computed: {
    filteredStaffs() {
      return this.$store.getters["staffs/staffs"];
    },
  },
};
</script>

<style></style>
