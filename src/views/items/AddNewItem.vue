<template>
  <div class="px-3 lg:px-10 m-3 lg:m-10">
    <nav class="font-medium text-2xl my-3 cursor-pointer flex items-center">
      <ol class="list-reset flex">
        <li>
          <span class="text-gray-500 mx-2"></span>
        </li>
        <li>
          <router-link to="/items">
            <a class="text-primary hover:text-blue-700">Items</a>
          </router-link>
        </li>
        <li>
          <span class="text-gray-500 mx-2 text-secondary">>></span>
        </li>
        <li class="text-gray-500">New Item</li>
      </ol>
    </nav>
    <div class="mx-auto bg-[#f1f3f8] p-5 lg:px-10">
      <div
        v-if="err"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <span class="block sm:inline">{{ err }}</span>
      </div>

      <div
        v-if="success"
        class="bg-primary border border-green-400 text-white px-4 py-3 rounded relative"
        role="alert"
      >
        <span class="block sm:inline">{{ success }}</span>
      </div>

      <form class @submit.prevent="handleAddItem">
        <div class="input-form flex flex-col-reverse lg:flex-row justify-between gap-4">
          <div class="flex-1">
            <div class="gap-5 mb-6">
              <div class="flex justify-between gap-5 mb-3">
                <div class="w-full">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Name</label>
                  <input
                    type="text"
                    id="name"
                    class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Item Name"
                    required
                    v-model="itemName"
                  />
                </div>

                <div class="w-full relative">
                  <label
                    for="category"
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Category</label>

                  <button
                    @click="toggleCategoryModal"
                    type="button"
                    class="absolute top-0 right-0 text-primary font-semibold"
                  >+ Add Category</button>
                  <select
                    name="category"
                    id="category"
                    class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    v-model="category"
                    required
                  >
                    <option value>Select Category</option>
                    <option
                      :value="category.category_name"
                      v-for="category in allCategoriesList"
                      :key="category.category_id"
                    >{{category.category_name}}</option>
                    <!-- <option value="electronics">Electronics</option>
                    <option value="consumables">Consumables</option>
                    <option value="machineries">Machineries</option>
                    <option value="tools">Tools</option>
                    <option value="stationaries">Stationaries</option>
                    <option value="computer accessories">Computer and Accessories</option>-->
                  </select>
                </div>
              </div>

              <template class v-for="(location,i) in locations" :key="i">
                <div class="grid grid-cols-4 my-5 bg-purple-100 p-5 gap-5 relative">
                  <div class="w-full my-3">
                    <label
                      for="location"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Location</label>

                    <select
                      class="bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                      v-model="location.locationObject"
                      id="storesList"
                    >
                      <option
                        :value="storeData"
                        v-for="(storeData, index) in storesList"
                        :key="index"
                      >{{storeData.store_name}}</option>
                    </select>
                  </div>
                  <div class="w-full my-3">
                    <label
                      for="staff"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Asign to</label>

                    <select
                      class="bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                      v-model="location.staffObject"
                      id="staffsList"
                    >
                      <option
                        :value="staffData"
                        v-for="(staffData, index) in staffsList"
                        :key="index"
                      >{{staffData.firstName}} {{staffData.lastName}}</option>
                    </select>
                  </div>

                  <div class="w-full my-3">
                    <label
                      for="quantity"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Quantity</label>
                    <input
                      class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                      v-model="location.quantity"
                      type="number"
                      min="1"
                    />
                  </div>
                  <div class="w-full my-3">
                    <label
                      for="unit"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Unit</label>

                    <select
                      class="bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                      v-model="location.unit"
                      id="unit"
                    >
                      <option value>choose unit</option>

                      <option value="litre">Litre(s)</option>
                      <option value="dozen">Dozen</option>
                      <option value="bags">Bag(s)</option>
                      <option value="packs">Pack(s)</option>
                      <option value="inches">Inche(s)</option>
                      <option value="feets">Feet</option>
                      <option value="NA">NA</option>
                    </select>

                    <button
                      class="text-[#F15025] absolute font-bold text-xl right-5 top-0"
                      @click.prevent="deleteLocation(i)"
                    >X Delete</button>
                  </div>
                  <div class="w-full my-1">
                    <label
                      for="supplier-name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Supllier Name</label>
                    <input
                      name="supplier-name"
                      class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                      v-model="location.supplierName"
                      type="text"
                      placeholder="Input Supplier Name"
                    />
                  </div>
                  <div class="w-full my-1">
                    <label
                      for="supplier-phone"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Supllier Phone</label>
                    <input
                      name="supplier-phone"
                      class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                      v-model="location.supplierPhone"
                      type="text"
                      placeholder="input supplier phone number"
                    />
                  </div>
                  <div class="w-full my-1">
                    <label
                      for="supplier-email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Supllier Email</label>
                    <input
                      name="supplier-email"
                      class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                      v-model="location.supplierEmail"
                      type="email"
                      placeholder="input supplier email"
                    />
                  </div>
                  <div class="w-full my-1">
                    <label
                      for="item-condition"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Item Condition</label>
                    <select
                      class="bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                      v-model="location.itemCondition"
                      id="storesList"
                    >
                      <option value>choose condition</option>

                      <option value="good">Good</option>
                      <option value="under maintenance">under maintenance</option>
                      <option value="bad">Bad</option>
                    </select>
                  </div>
                </div>
              </template>
            </div>
            <div class="my-5">
              <button
                @click.prevent="addMoreLocation"
                class="text-primary font-bold text-xl"
              >+ More Location</button>
            </div>

            <div class="mb-6 lg:w-1/2">
              <textarea
                v-model="description"
                rows="3"
                placeholder="Description"
                class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <button
            :disabled="addButtonClicked"
            type="submit"
            class="flex justify-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            <span class="text-center">
              <svg
                v-show="isLoading"
                class="h-5 w-5 mx-auto text-white animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <span v-if="!isLoading">Add Item</span>
          </button>

          <!-- <button
            @click.once="preventDefault()"
            class="px-4 py-2 text-sm font-medium rounded text-white bg-purple-700 hover:bg-purple-600/80"
          >
            <svg
              v-show="isLoading"
              class="w-5 h-5 text-white animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              />
            </svg>
            <span :class="{'invisible': isLoading}">Add Item</span>
          </button>-->
        </div>
      </form>
    </div>
  </div>

  <!-- add category modal -->

  <div v-if="categoryModal" class="md:w-1/2">
    <Modal :modalActive="categoryModal" class="relative" @close="toggleCategoryModal">
      <div
        class="close-icon absolute sm:top-15 lg:top-5 right-5 w-10 h-10 cursor-pointer hover:border-gray"
      >
        <svg
          @click="toggleCategoryModal"
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
      <h1 class="border-b-2 border-gray-light px-2 md:px-5 text-2xl font-bold pb-3">Add Category</h1>
      <div class="mx-auto bg-[#f1f3f8] p-5">
        <div
          v-if="addCategoryError"
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span class="block sm:inline">{{ addCategoryError }}</span>
        </div>

        <div
          v-if="addCategorySuccess"
          class="bg-green border border-white text-white px-4 py-3 rounded relative"
          role="alert"
        >
          <span class="block sm:inline">{{ addCategorySuccess }}</span>
        </div>

        <!-- <div
          v-if="addCategorySuccess"
          class="bg-green-400 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">YAY!</strong>
          <span class="block sm:inline">{{ addCategorySuccess }}</span>
        </div>-->

        <form @submit.prevent="handleAddCategory">
          <div class="input-form flex flex-col-reverse lg:flex-row justify-between gap-4">
            <div class="flex-1">
              <div class>
                <div>
                  <label
                    for="categoryName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >New Category</label>
                  <input
                    type="text"
                    id="categoryName"
                    class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Enter New Category"
                    v-model="newCategory"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="my-5">
            <button
              type="submit"
              class="text-white bg-primary hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center"
            >
              <span class="text-center">
                <svg
                  v-show="isLoadingCategory"
                  class="h-5 w-5 mx-auto text-white animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <span v-if="!isLoadingCategory">Add Category</span>
            </button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import Modal from "../../components/ui/Modal.vue";
export default {
  components: { Modal },
  setup() {
    const isLoading = ref(false);
    const itemName = ref("");

    const newCategory = ref("");

    const categoryModal = ref(false);

    const addButtonClicked = ref(false);

    const supplierName = ref("");

    const supplierContact = ref("");

    const staffsList = ref([]);
    const allCategoriesList = ref([]);

    const storesList = ref([]);

    const router = useRouter();

    const oneStore = ref({});

    const oneStaff = ref({});

    const storeId = ref({});

    const emptyLocation = {
      locationObject: null,
      staffObject: null,
      quantity: 1,
      unit: null,
      supplierPhone: null,
      supplierName: null,
      supplierEmail: null,
      itemCondition: null,
    };

    const locations = ref([{ ...emptyLocation }]);

    // const location = ref("");
    // const quantity = ref("");
    const description = ref("");
    const category = ref("");
    const itemId = ref("");

    const success = ref("");
    const err = ref("");

    const addCategorySuccess = ref("");
    const addCategoryError = ref("");
    const isLoadingCategory = ref(false);

    const store = useStore();

    const toggleCategoryModal = () => {
      categoryModal.value = !categoryModal.value;
    };

    const deleteLocation = (index) => {
      locations.value.splice(index, 1);
    };

    // const onSelectStore = (e) => {
    //   console.log(getStore(oneStore.value));
    // };

    const getStore = async (id) => {
      alert(id.store_name);
      try {
        // const response = await axios.get(`/api/v1/locations/${id}`);
        // console.log(store.state.item);
        // const storeData = response.data;
        oneStore.value.store_id = id.store_id;
        oneStore.value.store_name = id.store_name;
      } catch (error) {}
    };

    const addMoreLocation = () => {
      console.log("onestore", oneStore.value.store_id);
      locations.value = [
        ...locations.value,
        {
          ...emptyLocation,
        },
      ];

      console.log(locations);
    };

    const handleAddCategory = async () => {
      // console.log(store.state.user);
      try {
        isLoadingCategory.value = true;
        await store.dispatch("createCategory", {
          category_name: newCategory.value,
        });

        (newCategory.value = ""),
          (addCategorySuccess.value = "category added successfully");
        category.value = newCategory.value;
        isLoadingCategory.value = false;

        setTimeout(() => {
          addCategorySuccess.value = null;
          getAllCategories();
          toggleCategoryModal();

          // router.push("/items/add-n");
        }, 3000);
      } catch (error) {
        isLoadingCategory.value = false;
        addCategoryError.value =
          error.response?.data?.details?.body[0].message ?? "Server Error";
        setTimeout(() => {
          addCategoryError.value = null;
        }, 4000);
      }
    };

    const handleAddItem = async () => {
      // console.log(store.state.user);
      try {
        isLoading.value = true;
        await store.dispatch("createItem", {
          item_name: itemName.value,
          category: category.value,
          description: description.value,

          locations: locations.value.map((location) => ({
            store_id: location.locationObject.store_id,
            store_name: location.locationObject.store_name,
            quantity: location.quantity,

            unit: location.unit,
            supplier_name: location.supplierName,
            supplier_phone: location.supplierPhone,
            supplier_email: location.supplierEmail,
            item_condition: location.itemCondition,
            user_id: location.staffObject.user_id,

            user_name: `${location.staffObject.firstName} ${location.staffObject.lastName}`,
          })),
        });

        (locations.value = []), (success.value = "item added successfully");
        isLoading.value = false;
        setTimeout(() => {
          success.value = null;
          router.push("/items");
        }, 3000);
      } catch (error) {
        isLoading.value = false;
        err.value =
          error.response?.data?.details?.body[0].message ?? "Server Error";
        setTimeout(() => {
          err.value = null;
        }, 4000);
      }
    };

    const getAllStores = async () => {
      try {
        const response = await axios.get(`/api/v1/locations`);
        const allStores = response.data.data.result;
        // console.log(response.data.data);
        storesList.value = allStores;
      } catch (error) {}
    };

    const getAllStaffs = async () => {
      try {
        const response = await axios.get(`/api/v1/users`);
        const allStaffs = response.data.data.result;
        staffsList.value = allStaffs;
      } catch (error) {}
    };

    const getAllCategories = async () => {
      try {
        const response = await axios.get("/api/v1/inventory-category");
        // console.log(response);
        allCategoriesList.value = response.data.result;
      } catch (error) {}
    };

    return {
      handleAddItem,
      handleAddCategory,

      isLoadingCategory,
      addCategorySuccess,
      addCategoryError,

      newCategory,
      addMoreLocation,
      deleteLocation,
      addButtonClicked,
      isLoading,
      getStore,
      // onSelectStore,

      staffsList,
      storesList,
      getAllStores,
      getAllStaffs,
      getAllCategories,
      allCategoriesList,
      // getUser,
      locations,
      // location,
      // quantity,
      description,

      category,
      categoryModal,
      toggleCategoryModal,

      itemName,
      supplierName,
      supplierContact,

      success,
      err,
    };
  },
  mounted() {
    this.getAllStores();
    this.getAllStaffs();
    this.getAllCategories();
  },
};
</script>

<style>
</style>