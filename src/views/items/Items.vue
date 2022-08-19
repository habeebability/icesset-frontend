<template>
  <div class="py-5 px-3 lg:ml-0 lg:px-10">
    <div v-if="!selectItemsOption" class="full-width">
      <div>
        <div class="heading-div flex justify-between items-center">
          <h1
            @click="selectItems"
            class="font-medium text-2xl my-3 cursor-pointer flex items-center"
          >
            <span class="mx-2">
              <svg
                width="30"
                height="25"
                viewBox="0 0 30 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.8573 9.64428C29.9992 9.35483 30.0363 9.03633 29.9639 8.72906C29.8915 8.4218 29.7128 8.13959 29.4504 7.91813L20.0755 0L17.4243 2.23925L23.5986 7.45412H0.000217222V10.6214H28.1248C28.4956 10.6215 28.8581 10.5287 29.1665 10.3547C29.4749 10.1808 29.7153 9.93358 29.8573 9.64428ZM0.142716 14.7657C0.00077111 15.0552 -0.0363369 15.3737 0.0360877 15.6809C0.108512 15.9882 0.287215 16.2704 0.549585 16.4919L9.92445 24.41L12.5757 22.1708L6.40137 16.9559H29.9998V13.7886H1.87519C1.50433 13.7883 1.14171 13.881 0.833291 14.055C0.52487 14.2289 0.284526 14.4763 0.142716 14.7657Z"
                  fill="#540D6E"
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
        <div class="overflow-x-auto relative shadow-md bg-white">
          <table class="table-auto text-center lg:text-left text-gray-50 dark:text-gray-400">
            <thead class="border-b border-purple-200 bg-[#F1F3F8] text-left">
              <tr class="bg-primary">
                <!-- <th scope="col" class="lg:py-3 lg:px-6"></th> -->
                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">SN</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Name</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Category</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Location</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Quantity</th>

                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in allItemsList"
                :key="item.item_id"
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
                >{{ item.store_id }}</td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >{{ item.quantity }}</td>

                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <button
                    class="font-medium hover:bg-purple-400 bg-secondary text-tertiary rounded-lg focus:outline-none py-2 px-3"
                    @click="getItem(item.item_id)"
                  >Review</button>
                  
                </td>
              </tr>
            </tbody>
          </table>

          <div class="loader flex justify-center">
            <TheLoader v-if="isLoading" />
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
          <router-link
            to="/items/add-new-item"
            class="inline-flex justify-center items-center py-2 px-3 lg:mr-6 lg:text-xl font-medium rounded-lg hover:border-primary hover:border-2"
          >+ Add New</router-link>
        </div>
        <div class="overflow-x-auto relative shadow-md bg-white">
          <table class="table-auto text-center lg:text-left text-gray-50 dark:text-gray-400">
            <thead class="border-b border-purple-200 bg-[#F1F3F8] text-left">
              <tr class="bg-primary">
                <!-- <th scope="col" class="lg:py-3 lg:px-6"></th> -->
                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">SN</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Name</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Category</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Location</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Quantity</th>

                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item) in allItemsList"
                :key="item.item_id"
                class="bg-gray-100 dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700"
              >
                <td
                  class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  <input type="checkbox" :value="item"
                  class="appearance-none h-5 w-5 border-[3px] border-purple-600 rounded-sm bg-white checked:bg-primary focus:outline-none transition duration-200 mt-1 cursor-pointer"
                  v-model="checkedItems" />
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >{{ item.item_name }}</td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >{{ item.category }}</td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >store-id {{ item.store_id }}</td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >{{ item.quantity }}</td>

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

      <div class="overflow-x-auto sticky top-10 py-5">
        <h1 class="text-right">
          <span>{{ 0 || checkedItems.length}}</span>
          <span class="ml-2">in Batch</span>
        </h1>
        <table class="table-auto mt-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in checkedItems" :key="index">
              <td>{{item.item_name}}</td>
              <td>{{item.store_id}}</td>
              <td class="text-center">
                <input class="w-10 h-5 border border-primary" type="number" />
              </td>
            </tr>
          </tbody>
        </table>
        <button class="bg-primary text-white py-2 px-5 w-full my-5">Next</button>
      </div>
    </div>

    <!-- <div v-if="modalActive">
      <Modal :modalActive="modalActive" class="relative">
        <div
          class="close-icon absolute sm:top-15 lg:top-5 right-5 w-10 h-10 cursor-pointer hover:border-gray"
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
        <h1 class="border-b-2 border-gray-light px-2 md:px-5 text-2xl font-bold pb-3">Add New Item</h1>
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
      </Modal>
    </div>-->
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
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
    const quantity = ref("");
    const description = ref("");
    const category = ref("");
    const maker = ref("");
    const itemId = ref("");
    const allItemsList = ref([]);
    const checkedItems = ref([]);

    const isLoading = ref(false);

    const router = useRouter();

    console.log(checkedItems.value);

    // const selectedItems = () => {
    //   allItemsList
    //     .filter((item) => item.selected)
    //     .map((item) => item.item_name);
    // };

    const success = ref("");
    const err = ref("");

    const store = useStore();

    const modalActive = ref(false);
    const selectItemsOption = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    const selectItems = () => {
      selectItemsOption.value = true;
    };
    const selectItemsFalse = () => {
      selectItemsOption.value = false;
    };

    // function getItem() {
    //   // username.value =
    //   //   store.state.user.firstname + " " + store.state.user.lastname;
    //   // userRole.value = store.state.user.role;

    //   itemId.value = store.state.item.id;
    // }

    const getItem = async (id) => {
      try {
        isLoading.value = true;
        const response = await axios.get(`/api/v1/inventory/${id}`);
        // console.log(store.state.item);

        const itemData = response.data;
        console.log(itemData);
        // console.log(itemId.value);
        isLoading.value = false;
        router.push( "/item-review")
        // getItem()
      } catch (error) {
        isLoading.value = false;
      }
      // console.log(id);
    };

    //  const getItem = () => {
    //         router.push({
    //             path: "/item-review"
    //         })
    //     }

    const getAllItems = async () => {
      try {
        isLoading.value = true;
        const response = await axios.get(`/api/v1/inventory`);

        const allItems = response.data.data;
        allItemsList.value = allItems;

        // console.log(itemId.value);
      } catch (error) {
        isLoading.value = false;
      }
    };

    const handleAddItem = async () => {
      // console.log(store.state.user);
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

          // employerId: store.state.user.id,
        });
        (itemName.value = ""),
          (category.value = ""),
          (description.value = ""),
          (location.value = ""),
          (maker.value = ""),
          (success.value = "item added successfully");
        // sn.value = employerJobs.value.length + 1
        // sn.value + 1
        setTimeout(() => {
          success.value = null;
        }, 3000);
        // postJobModal.value = false;
      } catch (error) {
        isLoading.value = false;
        console.log(error);
        err.value = error.response?.data?.message ?? "Cannot create user";
        // error.response && error.response.data.error
        //   ? error.response.data.error
        //   : error.response;

        setTimeout(() => {
          err.value = null;
        }, 3000);
      }

      getAllItems();
      toggleModal();
    };

    return {
      modalActive,
      getAllItems,
      getItem,
      handleAddItem,
      selectItems,
      selectItemsOption,
      selectItemsFalse,
      // getUser,
      allItemsList,
      isLoading,
      // selectedItems,
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

  mounted() {
    this.getItem();
    this.getAllItems();
  },
};
</script>

<style>
/* table {
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
} */
</style>
