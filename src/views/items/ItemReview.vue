<template>
  <div class="p-8">
    <nav  class="font-medium text-2xl my-3 cursor-pointer flex items-center">
      <ol class="list-reset flex">
        <li><span class="text-gray-500 mx-2"></span></li>
        <li><router-link to="/items"><a class="text-primary hover:text-blue-700">Items</a></router-link></li>
        <li><span class="text-gray-500 mx-2 text-secondary"> >> </span></li>
        <li class="text-gray-500">Review Item</li>
      </ol>
    </nav>
    <div>
      <div>
      </div>
      <h2 class="bg-[#F1F3F8] w-full px-5 py-3">Item Information </h2>
      <div>
        <div class="flex w-full text-start px-5 py-3">
          <a class="text-gray-500 w-1/3">Name:</a>
          <a class="text-primary w-2/3 items-start">{{itemDetails.item_name}}</a>
        </div>
        <div class="flex w-full text-start px-5 py-3">
          <a class="text-gray-500 w-1/3">Category:</a>
          <a class="text-primary w-2/3 items-start">{{itemDetails.category}}</a>
        </div>
        <div class="flex w-full text-start px-5 py-3">
          <a class="text-gray-500 w-1/3">Description:</a>
          <a class="text-primary w-2/3 items-start">{{itemDetails.description}}</a>
        </div>
        <div class="flex w-full text-start px-5 py-3">
          <a class="text-gray-500 w-1/3">Supplied by:</a>
          <a class="text-primary w-2/3 items-start">{{itemDetails.supplier}}</a>
        </div>
        <div class="flex w-full text-start px-5 py-3">
          <a class="text-gray-500 w-1/3">Supplier contact:</a>
          <a class="text-primary w-2/3 items-start">{{itemDetails.supplierContact}}</a>
        </div>
      </div>
      <div class="mt-8">
        <table class="table-fixed w-full">
          <thead class="border-b-2">
            <tr class="px-5 py-3">
              <th>Location(s)</th>
              <th>Quantity</th>
              <th>Assigned to</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(storeDetail, index) in itemDetails.data" :key="index">
            <!-- <tr> -->
              <td>{{ storeDetail.store_name }}</td>
              <td>{{ storeDetail.quantity }}</td>
              <td>{{ storeDetail.user_name }}</td>
            </tr>
            <!-- <tr>
              <td>Auchi, Edo state</td>
              <td>7</td>
              <td>Tomiwa</td>
            </tr>
            <tr>
              <td>Warri, Delta state</td>
              <td>8</td>
              <td>Habeeb</td>
            </tr>
             <tr>
              <td>Joyce B, Ibadan</td>
              <td>12</td>
              <td>Pelumi</td>
            </tr>
            <tr>
              <td>Auchi, Edo state</td>
              <td>7</td>
              <td>Tomiwa</td>
            </tr>
            <tr>
              <td>Warri, Delta state</td>
              <td>8</td>
              <td>Habeeb</td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import TheLoader from "../../components/ui/TheLoader.vue";


export default {
  components: {
    TheLoader,
  },
  setup() {
    const itemDetails = ref({});

    const isLoading = ref(false);
    const store = useStore();
        console.log(store);

        const getItemDetails = () => {
          itemDetails.value = store.state.itemDetails
        }


    // const getItemDetails = async () => {
    //   try {
    //     isLoading.value = true;
    //     const response = await axios.get(`/api/v1/inventory/${id}`);

    //     const itemDetails = response.data.data;
    //     console.log(itemDetails);
    //     ItemDetails.value = itemDetails;

    //     // console.log(itemId.value);
    //   } catch (error) {
    //     isLoading.value = false;
    //   }
    // };
    return {
      itemDetails,
      getItemDetails
    }
  },
  mounted() {
    this.getItemDetails();
  }

}
</script>

<style>

</style>