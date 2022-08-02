<template>
  <div class="flex flex-col px-5 lg:px-10">
    <h1 class="font-semibold lg:text-2xl text-sm mt-5 ml-5">Staff List</h1>

    <div class="flex justify-end">
      <button
        @click="toggleModal"
        class="text-primary items-center py-2 px-3 lg:text-xl font-medium rounded-lg hover:border-primary hover:border-2"
      >+ Add New</button>
    </div>
    <div class="ml-4 my-5 mr-6 w-[30rem] lg:w-auto h-auto px-3 py-6">
      <div class="overflow-x-auto relative shadow-md bg-white">
        <table
          class="w-full h-auto text-xs lg:text-xl text-center lg:text-left text-gray-50 dark:text-gray-400"
        >
          <thead class="lg:text-xl text-xs text-gray-700">
            <tr>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">SN</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Name</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Role</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Email</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Phone No.</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Status</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Added on</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in allUsersList"
              :key="index"
              class="bg-white dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700"
            >
              <td
                class="text-sm text-gray-900 font-light px-4 lg:px-6 py-4 whitespace-nowrap"
              >{{ index + 1 }}</td>
              <td
                class="text-sm text-gray-900 font-light px-4 lg:px-6 py-4 whitespace-nowrap"
              >{{ user.name }}</td>
              <td
                class="text-sm text-gray-900 font-light px-3 lg:px-6 py-4 whitespace-nowrap"
              >{{ user.role }}</td>
              <td
                class="text-sm text-gray-900 font-light px-3 lg:px-6 py-4 whitespace-nowrap"
              >{{ user.email }}</td>
              <td
                class="text-sm text-gray-900 font-light px-3 lg:px-6 py-4 whitespace-nowrap"
              >{{ user.phone }}</td>
              <td
                class="text-sm text-gray-900 font-light px-3 lg:px-6 py-4 whitespace-nowrap"
              >{{ user.status }}</td>
              <td
                class="text-sm text-gray-900 font-light px-3 lg:px-6 py-4 whitespace-nowrap"
              >{{ user.date }}</td>
              <td class="text-sm text-gray-900 font-light px-3 lg:px-6 py-4 whitespace-nowrap">
                <button
                  class="mx-1 bg-secondary disabled text-white font-bold py-2 px-4 rounded-md"
                >Review</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-end items-center m-4">
        <!-- Buttons -->

        <span class>
          <i class="ri-arrow-left-s-fill ri-lg lg:ri-3x"></i>
        </span>
        <!-- Help text -->
        <div class="flex text-xs lg:text-xl">
          <span class="dark:text-gray-400">1 of 30</span>
        </div>
        <span class>
          <i class="ri-arrow-right-s-fill ri-lg lg:ri-3x"></i>
        </span>
      </div>
      <!-- <div v-if="modalActive">
        <Modal :modalActive="modalActive" class="bg-gray-light">
          <div class="rounded-0">
            <h1 class="border-b-2 border-gray-light text-2xl font-bold pb-3">Add New Staff</h1>
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

            <form @submit.prevent="handleAddUser">
              <div class="input-form flex flex-col justify-center items-center">
                <div>
                  <div class="w-[50vw] h-[50vh]">
                    <div class="flex justify-between mx-8">
                      <div>
                        <label
                          for="name"
                          class="block my-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >First Name</label>
                        <input
                          type="text"
                          id="name"
                          class="text-gray-900 h-12 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-[22vw] p-2.5"
                          placeholder="Enter first name"
                          required
                          v-model="name"
                        />
                      </div>
                      <div>
                        <label
                          for="phone"
                          class="block my-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Phone Number</label>
                        <input
                          type="text"
                          id="phone"
                          class="bg-gray-50 h-12 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-[22vw] p-2.5"
                          placeholder="Enter phone number"
                          required
                          v-model="phone"
                        />
                      </div>
                    </div>
                    <div class="flex justify-between mx-8">
                      <div>
                        <label
                          for="lastname"
                          class="block my-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Last Name</label>
                        <input
                          type="text"
                          id="lastname"
                          class="bg-gray-50 h-12 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-[22vw] p-2.5"
                          placeholder="Enter last name"
                          v-model="lastname"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          class="block my-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Email</label>
                        <input
                          type="email"
                          id="email"
                          class="bg-gray-50 h-12 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-[22vw] p-2.5"
                          placeholder="Enter email"
                          v-model="email"
                          required
                        />
                      </div>
                    </div>
                    <div class="flex justify-between mx-8">
                      <div>
                        <label
                          for="category"
                          class="block my-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Role</label>
                        <select
                          name="role"
                          id="role"
                          class="bg-gray-50 h-12 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-[22vw] p-2.5"
                          v-model="role"
                          required
                        >
                          <option disabled selected>Select role</option>
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
                          class="block my-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Password</label>
                        <input
                          type="password"
                          id="password"
                          class="bg-gray-50 text-gray-900 h-12 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-[22vw] p-2.5"
                          placeholder="Enter password"
                          v-model="password"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex pr-6">
                <button
                  type="submit"
                  class="w-full text-primary bg-white flex justify-center border-4 hover:text-white border-primary items-center hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-bold rounded-lg text-lg h-12"
                >Add staff</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>-->

      <div v-if="modalActive">
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
          <h1
            class="border-b-2 border-gray-light px-2 md:px-5 text-2xl font-bold pb-3"
          >Add New Staff</h1>
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
                        for="firstname"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >First Name</label>
                      <input
                        type="text"
                        id="firstname"
                        class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        placeholder="Enter First Name"
                        required
                        v-model="firstname"
                      />
                    </div>
                    <div>
                      <label
                        for="phonenumber"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Phone Number</label>
                      <input
                        type="text"
                        id="phonenumber"
                        class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        placeholder="Enter Phone number"
                        required
                        v-model="phone"
                      />
                    </div>

                    <div>
                      <label
                        for="lastname"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Last Name</label>
                      <input
                        type="text"
                        id="lastname"
                        class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        placeholder="Enter Last Name"
                        required
                        v-model="lastname"
                      />
                    </div>

                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Email</label>
                      <input
                        type="email"
                        id="email"
                        class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        placeholder="Enter Email"
                        required
                        v-model="email"
                      />
                    </div>

                    <div>
                      <label
                        for="role"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Role</label>
                      <select
                        name="role"
                        id="role"
                        class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        v-model="role"
                        required
                      >
                        <option selected>Choose Role</option>
                        <option value="admin">Admin</option>
                        <option value="store-keeper">Store Keeper</option>
                      </select>
                    </div>

                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Password</label>
                      <input
                        type="password"
                        id="password"
                        class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        placeholder="Enter password"
                        required
                        v-model="lastname"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="my-5">
                <button
                  type="submit"
                  class="text-white bg-primary hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center"
                >Add Item</button>
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
import axios from "axios";
import Modal from "../../components/ui/Modal.vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const modalActive = ref(false);

    const name = ref("");
    const firstname = ref("");
    const lastname = ref("");
    const role = ref("");
    const email = ref("");
    const phone = ref("");
    const status = ref("");
    const date = ref("");
    const password = ref("");

    const allUsersList = ref([]);

    const success = ref("");
    const err = ref("");

    const store = useStore();

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    const getStaff = async (id) => {
      try {
        const response = await axios.get(`http://localhost:4000/staffs/${id}`);
        console.log(store.state.item);

        const user_id = response.data;
        userId.value = user_id;

        // console.log(itemId.value);
      } catch (error) {}
      console.log(id);
    };

    const getAllStaffs = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/staffs`);

        const allUsers = response.data;
        allUsersList.value = allUsers;

        console.log(userId.value);
      } catch (error) {}
    };

    const handleAddUser = async () => {
      // console.log(store.state.user);
      try {
        await store.dispatch("createUser", {
          name: name.value,
          role: role.value,
          email: email.value,
          phone: phone.value,
          status: status.value,
          date: date.value,
          password: password.value,

          // employerId: store.state.user.id,
        });
        (name.value = ""),
          (role.value = ""),
          (email.value = ""),
          (phone.value = ""),
          (status.value = ""),
          (date.value = ""),
          (password.value = ""),
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

      getAllStaffs();
      toggleModal();
    };

    return {
      modalActive,
      toggleModal,
      handleAddUser,
      getAllStaffs,
      firstname,
      lastname,
      password,
      allUsersList,
      name,
      role,
      email,
      phone,
      status,
      date,
      success,
      err,
    };
  },
  mounted() {
    this.getAllStaffs();
  },
};
</script>

<style scoped>
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
