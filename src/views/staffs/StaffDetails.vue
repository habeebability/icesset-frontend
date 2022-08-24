<template>
  <div class="flex flex-col px-5 justify-center items-center lg:px-10">
    <h1 class="flex text-left my-10 text-xl font-bold">Profile page</h1>
    <div>
      <div class="flex flex-col">
        <div class="img-div">
          <img src="../../assets/dp.jpeg" alt class="w-full md:w-[20vw] h-[30vh]" />
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
            <div class="infos text-xl font-bold text-primary">
              <h1 class="my-2">{{$store.state.user.data.info.firstName}}</h1>
              <h1 class="my-2">{{$store.state.user.data.info.lastName}}</h1>
              <h1 class="my-2">{{$store.state.user.data.info.mobilePhone}}</h1>
              <h1 class="my-2">{{$store.state.user.data.info.email}}</h1>
              <h1 class="my-2">{{$store.state.user.data.role}}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
