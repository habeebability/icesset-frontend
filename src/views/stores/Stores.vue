<template>
  <div class="p-5 lg:py-10 lg:w-1/2 mx-auto">
    <div class="search-div lg:mb-[2rem]">
      <div v-if="err" class="text-white font-2xl bg-red-600 text-center p-3">{{err}}</div>
      <div v-if="success" class="bg-green font-2xl text-center p-3">{{success}}</div>
      <form @submit.prevent="handleAddStore" class="flex items-center">
        <!-- <label for="search" class="sr-only">Search</label> -->
        <div class="flex w-full">
          <input
            list="storesList"
            v-model="storeName"
            type="text"
            id="search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
            placeholder="Enter Store Location"
            required
          />

          <datalist id="storesList">
            <option v-for="(storeData, index) in storesList" :key="index">{{storeData.store_name}}</option>
          </datalist>

          <!-- <input type="text" placeholder="Enter store name" v-model.trim="storeName" required /> -->
        </div>
        <button
          type="submit"
          class="w-40 py-3 px-2 ml-4 text-sm font-medium text-white bg-primary rounded-lg border border-tertiary hover:bg-secondary  focus:ring-4 focus:ring-primary"
        >Add Store</button>
      </form>
    </div>

    <!-- <div class="store-list overflow-x-auto"> -->
    <!-- <ul v-for="(store, index) in storesList" :key="index"> -->
    <!-- <ul>
        <li>
          <div class="flex justify-between items-center p-5 bg-[#F1F3F8] my-5 border-secondary border-l-4">
            <h3>JoyceB</h3>
             <button type="submit" class="w-20 py-2 text-sm font-medium text-white bg-primary rounded-lg border border-tertiary hover:bg-secondary focus:ring-4 focus:ring-primary">
            
              Review
          </button>
          </div>
        </li>
        <li>
          <div class="flex justify-between items-center p-5 bg-[#F1F3F8] my-5 border-secondary border-l-4">
            <h3>JoyceB</h3>
             <button type="submit" class="w-20 py-2 text-sm font-medium text-white bg-primary rounded-lg border border-tertiary hover:bg-secondary focus:ring-4 focus:ring-primary">
            
              Review
          </button>
          </div>
        </li>
    </ul>-->

    <!-- </div> -->
    <div v-if="isLoading" class="loader flex justify-center">
      <TheLoader />
    </div>

    <div class="overflow-x-auto relative shadow-md">
      <table class="table-auto text-center lg:text-left">
        <thead class="border-b border-purple-200 text-left">
          <tr class>
            <!-- <th scope="col" class="lg:py-3 lg:px-6"></th> -->
            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">SN</th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Store Location</th>

            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(storeData,index) in storesList"
            :key="index"
            class="bg-gray-100 dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700"
          >
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ index + 1 }}</td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >{{ storeData.store_name }}</td>

            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <button
                @click="getStore(storeData.store_id)"
                class="font-medium hover:bg-purple-400 bg-secondary text-tertiary rounded-lg focus:outline-none py-2 px-3"
              >Review</button>
            </td>
          </tr>
          <!-- <tr
              class="bg-white dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700"
            >
              <td class="lg:py-4 lg:px-6">1</td>
              <td class="lg:py-4 lg:px-6">Battery</td>
              <td class="lg:py-4 lg:px-6">5</td>
              <td class="lg:py-4 lg:px-6">Electronics</td>
              <td class="lg:py-4 lg:px-6">Tiger</td>
              <td class="lg:py-4 lg:px-6">Ibadan</td>
              <td class="lg:py-4 lg:px-6">10-07-2022</td>
              <td class="lg:py-4 lg:px-6">
                <button
                  class="inline-flex justify-center items-center p-1 w-32 lg:ml-2 lg:mr-6 lg:text-xl font-medium hover:bg-purple-400 bg-secondary text-tertiary rounded-lg focus:outline-none"
                >
                  Review
                </button>
              </td>
            </tr>
            <tr
              class="bg-white dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700"
            >
              <td class="lg:py-4 lg:px-6">2</td>
              <td class="lg:py-4 lg:px-6">Battery</td>
              <td class="lg:py-4 lg:px-6">5</td>
              <td class="lg:py-4 lg:px-6">Electronics</td>
              <td class="lg:py-4 lg:px-6">Tiger</td>
              <td class="lg:py-4 lg:px-6">Ibadan</td>
              <td class="lg:py-4 lg:px-6">10-07-2022</td>
              <td class="lg:py-4 lg:px-6">
                <button
                  @click="toggleModal"
                  class="inline-flex justify-center items-center p-1 w-32 lg:ml-2 lg:mr-6 lg:text-xl font-medium hover:bg-purple-400 bg-secondary text-tertiary rounded-lg focus:outline-none"
                >
                  Review
                </button>
              </td>
          </tr>-->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import store from "../../store";
import axios from "axios";
import TheLoader from "../../components/ui/TheLoader.vue";
export default {
  setup() {
    const storeName = ref("");
    const isLoading = ref(false);
    const oneStore = ref({});
    const success = ref("");
    const err = ref("");
    // const storeId = ref("");
    const storesList = ref([]);
    const getStore = async (id) => {
      try {
        const response = await axios.get(`/api/v1/locations/${id}`);
        // console.log(store.state.item);
        const storeData = response.data;
        oneStore.value = storeData;
        console.log(storeData);
      } catch (error) {}
    };
    const getAllStores = async () => {
      try {
        isLoading.value = true;
        const response = await axios.get(`/api/v1/locations`);
        const allStores = response.data.data;
        console.log(response.data.data);
        storesList.value = allStores;
        isLoading.value = false;
      } catch (error) {
        isLoading.value = false;
      }
    };
    const handleAddStore = async () => {
      try {
        await store.dispatch("createNewStore", {
          store_name: storeName.value,
        });
        (storeName.value = ""), (success.value = "Store Added successfully");
        getAllStores();
        setTimeout(() => {
          success.value = null;
        }, 3000);
      } catch (error) {
        console.log(error);
        err.value = error.response?.data?.message ?? "Cannot create store";

        // err.value =
        //   error.response && error.response.data.error
        //     ? error.response.data.error
        //     : error.response.data.message;
        setTimeout(() => {
          err.value = null;
        }, 3000);
      }
      getAllStores();
    };
    return {
      err,
      success,
      storeName,
      oneStore,
      isLoading,
      storesList,
      handleAddStore,
      getStore,
      getAllStores,
    };
  },
  mounted() {
    // this.getStore();
    this.getAllStores();
  },
  components: { TheLoader },
};
</script>

<style>
</style>