<template>
  <div class="mx-auto bg-[#f1f3f8] p-5">
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
          <div class="grid gap-6 mb-6 lg:grid-cols-2">
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
                for="maker"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Maker</label>
              <input
                type="text"
                id="maker"
                class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                placeholder="Maker"
                required
                v-model="maker"
              />
            </div>

            <div>
              <label
                for="acquired-on"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Acquired on</label>
              <input
                type="date"
                id="acquiredOn"
                class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                placeholder="20-09-9288"
                v-model="acquired"
                required
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
                for="category"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Location</label>
              <select
                name="location"
                id="location"
                class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                v-model="location"
                required
              >
                <option value="ibadan">Ibadan</option>
                <option value="lagos">Lagos</option>
              </select>
            </div>
            <div>
              <label
                for="condition"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Condition</label>
              <select
                name="condition"
                id="condition"
                class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                v-model="condition"
                required
              >
                <option value="good">Good</option>
                <option value="bad">bad</option>
              </select>
            </div>
            <div>
              <label
                for="submitted-by"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Submitted By</label>
              <input
                type="text"
                id="submittedBy"
                class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                placeholder="submited by"
                v-model="submitted_by"
                required
              />
            </div>
          </div>
          <div class="mb-6 w-full grid-cols-2">
            <textarea
              v-model="description"
              rows="3"
              placeholder="Description"
              class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary"
            ></textarea>
          </div>
        </div>
        <div class="image-upload w-1/3">
          <span id="upload-image">
            <img src="../../assets/upload-img.png" alt />
            <input name="upload-image" type="file" />
          </span>
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
</template>

<script>
export default {};
</script>

<style>
</style>