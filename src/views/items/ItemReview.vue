<template>
  <div class="px-3 lg:px-10 m-3 lg:m-10">
    <h2 class="my-5 text-2xl font-bold">Items > Item Review</h2>
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

      <form @submit.prevent="handleAddItem">
        <div class="input-form flex flex-col-reverse lg:flex-row justify-between gap-4">
          <div class="flex-1">
            <div class="grid gap-5 lg:gap-[3rem] mb-6 lg:grid-cols-2">
              <div>
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

              <div>
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
                  <option value="electronics">Electronics</option>
                  <option value="consumables">Consumables</option>
                </select>
              </div>

              <div>
                <label
                  for="location"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Location</label>
                <input
                  type="text"
                  class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder=" Enter Location"
                />
              </div>

              <div>
                <label
                  for="quantity"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Quantity</label>
                <select
                  name="quantity"
                  id="quantity"
                  class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  v-model="quantity"
                  required
                >
                  <option value="one">1</option>
                  <option value="two">2</option>
                </select>
              </div>
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
          >Update</button>
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

    const location = ref("");
    const quantity = ref("");
    const description = ref("");
    const category = ref("");
    const itemId = ref("");

    const success = ref("");
    const err = ref("");

    const store = useStore();

    const handleAddItem = async () => {
      // console.log(store.state.user);
      try {
        await store.dispatch("createItem", {
          name: itemName.value,
          category: category.value,
          description: description.value,
          location: location.value,
          quantity: quantity.value,

          // employerId: store.state.user.id,
        });
        (itemName.value = ""),
          (category.value = ""),
          (description.value = ""),
          (location.value = ""),
          (success.value = "item added successfully");
        // sn.value = employerJobs.value.length + 1
        // sn.value + 1
        setTimeout(() => {
          success.value = null;
        }, 3000);
        // postJobModal.value = false;
      } catch (error) {
        console.log(error);
        err.value =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response;

        setTimeout(() => {
          err.value = null;
        }, 3000);
      }
    };

    return {
      handleAddItem,
      // getUser,
      location,
      quantity,
      description,
      category,

      itemName,

      success,
      err,
    };
  },
};
</script>

<style>
</style>