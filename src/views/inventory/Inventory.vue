<template>
  <div class="flex flex-col ml-6 lg:ml-0 px-10">
    <h1 class="font-semibold lg:text-2xl text-sm mt-5 ml-5">Inventory</h1>
    <div class="bg-gray-light ml-4 my-5 mr-6 w-64 lg:w-auto h-auto px-3 py-6">
      <div class="search-and-add flex justify-between items-center">
        <div
          class="flex w-1/2 items-center bg-white h-16 p-2 lg:px-3 lg:py-1 rounded-lg"
        >
          <div class="relative w-full mr-6">
            <input
              type="text"
              class="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg p-2 block w-full lg:pl-10 lg:p-2.5"
              placeholder="Search"
            />
          </div>
          <button
            type="submit"
            class="inline-flex justify-center items-center p-1 w-32 lg:ml-2 lg:mr-6 lg:text-xl font-medium text-primary rounded-lg border-2 lg:border-4 border-primary hover:bg-primary hover:border-none hover:text-tertiary"
          >
            search
          </button>
        </div>
        <button
          @click="toggleModal"
          class="inline-flex justify-center items-center p-1 w-32 lg:ml-2 lg:mr-6 lg:text-xl font-medium text-primary rounded-lg border-1 lg:border-4 hover:bg-primary hover:border-none hover:text-tertiary"
        >
          + Add New
        </button>
      </div>
      <div class="flex lg:m-4 m-2 text-sm">
        <label for="number_disabled">show</label>
        <select
          id="number_disabled"
          class="bg-white text-gray-900 text-sm mx-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 lg:w-16 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <!-- <option value="five">5</option> -->
          <option selected>10</option>
          <option value="fifteen">20</option>
          <option value="twenty">30</option>
          <option value="twenty-five">40</option>
          <option value="thirty">50</option>
        </select>
        <label>entries</label>
      </div>

      <div class="overflow-x-auto relative shadow-md bg-white">
        <table
          class="w-full h-auto text-xs lg:text-xl text-center lg:text-left text-gray-50 dark:text-gray-400"
        >
          <thead class="lg:text-xl text-xs text-gray-700">
            <tr>
              <!-- <th scope="col" class="lg:py-3 lg:px-6"></th> -->
              <th scope="col" class="lg:py-3 lg:px-6">SN</th>
              <th scope="col" class="lg:py-3 lg:px-6">Name</th>
              <th scope="col" class="lg:py-3 lg:px-6">Quantity</th>
              <th scope="col" class="lg:py-3 lg:px-6">Category</th>
              <th scope="col" class="lg:py-3 lg:px-6">Maker</th>
              <th scope="col" class="lg:py-3 lg:px-6">Location</th>
              <th scope="col" class="lg:py-3 lg:px-6">Added on</th>
              <th scope="col" class="lg:py-3 lg:px-6">Action</th>
            </tr>
          </thead>
          <tbody>
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
            </tr> -->
          </tbody>
        </table>
      </div>

      <div v-if="modalActive" class="bg-green">
        <Modal :modalActive="modalActive" class="relative">
          <div
            class="close-icon absolute top-5 right-5 w-10 h-10 cursor-pointer hover:border-gray"
          >
            <svg
              @click="toggleModal"
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
              ></line>
              <line
                x1="25"
                y1="15"
                x2="15"
                y2="25"
                stroke="crimson"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-miterlimit="10"
              ></line>
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
              ></circle>
              <path
                d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z"
                class="progress"
                stroke="crimson"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-miterlimit="10"
                fill="none"
              ></path>
            </svg>
          </div>
          <h1 class="border-b-2 border-tertiary px-5 text-2xl font-bold pb-3">
            Add New Item
          </h1>
          <div class="mx-auto bg-[#f1f3f8] p-5">
            <div
              v-if="err"
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong class="font-bold">OOPS! </strong>
              <span class="block sm:inline">{{ err }}</span>
            </div>

            <div
              v-if="success"
              class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong class="font-bold">YAY! </strong>
              <span class="block sm:inline">{{ success }}</span>
            </div>

            <form @submit.prevent="addItem">
              <div class="input-form flex justify-between items-center">
                <div>
                  <div class="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Name</label
                      >
                      <input
                        type="text"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        placeholder="name"
                        required
                        v-model="name"
                      />
                    </div>
                    <div>
                      <label
                        for="maker"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Maker</label
                      >
                      <input
                        type="text"
                        id="maker"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        placeholder="Maker"
                        required
                        v-model="maker"
                      />
                    </div>

                    <div>
                      <label
                        for="acquired-on"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Acquired on</label
                      >
                      <input
                        type="text"
                        id="acquiredOn"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        placeholder="0817263647"
                        v-model="acquiredOn"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="quantity"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Quantity</label
                      >
                      <select
                        name="quantity"
                        id="quantity"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
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
                        >Category</label
                      >
                      <select
                        name="category"
                        id="category"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
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
                        >Location</label
                      >
                      <select
                        name="location"
                        id="location"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        v-model="category"
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
                        >Condition</label
                      >
                      <select
                        name="condition"
                        id="condition"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
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
                        >Submitted By</label
                      >
                      <input
                        type="text"
                        id="submittedBy"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        placeholder="submited by"
                        v-model="submittedBy"
                        required
                      />
                    </div>
                  </div>
                  <div class="mb-6 w-full grid-cols-2">
                    <textarea
                      v-model="message"
                      rows="3"
                      placeholder="Message"
                      class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary"
                    ></textarea>
                  </div>
                </div>
                <div class="image-upload">
                  <button id="upload-image">
                    <img src="../../assets/upload-img.png" alt="" />
                    <input name="upload-image" type="file" />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Modal from "../../components/ui/Modal.vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
};
</script>

<style>
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
