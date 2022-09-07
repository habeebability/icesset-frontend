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

      <div
        v-if="success"
        class="bg-primary text-white border border-green-400 text-green-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold">YAY!</strong>
        <span class="block sm:inline">{{ success }}</span>
      </div>

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
      <div class="flex justify-end">
        <button
          @click="toggleAddLocationModal"
          class="inline-flex justify-center items-center py-2 px-3 mt-5 lg:mr-6 lg:text-xl font-medium rounded-lg text-primary hover:border-primary hover:border-2"
        >+ More Location</button>
      </div>
      <div class="mt-8">
        <table class="table-fixed w-full">
          <thead class="border-b">
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

      <!-- Add Location Modal -->

      <div v-show="addLocationModal">
        <Modal :modalActive="addLocationModal" class="relative" @close="toggleAddLocationModal">
          <div
            class="close-icon absolute sm:top-15 lg:top-5 right-5 w-10 h-10 cursor-pointer hover:border-gray"
          >
            <svg
              @click="toggleAddLocationModal"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              enable-background="new 0 0 40 40"
            >
              <line
                x1="15"
                y1="15"
                x2="25"
                y2="25"
                stroke="crimson"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-miterlimit="10"
              />
              <line
                x1="25"
                y1="15"
                x2="15"
                y2="25"
                stroke="crimson"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-miterlimit="10"
              />
              <circle
                class="circle"
                cx="20"
                cy="20"
                r="19"
                opacity="0"
                stroke="crimson"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-miterlimit="10"
                fill="none"
              />
              <path
                d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z"
                class="progress"
                stroke="crimson"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-miterlimit="10"
                fill="none"
              />
            </svg>
          </div>
          <h1
            class="border-b-2 border-gray-light px-2 md:px-5 text-2xl font-bold pb-3"
          >Add item to location</h1>
          <div class="mx-auto bg-[#f1f3f8] p-5">
            <!-- <div
              v-if="err"
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong class="font-bold">OOPS!</strong>
              <span class="block sm:inline">{{ err }}</span>
            </div>-->

            <form @submit.prevent="handleAddLocation">
              <div class="input-form flex flex-col-reverse lg:flex-row justify-between gap-4">
                <div class="flex-1">
                  <div class="mb-6">
                    <div class="w-full my-3">
                      <label
                        for="location"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Location</label>
                      <select
                        class="bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        v-model="oneStore"
                        id="storesList"
                      >
                        <option
                          :value="storeData"
                          v-for="(storeData, index) in storesList"
                          :key="index"
                        >{{storeData.store_name}}</option>
                      </select>
                    </div>

                    <div>
                      <label
                        for="lastname"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Quantity</label>
                      <input
                        type="number"
                        id="quantity"
                        class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        placeholder
                        required
                        v-model="quantity"
                      />
                    </div>
                    <div class="w-full my-3">
                      <label
                        for="staff"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Staff</label>
                      <select
                        class="bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        v-model="oneStaff"
                        id="staffsList"
                      >
                        <option
                          :value="staffData"
                          v-for="(staffData, index) in staffsList"
                          :key="index"
                        >{{staffData.firstName}} {{staffData.lastName}}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="my-5">
                <button
                  type="submit"
                  class="text-white bg-primary hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center"
                >Add New Item</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

import { useRoute } from "vue-router";
import axios from "axios";
import Modal from "../../components/ui/Modal.vue";
import TheLoader from "../../components/ui/TheLoader.vue";

export default {
  components: {
    TheLoader,
    Modal,
  },

  setup() {
    const route = useRoute();

    // const err = ref(""),

    const success = ref("");

    const itemId = route.params.id;
    const itemDetails = ref({});
    const addLocationModal = ref(false);
    const staffsList = ref([]);

    // const location = ref({});

    const quantity = ref("");

    const storesList = ref([]);
    const oneStore = ref({});
    const oneStaff = ref({});

    const getAllStores = async () => {
      try {
        const response = await axios.get(`/api/v1/locations`);
        const allStores = response.data.data;
        // console.log(response.data.data);
        storesList.value = allStores;
      } catch (error) {}
    };

    const getAllStaffs = async () => {
      try {
        const response = await axios.get(`/api/v1/users`);
        const allStaffs = response.data.data;
        staffsList.value = allStaffs;
        console.log(allStaffs);
      } catch (error) {}
    };

    const toggleAddLocationModal = () => {
      addLocationModal.value = !addLocationModal.value;
    };

    // console.log(itemDetails);

    const isLoading = ref(false);
    const store = useStore();
    console.log(store);

    const handleAddLocation = async () => {
      try {
        // isLoading.value = true
        await store.dispatch("addLocationItem", {
          item_id: itemId,
          store_id: oneStore.value.store_id,
          store_name: oneStore.value.store_name,
          quantity: quantity.value,
          user_id: oneStaff.value.user_id,
          user_name: `${oneStaff.value.firstName} ${oneStaff.value.lastName}`,
        });

        (oneStore.value = {}), (oneStaff.value = {}), (quantity.value = "");

        success.value = "Location added successfully";
        getItemDetails();
        toggleAddLocationModal();

        setTimeout(() => {
          success.value = null;
        }, 4000);
      } catch (error) {}
    };

    // const handleAddLocation = async () => {
    //   try {
    //     isLoading.value = true;
    //     await store.dispatch("addLocation", {

    //       locations: locations.value.map((location) => ({
    //         store_id: location.locationObject.store_id,
    //         location: location.locationObject.store_name,
    //         staff: location.staffObject.user_id,
    //         user_name: `${location.staffObject.firstName} ${location.staffObject.lastName}`,
    //         quantity: location.quantity,
    //       })),
    //       location: location.value,
    //       quantity: quantity.value,
    //       staff: staff.value

    //     });

    //       (staff.value = ""),
    //       (quantity.value = ""),
    //       (locations.value = ""),
    //       (success.value = "item added successfully");
    //       console.log(addLocation);
    //     setTimeout(() => {
    //       success.value = null;
    //     }, 3000);
    //   } catch (error) {
    //     // console.log(error);
    //     err.value = error.response?.data?.message ?? "Cannot create item";

    //     setTimeout(() => {
    //       err.value = null;
    //     }, 3000);
    //   }
    // };

    const getItemDetails = async () => {
      try {
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
      // handleAddLocation,
      success,
      // err,

      itemDetails,

      quantity,

      oneStore,
      oneStaff,

      addLocationModal,
      handleAddLocation,
      getItemDetails,
      toggleAddLocationModal,
      staffsList,
      storesList,
      getAllStores,
      getAllStaffs,
      getItemDetails,
      isLoading,
    };
  },
  mounted() {
    this.getItemDetails();
    this.getAllStores();
    this.getAllStaffs();
  },
};
</script>

<style>
</style>