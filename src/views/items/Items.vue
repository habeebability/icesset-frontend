<template>
  <div class="py-5 px-3 lg:ml-0 lg:px-10">
    <div class="w-full md:w-2/3 mx-5">
      <form>
        <div class="flex space-x-4">
          <input
            @keyup="handleSearchQuery"
            type="search"
            v-model="searchQuery"
            placeholder="search by name or category"
            class="w-full border px-3 py-2 rounded-md"
          />
          <button
            class="bg-transparent hover:bg-purple-500 text-primary font-semibold focus:border-purple-500 hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
          >Search</button>
        </div>
      </form>
    </div>

    <div class="loader flex justify-center">
      <TheLoader v-if="isLoading" />
    </div>
    <div v-if="!selectItemsOption" class>
      <div>
        <div class="heading-div flex justify-between items-center">
          <h1
            @click="selectItems"
            class="font-medium text-sm ml-5 my-5 cursor-pointer flex items-center bg-primary text-white rounded-lg px-3 py-2"
          >
            <span class="mx-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 30 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.8573 9.64428C29.9992 9.35483 30.0363 9.03633 29.9639 8.72906C29.8915 8.4218 29.7128 8.13959 29.4504 7.91813L20.0755 0L17.4243 2.23925L23.5986 7.45412H0.000217222V10.6214H28.1248C28.4956 10.6215 28.8581 10.5287 29.1665 10.3547C29.4749 10.1808 29.7153 9.93358 29.8573 9.64428ZM0.142716 14.7657C0.00077111 15.0552 -0.0363369 15.3737 0.0360877 15.6809C0.108512 15.9882 0.287215 16.2704 0.549585 16.4919L9.92445 24.41L12.5757 22.1708L6.40137 16.9559H29.9998V13.7886H1.87519C1.50433 13.7883 1.14171 13.881 0.833291 14.055C0.52487 14.2289 0.284526 14.4763 0.142716 14.7657Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>Transfer</span>
          </h1>
          <router-link
            to="/items/add-new-item"
            class="inline-flex justify-center items-center py-2 px-3 lg:mr-6 lg:text-xl font-medium rounded-lg hover:text-primary hover:border-primary hover:border-2"
          >+ Add New</router-link>
        </div>
        <div class="ml-4 mr-6 w-[30rem] md:w-50rem lg:w-auto h-auto px-3 py-6">
          <div class="overflow-x-auto relative shadow-md bg-white">
            <table class="table-auto text-center lg:text-left text-gray-50 dark:text-gray-400">
              <thead class="border-b border-purple-200 bg-[#F1F3F8] text-left">
                <tr class="bg-tertiary">
                  <!-- <th scope="col" class="lg:py-3 lg:px-6"></th> -->
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">SN</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Name</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Category</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Location</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Quantity</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Status</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Availability</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Asigned to</th>

                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <div
                  class="flex justify-center items-center text-center"
                  v-if="filteredItems.length < 1 && !isLoading"
                >
                  <div class="mx-auto p-5 text-center w-50">
                    <h1>No match found</h1>
                  </div>
                </div>
                <tr
                  v-for="(item, index) in filteredItems"
                  :key="item.qyt_loc_id"
                  class="bg-gray-100 dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700"
                >
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >{{index + 1}}</td>
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
                  <td
                    class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
                    :class=" ['text-black', item.item_status == 'Consumed' || item.quantity <= 0  ?  'text-orange font-bold ' : item.item_status == 'In transit' ? 'text-purple-700 font-bold' : 'text-black' ]"
                  >{{ item.item_status }}</td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >{{ item.availability }}</td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >{{ item.user_name }}</td>

                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button
                      class="font-medium hover:bg-purple-400 bg-secondary text-tertiary rounded-lg focus:outline-none py-2 px-3"
                      @click="getItem(item.item_id)"
                    >Review</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectItemsOption" class="flex justify-around">
      <div>
        <div class="heading-div flex justify-between items-center">
          <h1 class="font-medium text-2xl my-3 cursor-pointer">
            <span @click="selectItemsFalse">
              <i class="fa-solid fa-x text-red-700 mr-3"></i>
            </span>
            <span class="text-primary">{{ 0 || checkedItems.length}}</span>
            <span class="ml-2 text-primary">Selected</span>
          </h1>
          <button
            @click="clearAllSelected"
            class="inline-flex justify-center items-center py-2 px-3 lg:mr-6 lg:text-xl font-medium rounded-lg hover:border-primary hover:border-2"
          >Clear all</button>
        </div>
        <div class="overflow-x-auto relative shadow-md bg-white">
          <table class="table-auto text-center lg:text-left text-gray-50 dark:text-gray-400">
            <thead class="border-b border-purple-200 bg-[#F1F3F8] text-left">
              <tr class="bg-tertiary">
                <!-- <th scope="col" class="lg:py-3 lg:px-6"></th> -->
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">SN</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">Name</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">Category</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">Location</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">Quantity</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">Status</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">Assigned to</th>

                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item) in filteredItems"
                :key="item.qyt_loc_id"
                class="bg-gray-100 dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700"
              >
                <td
                  class="text-center text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                >
                  <!-- :value="{...item, selectedQuantity: item.quantity}" -->
                  <input
                    :value="item"
                    :disabled="item.item_status == 'In transit' || item.item_status == 'Consumed' || item.item_status =='Pending Consumption' || item.quantity <= 0"
                    @change="onItemChecked(item)"
                    type="checkbox"
                    class="appearance-none h-5 w-5 border-[3px] border-purple-600 rounded-sm bg-white checked:bg-primary focus:outline-none transition duration-200 mt-1 cursor-pointer"
                    v-model="checkedItems"
                  />
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                >{{ item.item_name }}</td>
                <td
                  class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                >{{ item.category }}</td>
                <td
                  class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                >{{ item.store_name }}</td>
                <td
                  class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                >{{ item.quantity }}</td>
                <td
                  class="text-sm text-gray-900 px-2 py-4 whitespace-nowrap"
                  :class=" ['text-black', item.item_status == 'Consumed' || item.quantity <= 0  ?  'text-orange font-bold ' : item.item_status == 'In transit' ? 'text-purple-700 font-bold' : 'text-black' ]"
                >{{ item.item_status }}</td>

                <td
                  class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                >{{ item.user_name }}</td>

                <td class="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                  <button
                    class="font-medium hover:bg-purple-400 bg-secondary text-tertiary rounded-lg focus:outline-none py-2 px-3"
                    @click="getItem(item.item_id)"
                  >Review</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="overflow-x-auto sticky top-10 py-5">
        <h1 class="text-right">
          <span>{{ 0 || checkedItems.length}}</span>
          <span class="ml-2">in Batch</span>
        </h1>
        <table class="table-auto mt-5 mb-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in checkedItems" :key="item.qyt_loc_id">
              <td>{{item.item_name}}</td>
              <td>{{item.store_name}}</td>
              <td class="text-center">
                <input
                  v-model="item.selectedQuantity"
                  class="min-w-10 h-5 px-3 border border-primary mx-auto cursor-pointer"
                  type="number"
                  min="1"
                  :max="item.quantity"
                  @keydown="onKeydown"
                />

                <i
                  @click="removeChecked(index)"
                  class="fa fa-trash mx-2 cursor-pointer text-red-700"
                  aria-hidden="true"
                ></i>
              </td>
              <!-- <td>
                <i class="fa fa-trash" aria-hidden="true"></i>
              </td>-->
            </tr>
          </tbody>
        </table>

        <button
          @click="handleAddItemToBatch"
          class="bg-primary text-white py-2 px-20 my-5 w-full"
        >Next</button>
      </div>
    </div>

    <div class="paginate mt-4 flex justify-center items-center">
      <vue-awesome-paginate
        :total-items="itemCount"
        :items-per-page="limit"
        :max-pages-shown="5"
        :current-page="offset"
        :on-click="onClickHandler"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

import { useStore } from "vuex";

import "vue-awesome-paginate/dist/style.css";

import { useRouter } from "vue-router";
import axios from "axios";
import Modal from "../../components/ui/Modal.vue";
import TheLoader from "../../components/ui/TheLoader.vue";

export default {
  components: {
    Modal,
    TheLoader,
  },
  setup() {
    const username = ref("");
    const itemName = ref("");
    const condition = ref("");
    const submitted_by = ref("");
    const image = ref("");
    const acquired = ref("");
    const location = ref("");
    const quantity = ref(0);

    const offset = ref(1);
    const limit = ref(10);

    const itemCount = ref(0);

    const disabled = ref(false);

    const selectedQuantity = ref("");

    const description = ref("");
    const category = ref("");
    const maker = ref("");
    const itemId = ref("");

    const searchQuery = ref("");

    const searchedItemList = ref([]);

    const allItemsList = ref([]);

    const checkedItems = ref([]);

    const router = useRouter();

    const isLoading = ref(false);

    const success = ref("");
    const err = ref("");

    const store = useStore();

    const modalActive = ref(false);
    const selectItemsOption = ref(false);

    const clearAllSelected = () => {
      checkedItems.value = [];
    };

    const removeChecked = (index) => {
      checkedItems.value.splice(index, 1);
    };

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    const selectItems = () => {
      selectItemsOption.value = true;
    };
    const selectItemsFalse = () => {
      selectItemsOption.value = false;
    };

    const onItemChecked = (item) => {
      // if (item.item_status == "Consumed" || "Pending Consumption") {
      //   alert("You cannot select this item");
      // }
      if (item) {
        item.selectedQuantity = item.quantity;
      }
    };

    const onKeydown = (event) => {
      const char = String.fromCharCode(event.keyCode);
      // if (item.initialQuantity < item.quantity) {
      //   alert("item can not be more than " + item.initialQuantity);
      // }
      // if (!/[0-9 ]/.test(char)) {
      // }
      event.preventDefault();
    };

    const checkQuantity = (selected) => {
      let item = checkedItems.value.find((el) => el.id == selected.id);

      console.log(checkedItems.value);

      if (item.selectedQuantity > item.quantity) {
        alert("item quantity greater than item");
        return;
      }
    };

    const handleAddItemToBatch = () => {
      try {
        // let itemQuantity = checkedItems.value.map((el) => el.quantity);
        // let selectedQuantity = checkedItems.value.map(
        //   (el) => el.selectedQuantity
        // );
        // checkQuantity(item);
        if (checkedItems.value.length > 0) {
          store.commit("createBatch", checkedItems.value);

          router.push("/create-batch");

          // console.log("batch", checkedItems.value);
        } else {
          alert("Input the correct quantity");
          return;
        }
      } catch (error) {}
    };

    const getItem = async (id) => {
      router.push(`/item-review/${id}`);
    };

    const filteredItems = computed(() => {
      const items = searchQuery.value
        ? allItemsList.value.filter((item) =>
            item.item_name.includes(searchQuery.value)
          )
        : allItemsList.value;

      return items.filter((item) =>
        item.item_name
          .toLowerCase()
          .includes(searchQuery.value.toLocaleLowerCase())
      );
    });

    const getAllItems = async () => {
      try {
        isLoading.value = true;
        const response = await axios.get(
          `/api/v1/inventory?offSet=${offset.value}&limit=${limit.value}`
        );
        const allItems = response.data.data;

        const count = response.data.total_items;

        itemCount.value = count;
        console.log(itemCount.value);

        allItemsList.value = allItems;

        isLoading.value = false;
      } catch (error) {
        isLoading.value = false;
      }
    };

    // const getStoreItems = () => {
    //   const allItemsInStore = allItemsList.value.filter((item) => {
    //     item.status == "In store";
    //   });
    // };

    const checkItemInBatch = () => {};

    const handleAddItem = async () => {
      try {
        isLoading.value = true;

        await store.dispatch("createItem", {
          name: itemName.value,
          category: category.value,
          description: description.value,
          location: location.value,
          maker: maker.value,
          quantity: quantity.value,
          item_condition: condition.value,
          submitted_by: submitted_by.value,
          image: image.value,
          acquired: acquired.value,

          // location: locations.value,
        });
        (itemName.value = ""),
          (category.value = ""),
          (description.value = ""),
          (location.value = ""),
          (maker.value = ""),
          (success.value = "item added successfully");

        setTimeout(() => {
          success.value = null;
        }, 3000);
      } catch (error) {
        isLoading.value = false;
        console.log(error);
        err.value =
          error.response?.data?.details?.body[0].message ??
          "Cannot Add Item to Location";
        setTimeout(() => {
          err.value = null;
        }, 4000);
        // err.value = error.response?.data?.message ?? "Item can not be added";

        // setTimeout(() => {
        //   err.value = null;
        // }, 3000);
      }

      getAllItems();
      toggleModal();
    };

    const onClickHandler = (page) => {
      offset.value = page;

      getAllItems();
      // try {
      //   offset.value = page;
      //   // isLoading.value = true;\

      //   console.log(offset.value, limit.value);
      //   const response = await axios.get(
      //     `/api/v1/inventory?offSet=${offset.value}&limit=${limit.value}`
      //   );
      //   const allItems = response.data.data;

      //   const count = response.data.total_items;

      //   itemCount.value = count;
      //   console.log(itemCount.value);

      //   allItemsList.value = allItems;

      //   isLoading.value = false;
      // } catch (error) {
      //   isLoading.value = false;
      // }

      console.log(page);

      // console.log(itemCount.value);
    };

    return {
      disabled,
      modalActive,
      getAllItems,
      getItem,
      handleAddItem,
      handleAddItemToBatch,

      onClickHandler,
      filteredItems,

      itemCount,
      offset,
      limit,

      checkQuantity,

      onKeydown,

      // handleSearchQuery,
      selectedQuantity,
      selectItems,
      selectItemsOption,
      selectItemsFalse,

      removeChecked,

      onItemChecked,

      clearAllSelected,
      searchedItemList,
      // getUser,
      allItemsList,
      isLoading,

      searchQuery,
      // selectedItems
      checkedItems,
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

  computed: {
    filteredItems() {
      return this.allItemsList.filter((item) =>
        item.item_name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  watch: {
    searchQuery() {},
  },

  mounted() {
    // this.getItem();
    this.getAllItems();
  },
};
</script>

