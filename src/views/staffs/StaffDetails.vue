<template>
  <div class="p-2 lg:p-10 w-full bg-tertiary lg:m-10">
    <div class="flex flex-col md:flex-row gap-1 md:gap-1 lg:gap-10">
      <div class="img-div flex flex-col md:w-1/5 w-full">
        <div class="bg-white flex justify-center items-center">
          <img class="w-36 h-36" src="../../assets/dp.jpeg" />
        </div>
        <div
          class="flex justify-center items-center lg:justify-even w-full p-1 lg:p-3 h-8 lg:h-20 bg-white text-xs lg:text-xl"
        >
          <div class="mr-3 lg:flex">
            <svg
              width="16"
              height="16"
              md:width="25"
              md:height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4375 2.33881L17.182 2.33883V0.781433C17.182 0.349691 16.8324 0 16.4008 0C15.9691 0 15.6195 0.349691 15.6195 0.781433V2.33844H9.36953V0.781433C9.36953 0.349691 9.01992 0 8.58828 0C8.15664 0 7.80703 0.349691 7.80703 0.781433V2.33844H1.5625C0.699609 2.33844 0 3.03821 0 3.9013V23.4371C0 24.3002 0.699609 25 1.5625 25H23.4375C24.3004 25 25 24.3002 25 23.4371V3.9013C25 3.03858 24.3004 2.33881 23.4375 2.33881ZM23.4375 23.4371H1.5625V3.9013H7.80703V4.6886C7.80703 5.12032 8.15664 5.47003 8.58828 5.47003C9.01992 5.47003 9.36953 5.12032 9.36953 4.6886V3.9017H15.6195V4.68899C15.6195 5.12073 15.9691 5.47042 16.4008 5.47042C16.8324 5.47042 17.182 5.12073 17.182 4.68899V3.9017H23.4375V23.4371ZM17.9688 12.4974H19.5312C19.9625 12.4974 20.3125 12.1474 20.3125 11.716V10.1531C20.3125 9.72179 19.9625 9.3717 19.5312 9.3717H17.9688C17.5375 9.3717 17.1875 9.72179 17.1875 10.1531V11.716C17.1875 12.1474 17.5375 12.4974 17.9688 12.4974ZM17.9688 18.7485H19.5312C19.9625 18.7485 20.3125 18.3988 20.3125 17.9671V16.4042C20.3125 15.9729 19.9625 15.6228 19.5312 15.6228H17.9688C17.5375 15.6228 17.1875 15.9729 17.1875 16.4042V17.9671C17.1875 18.3992 17.5375 18.7485 17.9688 18.7485ZM13.2812 15.6228H11.7188C11.2875 15.6228 10.9375 15.9729 10.9375 16.4042V17.9671C10.9375 18.3988 11.2875 18.7485 11.7188 18.7485H13.2812C13.7125 18.7485 14.0625 18.3988 14.0625 17.9671V16.4042C14.0625 15.9733 13.7125 15.6228 13.2812 15.6228ZM13.2812 9.3717H11.7188C11.2875 9.3717 10.9375 9.72179 10.9375 10.1531V11.716C10.9375 12.1474 11.2875 12.4974 11.7188 12.4974H13.2812C13.7125 12.4974 14.0625 12.1474 14.0625 11.716V10.1531C14.0625 9.72139 13.7125 9.3717 13.2812 9.3717ZM7.03125 9.3717H5.46875C5.0375 9.3717 4.6875 9.72179 4.6875 10.1531V11.716C4.6875 12.1474 5.0375 12.4974 5.46875 12.4974H7.03125C7.4625 12.4974 7.8125 12.1474 7.8125 11.716V10.1531C7.8125 9.72139 7.4625 9.3717 7.03125 9.3717ZM7.03125 15.6228H5.46875C5.0375 15.6228 4.6875 15.9729 4.6875 16.4042V17.9671C4.6875 18.3988 5.0375 18.7485 5.46875 18.7485H7.03125C7.4625 18.7485 7.8125 18.3988 7.8125 17.9671V16.4042C7.8125 15.9733 7.4625 15.6228 7.03125 15.6228Z"
                fill="black"
              />
            </svg>
          </div>
          <div class="lg:mr-8 mr-1">Joined:</div>
          <div
            class="text-primary"
          >{{ new Date($store.state.user.data.info.dateCreated).toLocaleDateString() }}</div>
        </div>
      </div>

      <div class="request-div bg-white p-1 lg:p-5 w-full rounded-md">
        <h1 class="border-b text-sm md:text-xl font-semibold p-2 text-primary">My profile</h1>
        <div class="request-info flex gap-5 my-5">
          <div class="requests text-sm md:text-xl">
            <h1 class="my-2">Full Name:</h1>
            <h1 class="my-2">Email:</h1>
            <h1 class="my-2">Phone Number:</h1>
            <h1 class="my-2">Role:</h1>
            <h1 class="my-2">Status:</h1>
          </div>
          <div class="infos text-sm md:text-xl text-primary ml-2 md:ml-1 lg:ml-1">
            <h1
              class="my-2"
            >{{$store.state.user.data.info.firstName}} {{$store.state.user.data.info.lastName}}</h1>
            <!-- <h1 class="my-2">{{$store.state.user.data.info.lastName}}</h1> -->
            <h1 class="my-2">{{$store.state.user.data.info.email}}</h1>
            <h1 class="my-2">{{$store.state.user.data.info.mobilePhone}}</h1>
            <h1 class="my-2">{{$store.state.user.data.role}}</h1>
            <h1 class="my-2">{{$store.state.user.data.info.userStatus}}</h1>
          </div>
        </div>
        <div>
          <div class="flex items-center border-b">
            <div class="mr-6">
              <svg
                width="24"
                height="30"
                viewBox="0 0 28 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0C8.18333 0 3.5 4.46032 3.5 10V11.6667C1.58714 11.6667 0 13.1782 0 15V31.6667C0 33.4884 1.58714 35 3.5 35H24.5C26.4129 35 28 33.4884 28 31.6667V15C28 13.1782 26.4129 11.6667 24.5 11.6667V10C24.5 4.46032 19.8167 0 14 0ZM14 3.33333C17.9833 3.33333 21 6.20635 21 10V11.6667H7V10C7 6.20635 10.0167 3.33333 14 3.33333ZM3.5 15H24.5V31.6667H3.5V15ZM14 20C12.075 20 10.5 21.5 10.5 23.3333C10.5 25.1667 12.075 26.6667 14 26.6667C15.925 26.6667 17.5 25.1667 17.5 23.3333C17.5 21.5 15.925 20 14 20Z"
                  fill="#540D6E"
                />
              </svg>
            </div>
            <div class="inline-flex justify-between w-full">
              <h3 class="text-sm md:text-xl font-semibold p-2">Password Settings</h3>
              <div class="flex items-center">
                <!-- <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L12 12L24 0H0Z" fill="black" fill-opacity="0.76"/>
                </svg>-->
                <span @click="showChangePassword = !showChangePassword" class="mb-8">
                  <i
                    class="absolute cursor-pointer fas fa-2x right-[3rem]"
                    :class="{ 'fa-solid fa-caret-up': showChangePassword, 'fa-solid fa-sort-down': !showChangePassword }"
                  ></i>
                </span>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <form v-if="showChangePassword" @submit.prevent="handleChangePassword">
              <div class="flex md:hidden justify-between">
                <div class="text-red-600 border my-5 p-3" v-if="err">{{err}}</div>
                <div class="text-green border" v-if="success">{{success}}</div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-xs text-gray-900 dark:text-gray-300"
                  >Current Password</label>
                  <input
                    type="text"
                    id="currentPassword"
                    class="bg-gray-50 text-gray-900 text-xs p-1 w-full rounded border-gray-600 border block"
                    required
                    v-model="currentPassword"
                  />
                </div>
                <div class="mb-6 relative">
                  <label
                    for="password"
                    class="block mb-2 text-xs text-gray-900 dark:text-gray-300"
                  >New Password</label>
                  <input
                    id="newPassword"
                    name="passowrd"
                    :type="[showPassword ? 'text' : 'password']"
                    class="relative rounded text-xs w-full p-1 border border-gray-300 shadow-sm"
                    v-model.trim="newPassword"
                    required
                  />
                  <span @click="showPassword = !showPassword">
                    <i
                      class="absolute cursor-pointer text-xs right-[1rem] top-[2rem] fas"
                      :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"
                    ></i>
                  </span>
                </div>
              </div>
              <div class="md:block hidden">
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm md:text-lg ml-4 text-gray-900 dark:text-gray-300"
                  >Current Password</label>
                  <input
                    type="text"
                    id="currentPassword"
                    class="bg-gray-50 text-gray-900 text-sm rounded-lg border-gray-600 border block w-3/5 p-2.5"
                    required
                    v-model="currentPassword"
                  />
                </div>
                <div class="mb-6 relative">
                  <label
                    for="password"
                    class="block mb-2 text-sm md:text-lg ml-4 text-gray-900 dark:text-gray-300"
                  >New Password</label>
                  <input
                    id="newPassword"
                    :type="[showPassword ? 'text' : 'password']"
                    class="block relative rounded-md border border-gray-300 py-2 px-1 pl-[1rem] my-2 shadow-sm w-3/5"
                    v-model.trim="newPassword"
                    required
                  />
                  <span @click="showPassword = !showPassword">
                    <i
                      class="absolute cursor-pointer lg:top-[3rem] lg:right-[27rem] md:right-[11rem] md:top-[3rem] fas"
                      :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"
                    ></i>
                  </span>
                </div>
              </div>
              <div class="flex w-full">
                <button
                  class="hover:text-white text-primary border border-primary bg-white hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg md:w-3/5 w-full text-xs lg:text-lg px-5 py-2 lg:py-2.5 text-center"
                >Change Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const showPassword = ref(false);
    const showChangePassword = ref(false);
    const currentPassword = ref("");
    const newPassword = ref("");
    const store = useStore();
    const router = useRouter();

    const success = ref("");
    const err = ref("");

    const handleChangePassword = async () => {
      console.log("pwd");
      try {
        console.log("pwd");
        console.log(store.state.user.data);
        const response = await store.dispatch("changePassword", {
          currentPassword: currentPassword.value,
          newPassword: newPassword.value,
          userId: store.state.user.data.info.user_id,
        });
        console.log(response);
        success.value = "Password Changed successfully";
        setTimeout(() => {
          success.value = null;
          router.push("/login");
        }, 3000);

        store.commit("setUser", null);
        store.commit("saveToken", null);
        localStorage.setItem("token", null);
        localStorage.setItem("user", null);

        // store.dispatch('logout');
      } catch (error) {
        // err.value = error.response?.data?.message ?? "An Error occurred";

        err.value =
          error.response?.data?.details?.body[0].message ?? "Server Error";
        setTimeout(() => {
          err.value = null;
        }, 4000);
      }
    };

    return {
      showPassword,
      showChangePassword,
      handleChangePassword,
      success,
      err,
      currentPassword,
      newPassword,
    };
  },
};
</script>

<style></style>
