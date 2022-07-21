<template>
  <div class="flex flex-col ml-6 lg:ml-0">
    <h1 class=" font-semibold lg:text-2xl text-sm mt-5 ml-5"> Staff List</h1>
    <div class="bg-gray-light ml-4 my-5 mr-6 w-64 lg:w-auto h-auto px-3 py-6 ">
      <div class="flex justify-between items-center bg-white h-16 p-2 lg:px-3 lg:py-1 rounded-lg ">
        <div class="flex"> 
          <div class="relative w-full mr-1 lg:mr-6">
              
            <input type="text" class="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 block w-full lg:pl-10 lg:p-2.5  dark:bg-gray-700" placeholder="Search">
              
          </div>
          <button type="submit" class="inline-flex justify-center items-center p-1 lg:p-1 w-20 lg:w-32 lg:ml-2 lg:mr-6 text-xs lg:text-xl font-medium text-primary rounded-lg border-2 lg:border-4 border-primary hover:bg-secondary">
              search
          </button>
        </div> 
        <div class="">
            <button @click="toggleModal" type="button" class="inline-flex lg:justify-center w-12 items-center p-1 lg:p-2 lg:w-40 text-xs lg:text-xl font-medium text-white rounded-lg border-2 bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              +New
            </button>
        </div>
      </div>
      <div class="flex lg:m-4 m-2 text-sm">
        <label for="number_disabled">show</label>
        <select id="number_disabled" class="bg-white text-gray-900 text-sm mx-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 lg:w-16 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
        <table class="w-full h-auto text-xs lg:text-xl text-center lg:text-left text-gray-50 dark:text-gray-400">
          <thead class="lg:text-xl text-xs text-gray-700 ">
            <tr>
              <th scope="col" class="lg:py-3 lg:px-6">
                SN
              </th>
              <th scope="col" class="lg:py-3 lg:px-6">
                Name
              </th>
              <th scope="col" class="lg:py-3 lg:px-6">
                Role
              </th>
              <th scope="col" class="lg:py-3 lg:px-6">
                Email
              </th>
              <th scope="col" class="lg:py-3 lg:px-6">
                Phone No.
              </th>
              <th scope="col" class="lg:py-3 lg:px-6">
                Status
              </th>
              <th scope="col" class="lg:py-3 lg:px-6">
                Added on 
              </th>
              <th scope="col" class="lg:py-3 lg:px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700">
              <td class="lg:py-2 lg:px-4">
                01
              </td>
              <td class="lg:py-2 lg:px-4">
                Mr Emmanuel
              </td>
              <td class="lg:py-2 lg:px-4">
                Admin
              </td>
              <td class="lg:py-2 lg:px-4">
                Emmanuel@prl.com
              </td>
              <td class="lg:py-2 lg:px-4">
                08100582377
              </td>
              <td class="lg:py-2 lg:px-4">
                Active
              </td>
              <td class="lg:py-2 lg:px-4">
                12-07-2022
              </td>
              <td class="lg:py-2 lg:px-4">
                <button type="submit" class="inline-flex justify-center items-center p-2 lg:w-40 mt-8 text-xs lg:text-xl font-medium text-white rounded-lg border-2 bg-secondary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Review
                </button>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700">
              <td class="lg:py-2 lg:px-4">
                01
              </td>
              <td class="lg:py-2 lg:px-4">
                Mr Emmanuel
              </td>
              <td class="lg:py-2 lg:px-4">
                Admin
              </td>
              <td class="lg:py-2 lg:px-4">
                Emmanuel@prl.com
              </td>
              <td class="lg:py-2 lg:px-4">
                08100582377
              </td>
              <td class="lg:py-2 lg:px-4">
                Active
              </td>
              <td class="lg:py-2 lg:px-4">
                12-07-2022
              </td>
              <td class="lg:py-2 lg:px-4">
                <button type="submit" class="inline-flex justify-end items-center p-2 lg:w-40 mt-8 text-xs lg:text-xl font-medium text-white rounded-lg border-2 bg-secondary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Review
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-end items-center m-4">
        
        <!-- Buttons -->
       
        <span class="">
          <i class="ri-arrow-left-s-fill ri-lg lg:ri-3x"></i>
        </span>
        <!-- Help text -->
        <div class="flex text-xs lg:text-xl ">
          <span class=" dark:text-gray-400">
            1 of 30
          </span>
        </div>
        <span class="">
          <i class="ri-arrow-right-s-fill ri-lg lg:ri-3x"></i>
        </span>
        
      </div>
      <div v-if="modalActive" >
          <Modal :modalActive="modalActive" class="bg-gray-light" >
          <div class=" rounded-0">
          <h1 class="border-b-2 border-gray-light text-2xl font-bold pb-3">Add New Item</h1>
              <!-- <div
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
              </div> -->

              <form @submit.prevent="addItem">
              <div class="input-form flex justify-center items-center">
                  <div>
                  <div class="grid gap-6 mb-6 lg:grid-cols-2">
                      <div>
                      <label
                          for="name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >First Name</label
                      >
                      <input
                          type="text"
                          id="name"
                          class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                          placeholder="Enter first name"
                          required
                          v-model="name"
                      />
                      </div>
                      <div>
                      <label
                          for="maker"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >Phone Number</label
                      >
                      <input
                          type="text"
                          id="maker"
                          class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                          placeholder="Enter phone no"
                          required
                          v-model="maker"
                      />
                      </div>

                      <div>
                      <label
                          for="acquired-on"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >Last Number</label
                      >
                      <input
                          type="text"
                          id="acquiredOn"
                          class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                          placeholder="Enter last name"
                          v-model="acquiredOn"
                          required
                      />
                      </div>
                      <div>
                      <label
                          for="quantity"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >Email</label
                      >
                      <input
                          type="text"
                          id="acquiredOn"
                          class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                          placeholder="Enter email"
                          v-model="acquiredOn"
                          required
                      />
                      </div>
                      <div>
                      <label
                          for="category"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >Role</label
                      >
                      <select
                          name="role"
                          id="role"
                          class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                          v-model="role"
                          required
                      >
                          <option selected>Select role</option>
                          <option value="electronics">Admin</option>
                          <option value="electronics">Storekeeper</option>
                          <option value="consumables">Project Manager</option>
                          <option value="electronics">Technician</option>
                          <option value="electronics">Electrician</option>
                      </select>
                      </div>
                      <div>
                      <label
                          for="password"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >Password</label
                      >
                      <input
                          type="text"
                          id="password"
                          class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                          placeholder="Enter password"
                          v-model="password"
                          required
                      />
                      </div>
                    </div>
                  </div>
              </div>

              <button
                  type="submit"
                  class="text-white flex justify-end bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold rounded-lg text-sm w-full right-0 sm:w-auto px-5 py-2.5 text-center"
              >
                  Add staff
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
          
        th, td {
            text-align: left;
            padding: 8px;
        }
          
        tr:nth-child(odd) {
            background-color: rgb(244, 244, 244);
        }

</style>

