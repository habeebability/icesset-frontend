<template>
  <div class="flex flex-col px-5 lg:px-10">
    <div v-if="success" class="bg-green text-white p-2">{{success}}</div>
    <div class="flex justify-between">
      <h1 class="font-semibold lg:text-2xl text-sm mt-5 ml-5">Staff List</h1>
      <button
        @click="toggleAddUserModal"
        class="inline-flex justify-center items-center py-2 px-3 mt-5 lg:mr-6 lg:text-xl font-medium rounded-lg hover:text-primary hover:border-primary hover:border-2"
      >+ Add New</button>
    </div>

    <div class="ml-4 my-3 mr-6 w-[30rem] lg:w-auto h-auto px-3 py-6">
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
              >{{ user.firstName }} {{user.lastName}}</td>
              <td
                class="text-sm text-gray-900 font-light px-3 lg:px-6 py-4 whitespace-nowrap"
              >{{ user.role }}</td>
              <td
                class="text-sm text-gray-900 font-light px-3 lg:px-6 py-4 whitespace-nowrap"
              >{{ user.email }}</td>
              <td
                class="text-sm text-gray-900 font-light px-3 lg:px-6 py-4 whitespace-nowrap"
              >{{ user.mobilePhone }}</td>
              <td
                class="text-sm text-gray-900 font-light px-3 lg:px-6 py-4 whitespace-nowrap"
              >{{ user.userStatus }}</td>
              <td
                class="text-sm text-gray-900 font-light px-3 lg:px-6 py-4 whitespace-nowrap"
              >{{new Date(user.dateCreated).toLocaleDateString() }}</td>

              <td class="text-sm text-gray-900 font-light px-3 lg:px-6 py-4 whitespace-nowrap">
                <button
                  @click="getStaff(user.user_id)"
                  class="mx-1 bg-secondary hover:bg-purple-400 disabled text-white font-bold py-2 px-4 rounded-md"
                >Review</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="loader flex justify-center">
          <TheLoader v-if="isLoading" />
        </div>
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

      <!-- Add user modal  -->
      <div v-if="addUserModal">
        <Modal :modalActive="addUserModal" class="relative" @close="toggleAddUserModal">
          <div
            class="close-icon absolute sm:top-15 lg:top-5 right-5 w-10 h-10 cursor-pointer hover:border-gray"
          >
            <svg
              @click="toggleAddUserModal"
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

            <form @submit.prevent="handleAddUser">
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
                        <option value="staff">Staff</option>
                      </select>
                    </div>

                    <div class="relative">
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Password</label>
                      <input
                        :type="[showPassword ? 'text' : 'password']"
                        id="password"
                        class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        placeholder="Enter password"
                        required
                        v-model="password"
                      />
                      <span @click="showPassword = !showPassword">
                        <i
                          class="absolute cursor-pointer top-[2.5rem] right-[1rem] fas"
                          :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="my-5">
                <button
                  type="submit"
                  class="text-white bg-primary hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center"
                >Add New Staff</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>

      <!-- update user modal -->
      <div v-if="updateUserModal" class="md:w-1/2">
        <Modal :modalActive="updateUserModal" class="relative" @close="toggleUpdateUserModal">
          <div
            class="close-icon absolute sm:top-15 lg:top-5 right-5 w-10 h-10 cursor-pointer hover:border-gray"
          >
            <svg
              @click="toggleUpdateUserModal"
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
          <h1 class="border-b-2 border-gray-light px-2 md:px-5 text-2xl font-bold pb-3">Review Staff</h1>
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

            <form @submit.prevent="handleUpdateUser">
              <div class="input-form flex flex-col-reverse lg:flex-row justify-between gap-4">
                <div class="flex-1">
                  <div class="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                      <label
                        for="firstName"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                        placeholder="Enter First Name"
                        v-model="updateFirstName"
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
                        v-model="updateLastName"
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
                        v-model="updateMobilePhone"
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
                        v-model="updateEmail"
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
                        v-model="updateRole"
                        required
                      >
                        <option selected>Choose Role</option>
                        <option value="admin">Admin</option>
                        <option value="staff">Staff</option>
                      </select>
                    </div>

                    <!-- <div>
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
                        v-model="updatePassword"
                      />
                    </div>-->

                    <div>
                      <button
                        @click="handleSuspendUser"
                        v-if="updateStatus == 'active' "
                        class="text-[#F15025] flex"
                      >
                        <span class="mr-2">
                          <svg
                            width="30"
                            height="24"
                            viewBox="0 0 34 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.4482 20.2977L27.3648 16.3114L31.2814 20.2977L33.71 17.8366L29.7763 13.8675L33.71 9.89847L31.2814 7.43731L27.3648 11.4237L23.4482 7.43731L21.0196 9.89847L24.9362 13.8675L21.0196 17.8366L23.4482 20.2977ZM17.103 6.93468C17.1241 6.01841 16.9615 5.10733 16.6252 4.25655C16.2888 3.40577 15.7857 2.63297 15.1462 1.9849C14.5066 1.33682 13.7441 0.826933 12.9045 0.486081C12.065 0.145229 11.166 -0.0195067 10.2618 0.00183821C9.35764 -0.0195067 8.4586 0.145229 7.61907 0.486081C6.77954 0.826933 6.01695 1.33682 5.37744 1.9849C4.73793 2.63297 4.23479 3.40577 3.89844 4.25655C3.56209 5.10733 3.39954 6.01841 3.4206 6.93468C3.39954 7.85095 3.56209 8.76203 3.89844 9.61281C4.23479 10.4636 4.73793 11.2364 5.37744 11.8845C6.01695 12.5325 6.77954 13.0424 7.61907 13.3833C8.4586 13.7241 9.35764 13.8889 10.2618 13.8675C11.166 13.8889 12.065 13.7241 12.9045 13.3833C13.7441 13.0424 14.5066 12.5325 15.1462 11.8845C15.7857 11.2364 16.2888 10.4636 16.6252 9.61281C16.9615 8.76203 17.1241 7.85095 17.103 6.93468ZM6.8412 6.93468C6.8192 6.47356 6.89262 6.01288 7.05674 5.58222C7.22086 5.15156 7.47205 4.76044 7.79417 4.434C8.1163 4.10756 8.50224 3.853 8.92721 3.68669C9.35218 3.52037 9.80677 3.44597 10.2618 3.46826C10.7168 3.44597 11.1714 3.52037 11.5964 3.68669C12.0214 3.853 12.4073 4.10756 12.7294 4.434C13.0515 4.76044 13.3027 5.15156 13.4669 5.58222C13.631 6.01288 13.7044 6.47356 13.6824 6.93468C13.7044 7.3958 13.631 7.85649 13.4669 8.28715C13.3027 8.71781 13.0515 9.10892 12.7294 9.43536C12.4073 9.7618 12.0214 10.0164 11.5964 10.1827C11.1714 10.349 10.7168 10.4234 10.2618 10.4011C9.80677 10.4234 9.35218 10.349 8.92721 10.1827C8.50224 10.0164 8.1163 9.7618 7.79417 9.43536C7.47205 9.10892 7.22086 8.71781 7.05674 8.28715C6.89262 7.85649 6.8192 7.3958 6.8412 6.93468ZM3.4206 24.2668C3.4206 22.8878 3.96117 21.5652 4.9234 20.5901C5.88563 19.615 7.1907 19.0672 8.5515 19.0672H11.9721C13.3329 19.0672 14.638 19.615 15.6002 20.5901C16.5624 21.5652 17.103 22.8878 17.103 24.2668V26H20.5236V24.2668C20.5236 23.1287 20.3024 22.0018 19.8727 20.9504C19.4429 19.899 18.813 18.9437 18.0189 18.139C17.2248 17.3342 16.2821 16.6959 15.2446 16.2604C14.2071 15.8249 13.0951 15.6007 11.9721 15.6007H8.5515C6.2835 15.6007 4.10839 16.5138 2.50468 18.139C0.900959 19.7642 0 21.9684 0 24.2668V26H3.4206V24.2668Z"
                              fill="#F15025"
                            />
                          </svg>
                        </span>

                        <span>Suspend User</span>
                      </button>

                      <!-- <button
                        @click="handleSuspendUser"
                        v-if="updateStatus == 'active'"
                      >suspend user</button>-->

                      <button v-if="updateStatus == 'suspended'" @click="handleUnsuspendUser">
                        <span class="mr-2">
                          <i class="fa fa-user text-primary" aria-hidden="true"></i>
                        </span>

                        <span class="text-primary">Restore Access</span>
                      </button>
                      <!-- <h2
                        @click="updateStatus === 'active' ? handleSuspendUser : handleUnsuspendUser"
                        class="cursor-pointer flex gap-2"
                      >
                       
                      </h2>-->
                    </div>
                  </div>
                </div>
              </div>
              <div class="my-5">
                <button
                  type="submit"
                  class="text-white bg-primary hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center"
                >update staff</button>
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
import TheLoader from "../../components/ui/TheLoader.vue";
import Modal from "../../components/ui/Modal.vue";

export default {
  components: {
    Modal,
    TheLoader,
  },
  // computed: {
  //   ...mapState({
  //     showLoading: (state) => state.showLoading,
  //   }),
  // },
  setup() {
    // const modalActive = ref(false);
    const addUserModal = ref(false);
    const updateUserModal = ref(false);

    const showPassword = ref(false);

    const user = ref({});

    const isLoading = ref(false);

    const name = ref("");
    const firstname = ref("");
    const lastname = ref("");
    const role = ref([]);
    const email = ref("");
    const phone = ref("");
    const status = ref("");

    const date = ref("");
    const password = ref("");

    // data to update staff

    const updateFirstName = ref("");
    const updateLastName = ref("");
    const updateMobilePhone = ref("");
    const updateEmail = ref("");
    const updateRole = ref("");
    const updateStatus = ref("");
    const updatePassword = ref("");

    const allUsersList = ref([]);

    const success = ref("");
    const err = ref("");

    const store = useStore();
    // const showLoading = store.state.showLoading;

    const toggleAddUserModal = () => {
      addUserModal.value = !addUserModal.value;
    };

    const toggleUpdateUserModal = () => {
      updateUserModal.value = !updateUserModal.value;
    };

    // const suspendUser = () => {
    //   alert("are you sure you want to suspend the user?");
    // };

    const getStaff = async (id) => {
      try {
        isLoading.value = true;
        const response = await axios.get(`/api/v1/users/${id}`);
        // console.log(store.state.item);

        user.value = response.data;
        // user.value = user;

        updateFirstName.value = user.value.firstName;
        updateLastName.value = user.value.lastName;
        updateMobilePhone.value = user.value.mobilePhone;
        updateEmail.value = user.value.email;
        updatePassword.value = user.value.password;
        updateRole.value = user.value.role;
        updateStatus.value = user.value.userStatus;

        // console.log(response.data);

        // console.log(store.state.item);
        isLoading.value = false;
        toggleUpdateUserModal();
      } catch (error) {
        isLoading.value = false;

        console.log(error);
      }
      // console.log(id);
    };

    const getAllStaffs = async () => {
      try {
        isLoading.value = true;
        const response = await axios.get(`/api/v1/users`);

        const allUsers = response.data.data;
        allUsersList.value = allUsers;

        isLoading.value = false;
        // console.log(userId.value);
      } catch (error) {
        isLoading.value = false;
      }
    };

    const handleAddUser = async () => {
      // console.log(store.state.user);
      try {
        isLoading.value = true;
        await store.dispatch("createUser", {
          firstName: firstname.value,
          lastName: lastname.value,
          mobilePhone: phone.value,
          email: email.value,

          password: password.value,
          role: role.value,
          status: status.value,
          date: date.value,

          // employerId: store.state.user.id,
        });
        (name.value = ""),
          (role.value = ""),
          (email.value = ""),
          (phone.value = ""),
          (status.value = ""),
          (date.value = ""),
          (password.value = ""),
          (success.value = "added successfully");
        // sn.value = employerJobs.value.length + 1
        // sn.value + 1
        setTimeout(() => {
          success.value = null;
        }, 3000);

        toggleAddUserModal();

        // postJobModal.value = false;
      } catch (error) {
        isLoading.value = false;
        console.log(error, "add user error");
        err.value = err.value =
          error.response?.data?.message ?? "Cannot create user";

        // error.response && error.response.data.message
        //   ? error.message
        //   : error.response;

        setTimeout(() => {
          err.value = null;
        }, 3000);
      }

      getAllStaffs();
    };

    const handleUpdateUser = async () => {
      // console.log(store.state.user);
      try {
        isLoading.value = true;
        await store.dispatch("updateUser", {
          id: user.value.user_id,
          firstName: updateFirstName.value,
          lastName: updateLastName.value,
          mobilePhone: updateMobilePhone.value,
          email: updateEmail.value,

          password: updatePassword.value,
          role: updateRole.value,
          // status: status.value,
          // date: date.value,

          // employerId: store.state.user.id,
        });
        success.value = "staff updated successfully";
        // console.log(response.data)
        (name.value = ""),
          (role.value = ""),
          (email.value = ""),
          (phone.value = ""),
          (status.value = ""),
          (date.value = ""),
          (password.value = ""),
          // (success.value = "item added successfully");
          // sn.value = employerJobs.value.length + 1
          // sn.value + 1
          setTimeout(() => {
            success.value = null;
          }, 3000);

        toggleUpdateUserModal();
      } catch (error) {
        isLoading.value = false;
        console.log(error, "staff error");
        err.value = error.response?.data?.message ?? "Cannot update user";

        // err.value = error.response.data.message;
        // error.response && error.response.data.message
        //   ? error.message
        //   : error.response;

        setTimeout(() => {
          err.value = null;
        }, 3000);
      }

      getAllStaffs();
    };

    const handleSuspendUser = async () => {
      // if (confirm("Are you sure you want to suspend user")) {
      //   }
      try {
        await store.dispatch("suspendUser", user.value.user_id);

        getAllStaffs();
      } catch (error) {}
    };

    const handleUnsuspendUser = async () => {
      if (confirm("Are you sure you want to unsuspend user")) {
        try {
          await store.dispatch("unSuspendUser", user.value.user_id);

          getAllStaffs();
        } catch (error) {}
      }
    };

    return {
      // modalActive,
      addUserModal,
      updateUserModal,
      showPassword,
      toggleAddUserModal,
      toggleUpdateUserModal,
      handleAddUser,
      handleUpdateUser,
      handleSuspendUser,
      handleUnsuspendUser,
      getAllStaffs,
      getStaff,

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

      // for update user modal
      updateFirstName,
      updateLastName,
      updateEmail,
      updateMobilePhone,
      updatePassword,
      updateRole,
      updateStatus,

      isLoading,
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
