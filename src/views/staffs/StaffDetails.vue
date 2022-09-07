<template>
  <div class="lg:p-10 bg-tertiary lg:m-10 h-full">
    <div class="flex gap-10">
      <div class="img-div flex flex-col w-1/5">
        <div class>
          <img class="w-full" src="../../assets/dp.jpeg" />
        </div>

        <div class="h-20 bg-white">Joined</div>
      </div>

      <div class="request-div bg-white p-5 w-4/5 rounded-md">
        <h1 class="border-b text-xl font-semibold p-2">My profile</h1>
        <div class="request-info flex gap-5 my-5">
          <div class="requests text-xl">
            <h1 class="my-2">Full Name</h1>
            <h1 class="my-2">Email</h1>
            <h1 class="my-2">Phone Number</h1>
            <h1 class="my-2">Role</h1>
            <h1 class="my-2">Status</h1>
          </div>
          <div class="infos text-xl">
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
      </div>
    </div>
    <!-- <div class="flex p-5">
      <div class="img-div">
        <img src="../../assets/dp.jpeg" alt class="w-full md:w-1/3 h-2/3" />
      </div>

      <div class="request-div">
        <div class="request-info flex md:justify-center gap-5">
          <div class="requests text-xl font-bold">
            <h1 class="my-2">First Name</h1>
            <h1 class="my-2">Last Name</h1>
            <h1 class="my-2">Phone Number</h1>
            <h1 class="my-2">Email</h1>
            <h1 class="my-2">Role</h1>
          </div>
          <div class="infos text-xl font-bold">
            <h1 class="my-2">{{$store.state.user.data.info.firstName}}</h1>
            <h1 class="my-2">{{$store.state.user.data.info.lastName}}</h1>
            <h1 class="my-2">{{$store.state.user.data.info.mobilePhone}}</h1>
            <h1 class="my-2">{{$store.state.user.data.info.email}}</h1>
            <h1 class="my-2">{{$store.state.user.data.role}}</h1>
          </div>
        </div>
    </div>-->
  </div>
  <!-- <h1 class="flex text-left my-10 text-xl font-bold">Profile page</h1> -->
</template>

<script>
export default {
  setup() {},
};
</script>

<style></style>
