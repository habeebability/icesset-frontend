<template>
  <div class>
    <div class="container mt-4">
      <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        <div
          class="card m-2 h-full cursor-pointer p-6 max-w-sm rounded-xl bg-tertiary border-gray-700 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all lg:p-3 duration-200"
        >
          <h5 class="my-10 text-center font-bold tracking-tight text-primary dark:text-white">
            <span class="block text-5xl">640</span>
            <span class="block text-2xl my-3">Transactions</span>
          </h5>
        </div>
        <div
          class="card m-2 h-full cursor-pointer p-6 max-w-sm rounded-xl bg-tertiary border-gray-700 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all lg:p-3 duration-200"
        >
          <h5
            class="my-10 text-3xl md:text-2xl text-center font-bold tracking-tight text-secondary dark:text-white"
          >
            <span v-if="showLoading">
              <Loading />
            </span>
            <span v-if="!showLoading" class="block text-5xl">{{allItemsList.length}}</span>
            <span class="block text-2xl my-3">Items in store</span>
          </h5>
        </div>
        <div
          class="card m-2 h-full cursor-pointer p-6 max-w-sm rounded-xl bg-tertiary border-gray-700 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all lg:p-3 duration-200"
        >
          <h5 class="my-10 text-center font-bold tracking-tight text-black dark:text-white">
            <span v-if="showLoading">
              <Loading />
            </span>
            <span v-if="!showLoading" class="block text-5xl">{{allStaffsList.length}}</span>
            <span class="block text-2xl my-3">Staffs</span>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import Loading from "../ui/Loading.vue";
// import Loading1 from "../ui/Loading.vue";
export default {
  components: {
    Loading,
  },
  setup() {
    const allStaffsList = ref([]);
    const allItemsList = ref([]);

    const showLoading = ref(false);

    const getAllStaffs = async () => {
      try {
        showLoading.value = true;
        const response = await axios.get(`/api/v1/users`);
        const allUsers = response.data.data;
        allStaffsList.value = allUsers;

        showLoading.value = false;
        // console.log(userId.value);
      } catch (error) {
        showLoading.value = false;
      }
    };
    const getAllItems = async () => {
      try {
        showLoading.value = true;
        const response = await axios.get(`/api/v1/inventory`);
        const allItems = response.data.data;
        allItemsList.value = allItems;
        showLoading.value = false;
      } catch (error) {
        showLoading.value = false;
      }
    };
    return {
      allItemsList,
      allStaffsList,
      getAllStaffs,
      getAllItems,
      showLoading,
    };
  },
  mounted() {
    this.getAllItems();
    this.getAllStaffs();
  },
  // components: { Loading },
};
</script>

<style></style>
