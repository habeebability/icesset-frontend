<template>
  <section class="bg-primary-blue w-screen h-screen overlay lg:p-20">
    <div class="logo-div px-10">
      <img src="../../assets/ice-logo.png" alt="icesset-logo" />
    </div>

    <div
      class="flex flex-wrap justify-center p-5 items-center lg:justify-between mx-auto lg:px-10 my-20"
    >
      <div class="w-full lg:w-1/2 xl:w-6/12">
        <div class="max-w-[570px] mb-12 lg:mb-0">
          <h1
            class="text-4xl text-center md:text-left text-blue-100 w-full md:font-bold md:text-5xl lg:w-3/5 md:leading-[4rem]"
          >
            Effective Asset Managers
          </h1>
        </div>
      </div>
      <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
        <div class="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
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

          <form @submit.prevent="handleLogin">
            <h2>Login</h2>
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
                class="w-full text-black bg-purple-600 rounded border border-primary p-3 transition hover:bg-opacity-90"
              >
                Login
              </button>
            </div>
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
      rgba(19, 122, 131, 0.8),
      rgba(19, 122, 131, 0.9)
    ),
    url("../../assets/bg-image.png");
}
</style>
