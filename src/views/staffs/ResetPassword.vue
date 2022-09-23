<template>
  <div class="container mx-auto">
    <div class="flex justify-center items-center h-screen px-6">
      <!-- Row -->
      <div class="w-full md:w-1/2">
        <div class="bg-white p-5 rounded-lg lg:rounded-l-none">
          <div>
            <div class="px-8 mb-4 text-center">
              <h3 class="pt-4 mb-2 text-2xl">Reset Password</h3>
              <p
                class="mb-4 text-sm text-gray-700"
              >We received your request to reset your password, please enter new Password</p>
            </div>
            <form
              @submit.prevent="handlePasswordReset"
              class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div class="text-red-600 border my-5 p-3" v-if="err">{{err}}</div>
              <div class="text-green border" v-if="success">{{success}}</div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                >New Password</label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter New password"
                  required
                  v-model="password"
                />
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-primary rounded-md hover:bg-purple-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >Reset Password</button>
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

import { useRoute, useRouter } from "vue-router";

import { useStore } from "vuex";

export default {
  setup() {
    const route = useRoute();

    const router = useRouter();

    const userId = route.params.id;
    const resetString = route.params.code;

    const password = ref("");
    const success = ref("");
    const err = ref("");

    const store = useStore();

    const handlePasswordReset = async () => {
      // console.log(store.state.user);

      console.log("password request", password.value);
      console.log("reset string", resetString);
      console.log("userid", userId);
      try {
        await store.dispatch("resetPassword", {
          resetString: resetString,
          user_id: userId,
          newPassword: password.value,
        });

        console.log(password.value);

        success.value = "Password Reset successfully";

        setTimeout(() => {
          success.value = null;
          router.push("/login");
        }, 3000);
      } catch (error) {
        err.value = error.response?.data?.message ?? "An Error occurred";

        setTimeout(() => {
          err.value = null;
        }, 3000);
      }
    };

    return {
      userId,
      resetString,
      password,
      handlePasswordReset,
      success,
      err,
    };
  },
};
</script>


<style>
</style>