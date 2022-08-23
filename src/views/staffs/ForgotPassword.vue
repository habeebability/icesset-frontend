<template>
  <div class="container mx-auto">
    <div class="flex justify-center items-center h-screen px-6">
      <!-- Row -->
      <div class="w-full md:w-1/2">
        <div class="bg-white p-5 rounded-lg lg:rounded-l-none">
          <div>
            <div class="px-8 mb-4 text-center">
              <h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
              <p class="mb-4 text-sm text-gray-700">
                We get it, stuff happens. Just enter your email address below and we'll send you a
                link to reset your password!
              </p>
            </div>
            <form
              @submit.prevent="handlePasswordResetRequest"
              class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div class="text-red-600 border my-5 p-3" v-if="err">{{err}}</div>
              <div class="text-green border" v-if="success">{{success}}</div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">Email</label>
                <input
                  v-model="email"
                  class="w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter Email Address..."
                  required
                />
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-3 font-bold text-white bg-primary rounded-md hover:bg-purple-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >Send Request</button>
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
export default {
  setup() {
    const email = ref("");
    const success = ref(null);
    const err = ref("");

    const store = useStore();

    const handlePasswordResetRequest = async () => {
      // console.log(store.state.user);

      console.log("password request", email.value);
      try {
        await store.dispatch("forgotPassword", {
          email: email.value,
          redirectUrl: "http://localhost:3000/reset-password/:id/:code",
        });

        console.log(email.value);

        success.value = "email sent successfully";

        console.log(response.data.message);

        setTimeout(() => {
          success.value = null;
        }, 3000);
      } catch (error) {
        err.value = error.response?.data?.message;

        setTimeout(() => {
          err.value = null;
        }, 3000);
      }
    };

    return {
      email,
      handlePasswordResetRequest,
      success,
      err,
    };
  },
};
</script>

<style>
</style>