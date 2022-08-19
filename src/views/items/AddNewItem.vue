<template>
  <div class="px-3 lg:px-10 m-3 lg:m-10">
    <nav  class="font-medium text-2xl my-3 cursor-pointer flex items-center">
      <ol class="list-reset flex">
        <li><span class="text-gray-500 mx-2"></span></li>
        <li><router-link to="/items"><a class="text-primary hover:text-blue-700">Items</a></router-link></li>
        <li><span class="text-gray-500 mx-2 text-secondary"> >> </span></li>
        <li class="text-gray-500">New Item</li>
      </ol>
    </nav>
    <div class="mx-auto bg-[#f1f3f8] p-5 lg:px-10">
      <div
        v-if="err"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold">OOPS!</strong>
        <span class="block sm:inline">{{ err }}</span>
      </div>

      <div
        v-if="success"
        class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold">YAY!</strong>
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
                    placeholder="name"
                    required
                    v-model="itemName"
                  />
                </div>

                <div class="w-full">
                  <label
                    for="category"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Category</label>
                  <select
                    name="category"
                    id="category"
                    class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    v-model="category"
                    required
                  >
                    <option value>Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="consumables">Consumables</option>
                  </select>
                </div>
              </div>
              <template class v-for="(location,i) in locations" :key="i">
                <div class="flex justify-between gap-5 relative">
                  <div class="w-full my-3">
                    <label
                      for="location"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Location</label>
                    <!-- <input
                    list="storesList"
                    v-model="location.name"
                    type="text"
                    class="bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder=" select Location"
                    />-->
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
                    >Staff</label>
                    <!-- <input
                    list="storesList"
                    v-model="location.name"
                    type="text"
                    class="bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder=" select Location"
                    />-->
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
                    />
                    <!-- <select
                    name="quantity"
                    id="quantity"
                    class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    v-model="location.quantity"
                    required
                  >
                    <option value="one">1</option>
                    <option value="two">2</option>
                    </select>-->
                    <button
                      class="text-[#F15025] absolute font-bold text-xl right-5 top-0"
                      @click.prevent="deleteLocation(i)"
                    >X Delete</button>
                  </div>
                </div>
              </template>
            </div>
            <div class="my-5">
              <button
                class="text-primary font-bold text-xl"
                @click.prevent="addMoreLocation"
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
            type="submit"
            class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >Add Item</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";
export default {
  setup() {
    const itemName = ref("");

    const staffsList = ref([]);

    const storesList = ref([]);

    const oneStore = ref({});
    const oneStaff = ref({});

    const storeId = ref({});

    const emptyLocation = {
      locationObject: null,
      staffObject: null,
      quantity: 0,
    };

    const locations = ref([{ ...emptyLocation }]);

    // const location = ref("");
    // const quantity = ref("");
    const description = ref("");
    const category = ref("");
    const itemId = ref("");

    const success = ref("");
    const err = ref("");

    const store = useStore();

    const deleteLocation = (index) => {
      locations.value.splice(index, 1);
    };

    // const onSelectStore = (e) => {
    //   console.log(getStore(oneStore.value));
    // };

    const getStore = async (id) => {
      console.log("i am id");
      alert(id.store_name);
      try {
        // const response = await axios.get(`/api/v1/locations/${id}`);
        // console.log(store.state.item);
        // const storeData = response.data;
        oneStore.value.store_id = id.store_id;
        oneStore.value.store_name = id.store_name;

        console.log(oneStore);
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

    const handleAddItem = async () => {
      // console.log(store.state.user);
      try {
        await store.dispatch("createItem", {
          item_name: itemName.value,
          category: category.value,
          description: description.value,
          locations: locations.value.map((location) => ({
            store_id: location.locationObject.store_id,
            store_name: location.locationObject.store_name,
            user_id: location.staffObject.user_id,
            user_name: `${location.staffObject.firstName} ${location.staffObject.lastName}`,
            quantity: location.quantity,
          })),

          // employerId: store.state.user.id,
        });

        (itemName.value = ""),
          (category.value = ""),
          (description.value = ""),
          (locations.value = [{ store_id: null, quantity: 0 }]),
          (success.value = "item added successfully");
        // sn.value = employerJobs.value.length + 1
        // sn.value + 1
        setTimeout(() => {
          success.value = null;
        }, 3000);
        // postJobModal.value = false;
      } catch (error) {
        // console.log(error);
        err.value = error.response?.data?.message ?? "Cannot create item";
        // error.response && error.response.data.error
        //   ? error.response.data.error
        //   : error.response;

        setTimeout(() => {
          err.value = null;
        }, 3000);
      }
    };

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

    // const getAllStaffs = async () => {
    //   try {
    //     isLoading.value = true;
    //     const response = await axios.get(`/api/v1/users`);

    //     const allUsers = response.data.data;
    //     staffsList.value = allUsers;

    //     isLoading.value = false;
    //     // console.log(userId.value);
    //   } catch (error) {
    //     isLoading.value = false;
    //   }
    // };

    return {
      handleAddItem,
      addMoreLocation,
      deleteLocation,

      getStore,
      // onSelectStore,

      staffsList,
      storesList,
      getAllStores,
      getAllStaffs,
      // getUser,
      locations,
      // location,
      // quantity,
      description,
      category,

      itemName,

      success,
      err,
    };
  },
  mounted() {
    this.getAllStores();
    this.getAllStaffs();
  },
};
</script>

<style>
</style>