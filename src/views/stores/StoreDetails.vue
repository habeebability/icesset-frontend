<template>
  <div class="flex flex-col px-3 lg:ml-0 lg:px-10">
    <div class="ml-4 my-5 mr-6 w-[30rem] lg:w-auto h-auto px-3 py-6">
      <div class="overflow-x-auto relative shadow-md bg-white">
        <table class="table-auto text-center lg:text-left text-gray-50 dark:text-gray-400">
          <thead class="border-b border-purple-200 bg-tertiary text-left">
            <tr class="bg-primary">
              <!-- <th scope="col" class="lg:py-3 lg:px-6"></th> -->
              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">SN</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Item Name</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Category</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Location</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Quantity</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- <div v-if="isLoading">
              <TheLoader />
            </div>-->

            <div v-if="allItemsList.length == 0">
              <h2>No item in store</h2>
            </div>
            <tr
              v-for="(item, index) in allItemsList"
              :key="item.id"
              class="bg-gray-100 dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700"
            >
              <td
                class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
              >{{ index + 1 }}</td>
              <td
                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
              >{{ item.item_name }}</td>
              <td
                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
              >{{ item.category }}</td>
              <td
                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
              >{{ item.store_name }}</td>
              <td
                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
              >{{ item.quantity }}</td>

              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button
                  class="font-medium hover:bg-purple-400 bg-secondary text-tertiary rounded-lg focus:outline-none py-2 px-3"
                  @click="getItem(item.id)"
                >Review</button>
              </td>
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
import Modal from "../../components/ui/Modal.vue";
import TheLoader from "../../components/ui/TheLoader.vue";
export default {
  components: {
    Modal,
    TheLoader,
  },
  setup() {
    const itemsInStore = ref([]);

    const route = useRoute();

    const storeId = route.params.id;

    const isLoading = ref(false);

    const username = ref("");
    const itemName = ref("");
    const condition = ref("");
    const submitted_by = ref("");
    const image = ref("");
    const acquired = ref("");
    const location = ref("");
    const quantity = ref("");
    const description = ref("");
    const category = ref("");
    const maker = ref("");
    const itemId = ref("");
    const allItemsList = ref([]);

    const success = ref("");
    const err = ref("");

    const store = useStore();

    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    // function getItem() {
    //   // username.value =
    //   //   store.state.user.firstname + " " + store.state.user.lastname;
    //   // userRole.value = store.state.user.role;

    //   itemId.value = store.state.item.id;
    // }

    const getAllItemsInStore = async () => {
      // store.state.itemsInStore = [];
      try {
        const response = await axios.get(`/api/v1/items/locations/${storeId}`);

        const allItemsInStore = response.data;

        allItemsList.value = allItemsInStore;
        console.log(allItemsInStore);
      } catch (error) {}
    };

    const getItem = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:4000/inventory/${id}`
        );
        console.log(store.state.item);

        const item_id = response.data;
        itemId.value = item_id;

        console.log(itemId.value);
      } catch (error) {}
      console.log(id);
    };

    return {
      // isLoading,
      modalActive,
      getItem,
      getAllItemsInStore,
      storeId,
      itemsInStore,
      // getUser,
      allItemsList,
      toggleModal,
      condition,
      location,
      quantity,
      description,
      category,
      maker,
      itemId,
      itemName,
      acquired,
      submitted_by,
      success,
      err,
    };
  },

  mounted() {
    // this.getItem();
    this.getAllItemsInStore();
    // this.$router.params.id
  },
};
</script>

<style >
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(odd) {
  background-color: rgb(244, 244, 244);
}
</style>
