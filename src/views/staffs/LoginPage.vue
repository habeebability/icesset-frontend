<template>
  <section class="bg-primary w-screen h-screen overlay lg:py-10 lg:px-20">
    <div class="logo-div px-10">
      <img src="../../assets/ice-logo.png" alt="icesset-logo" />
    </div>

    <div
      class="flex flex-col sm:flex-row sm:justify-center p-5 items-center lg:justify-between mx-auto lg:px-10 my-10"
    >
      <div class="w-full lg:w-1/2 xl:w-6/12">
        <div class="max-w-[700px] mb-12 lg:mb-0">
          <h1
            class="text-4xl text-left md:text-left text-blue-100 md:leading-[4.5rem] w-full md:font-bold md:text-6xl lg:text-7xl lg:w-4/5 lg:leading-[4.5rem] xl:leading-[5rem]"
          >
            Effective Asset Managers
          </h1>
        </div>
      </div>
      <div class="w-full lg:w-5/6 xl:w-5/12 lg:px-16">
        <div class="bg-white relative rounded-3xl p-8 sm:p-12 shadow-xl">
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

          <form @submit.prevent="handleSignIn">
            <div class="flex flex-col w-full mb-12">
              <h1 class="text-xl text-left font-semibold md:text-5xl">Login</h1>
            </div>
            <div class="mb-6 relative">
              <label for="email" class="text-gray-700 font-medium"
                >Email address

                <span
                  class="pointer-events-none w-6 h-6 absolute top-[3.5rem] transform -translate-y-1/2 left-3"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 36 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.4 0H3.6C1.62 0 0.018 1.575 0.018 3.5L0 24.5C0 26.425 1.62 28 3.6 28H32.4C34.38 28 36 26.425 36 24.5V3.5C36 1.575 34.38 0 32.4 0ZM32.4 24.5H3.6V7L18 15.75L32.4 7V24.5ZM18 12.25L3.6 3.5H32.4L18 12.25Z"
                      fill="#540D6E"
                    />
                  </svg>
                </span>
              </label>

              <input
                id="email"
                name="email"
                type="text"
                placeholder="email@email.com"
                class="block rounded-md border border-gray-300 py-2 px-4 pl-[3rem] my-2 shadow-sm w-full"
                v-model="email"
              />
            </div>
            <div class="mb-6 relative">
              <label for="password" class="text-gray-700 font-medium"
                >Password

                <span
                  class="pointer-events-none w-6 h-6 absolute top-[3.5rem] transform -translate-y-1/2 left-3"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 28 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 0C8.18333 0 3.5 4.46032 3.5 10V11.6667C1.58714 11.6667 0 13.1782 0 15V31.6667C0 33.4884 1.58714 35 3.5 35H24.5C26.4129 35 28 33.4884 28 31.6667V15C28 13.1782 26.4129 11.6667 24.5 11.6667V10C24.5 4.46032 19.8167 0 14 0ZM14 3.33333C17.9833 3.33333 21 6.20635 21 10V11.6667H7V10C7 6.20635 10.0167 3.33333 14 3.33333ZM3.5 15H24.5V31.6667H3.5V15ZM14 20C12.075 20 10.5 21.5 10.5 23.3333C10.5 25.1667 12.075 26.6667 14 26.6667C15.925 26.6667 17.5 25.1667 17.5 23.3333C17.5 21.5 15.925 20 14 20Z"
                      fill="#540D6E"
                    />
                  </svg>
                </span>
              </label>
              <input
                id="password"
                name="passowrd"
                type="password"
                placeholder="Enter your Password"
                class="block rounded-md border border-gray-300 py-2 px-4 pl-[3rem] my-2 shadow-sm w-full"
                v-model="password"
              />
            </div>
            <div
              class="flex flex-col md:flex-row sm:justify-start md:justify-between items-center mb-3"
            >
              <router-link to="/forgot-password" class="text-primary"
                >Forgot your password?</router-link
              >
            </div>
            <button
              class="bg-secondary py-2 rounded-xl text-white my-2 px-4 w-full"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    // const firstName = ref('')
    // const user_name = ref('')
    const password = ref("");
    const email = ref("");
    const err = ref(null);
    const success = ref(null);
    // const phone = ref('')

    const store = useStore();
    const router = useRouter();

    const handleSignIn = async () => {
      try {
        const user = await store.dispatch("signIn", {
          // firstName: firstName,
          // lastName: lastName,
          email: email.value,
          // user_name: user_name.value,
          password: password.value,
        });

        success.value = "login successful";
        console.log(success.value);
        console.log(user);
        // setTimeout(() => {
        //     router.push('/')
        // }, 3000)
        console.log(store.state.user);
      } catch (error) {
        err.value =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data;
        console.log(error);

        setTimeout(() => {
          err.value = null;
        }, 2000);
      }
    };
    return { handleSignIn, email, password, err, success };
  },
};
</script>

<style>
.overlay {
  height: 100vh;

  background-size: cover;
  background-position: center;

  background-image: linear-gradient(
      to bottom,
      rgba(84, 13, 110, 0.8),
      rgba(84, 13, 110, 0.9)
    ),
    url("../../assets/bg-image.png");
}
</style>
