<template>
  <div
    class="flex justify-center lg:justify-end items-center w-full h-20 bg-white shadow-md border-b-2 border-primary p-3"
  >
    <h5 class="ml-[20px] md:ml-[0] md:mr-[30px]">
      Welcome
      <span class="mx-3 text-xl">

        {{$store.state.user.firstname}}
      </span> -
      <span class="mx-3">{{$store.state.user.role}}</span>
    </h5>
  </div>
</template>

<script>

// import axios from 'axios';
// import { ref } from 'vue';
export default {


  // setup(){
  //   const allStaffsList = ref([]);

  //   const getAllStaffs = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:4000/staffs`);

  //       const allUsers = response.data;
  //       allStaffsList.value = allUsers;

  //       console.log(userId.value);
  //     } catch (error) {}
  //   };

  //   return {
  //     allStaffsList,
  //     getAllStaffs
  //   }
  // },
  // mounted(){
  //   allStaffsList();
  // }

 
};
</script>

<style></style>
