<template>
  <div class="w-full h-20 bg-white shadow-md border-b-2 border-primary p-5 lg:px-10">
    <div class="flex md:flex-row md:justify-between items-center">
      <div class="w-1/3 mx-10">
        <form>
          <div class="flex space-x-4">
            <input
              @keyup="handleSearchQuery"
              type="search"
              v-model="searchQuery"
              placeholder="search by name or category"
              class="w-full border px-3 py-2 rounded-md"
            />
            <button
              class="bg-transparent hover:bg-purple-500 text-primary font-semibold focus:border-purple-500 hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
            >Search</button>
          </div>
        </form>
      </div>
      <h5 class>
        Welcome
        <span class="mx-3">{{$store.state.user.data.info.firstName}}</span> -
        <span
          class="mx-3"
        >{{$store.state.user.data.role.charAt(0).toUpperCase() + $store.state.user.data.role.slice(1)}}</span>
      </h5>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>