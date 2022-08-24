<template>
  <div class="p-8">
    <nav class="font-medium text-2xl my-3 cursor-pointer flex items-center">
      <ol class="list-reset flex">
        <li>
          <span class="text-gray-500 mx-2"></span>
        </li>
        <li>
          <router-link to="/items">
            <p class="text-primary hover:text-blue-700">Items</p>
          </router-link>
        </li>
        <li>
          <span class="text-gray-500 mx-2 text-secondary">>></span>
        </li>
        <li class="text-gray-500">Review Item</li>
      </ol>
    </nav>
    <div>
      <h2 class="bg-[#F1F3F8] w-full px-5 py-3">Item Information</h2>

      <div v-if="isLoading">
        <TheLoader />
      </div>
      <div v-if="!isLoading">
        <div class="flex w-full text-start px-5 py-3">
          <p class="text-gray-500 w-1/3">Name:</p>
          <p class="text-primary w-2/3 items-start">{{itemDetails.item_name}}</p>
        </div>
        <div class="flex w-full text-start px-5 py-3">
          <p class="text-gray-500 w-1/3">Category:</p>
          <p class="text-primary w-2/3 items-start">{{itemDetails.category}}</p>
        </div>
        <div class="flex w-full text-start px-5 py-3">
          <p class="text-gray-500 w-1/3">Description:</p>
          <p class="text-primary w-2/3 items-start">{{itemDetails.description}}</p>
        </div>
        <div class="flex w-full text-start px-5 py-3">
          <p class="text-gray-500 w-1/3">Supplied by:</p>
          <p class="text-primary w-2/3 items-start">{{itemDetails.supplier}}</p>
        </div>
        <div class="flex w-full text-start px-5 py-3">
          <p class="text-gray-500 w-1/3">Supplier contact:</p>
          <p class="text-primary w-2/3 items-start">{{itemDetails.supplierContact}}</p>
        </div>
      </div>
      <div class="mt-8">
        <table class="table-fixed w-full">
          <thead class="border-b-2">
            <tr class="px-5 py-3">
              <th>Location(s)</th>
              <th>Quantity</th>
              <th>Assigned to</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(storeDetail, index) in itemDetails.data" :key="index">
              <!-- <tr> -->
              <td>{{ storeDetail.store_name }}</td>
              <td>{{ storeDetail.quantity }}</td>
              <td>{{ storeDetail.user_name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

import { useRoute } from "vue-router";
import axios from "axios";
import TheLoader from "../../components/ui/TheLoader.vue";

export default {
  components: {
    TheLoader,
  },
  setup() {
    const route = useRoute();

    const itemId = route.params.id;
    const itemDetails = ref({});

    console.log(itemDetails);

    const isLoading = ref(false);
    // const store = useStore();
    // console.log(store);

    // const getItemDetails = () => {
    //   itemDetails.value = store.state.itemDetails;
    // };

    const getItemDetails = async () => {
      try {
        isLoading.value = true;
        isLoading.value = true;
        const response = await axios.get(`/api/v1/inventory/${itemId}`);

        const item = response.data[0];
        itemDetails.value = item;

        console.log(itemDetails.value);

        isLoading.value = false;
        // console.log(itemId.value);
      } catch (error) {
        isLoading.value = false;
      }
    };
    return {
      itemDetails,
      getItemDetails,
      isLoading,
    };
  },
  mounted() {
    this.getItemDetails();
  },
};
</script>

<style>
</style>