<template>
  <section class="bg-primary w-screen h-screen overlay lg:py-10 lg:px-20">
    <div class="logo-div px-10">
      <img src="../../assets/ice-logo.png" alt="icesset-logo" />
    </div>

    <div
      class="flex flex-wrap justify-center p-5 items-center lg:justify-between mx-auto lg:px-10 my-10"
    >
      <div class="w-full lg:w-1/2 xl:w-6/12">
        <div class="max-w-[700px] mb-12 lg:mb-0">
          <h1
            class="text-2xl text-center md:text-left text-blue-100 w-full md:font-bold md:text-7xl lg:w-4/5 md:leading-[5rem]"
          >
            Effective Asset Managers
          </h1>
        </div>
      </div>
      <div class="w-full lg:w-5/6 xl:w-5/12 px-16">
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

          <!-- <form @submit.prevent="handleLogin">
            <h2 class="mb-9">Login</h2>
            <div class="mb-6">
              <label for="email">Email Address</label>
              <input
                v-model="email"
                type="email"
                placeholder="Your Email"
                class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
              />
            </div>
            <div class="mb-6">
              <label for="password">Password</label>
              <input
                v-model="password"
                type="password"
                placeholder="password"
                class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
              />
            </div>

            <div>
              <button
                type="submit"
                class="w-full bg-primary text-white bg-purple-600 rounded border border-primary p-3 transition hover:bg-opacity-90"
              >
                Login
              </button>
            </div>
          </form> -->

          <form @submit.prevent="handleSignIn">
            <div class="flex flex-col w-full mb-12">
              <h1 class="text-xl text-left font-semibold md:text-5xl">Login</h1>
            </div>
            <div class="mb-6">
              <label for="email" class="text-gray-700 font-medium"
                >Email address</label
              >
              <input
                id="email"
                name="email"
                type="text"
                placeholder="email@email.com"
                class="block rounded-md border border-gray-300 py-2 px-4 my-2 shadow-sm w-full"
                v-model="email"
                required
              />
            </div>
            <div class="mb-6">
              <label for="password" class="text-gray-700 font-medium"
                >Password</label
              >
              <input
                id="password"
                name="passowrd"
                type="password"
                placeholder="Enter your Password"
                class="block rounded-md border border-gray-300 py-2 px-4 my-2 shadow-sm w-full"
                v-model="password"
                required
              />
            </div>
            <div
              class="flex flex-col md:flex-row sm:justify-start md:justify-between items-center mb-3"
            >
              <router-link to="/forgot-password" class="text-primary"
                >Forgot your password?</router-link
              >
            </div>
            <button class="bg-primary py-2 rounded text-white my-2 px-4 w-full">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
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
