<template>
  <h1>{{success}}</h1>
  <div class="flex justify-between md:gap-[5rem] px-5 lg:p-10">
    <div class="w-2/5">
      <table class="table-auto">
        <thead class>
          <tr class>
            <!-- <th class="bg-tertiary">SN</th> -->
            <th class="bg-tertiary">Name</th>
            <!-- <th class="bg-tertiary">Category</th> -->
            <th class="bg-tertiary">Location</th>
            <th class="bg-tertiary">Qty</th>
            <!-- <th class="bg-tertiary">Action</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in itemsInBatch" :key="index">
            <!-- <td>
              <input type="checkbox" />
            </td>-->
            <td>{{item.item_name}}</td>
            <!-- <td>{{item.category}}</td> -->
            <td>{{item.store_name}}</td>
            <td>{{item.quantity}}</td>
            <!-- <td>
              <button class="bg-secondary text-tertiary">Review</button>
            </td>-->
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-tertiary p-5 w-1/3">
      <h3 class="border-b mb-3 text-sm">Waybill details</h3>

      <form @submit.prevent="handleTransferBatch">
        <div class="flex flex-col my-2">
          <label class="my-1" for="transaction-type">Transaction</label>
          <select class="p-2 rounded-md" name="transaction-type" v-model="transactionType">
            <option value="supply">Supply</option>
            <option value="transfer">Transfer</option>
          </select>
        </div>
        <div class="flex flex-col my-2">
          <label class="my-1" for="destination">Destination</label>
          <input
            class="p-2 rounded-md"
            type="text"
            v-model="destination"
            placeholder="Enter Destination"
          />
        </div>
        <div class="flex flex-col my-2">
          <label class="my-1" for="send-to">Send to</label>
          <select
            class="bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            v-model="userDataObject"
            id="allUsersList"
          >
            <option
              :value="userData"
              v-for="(userData, index) in staffsList"
              :key="index"
            >{{userData.firstName}} {{userData.lastName}}</option>
          </select>
          <!-- <input
            list="allUsersList"
            class="p-2 rounded-md"
            type="text"
            v-model="sendTo"
            placeholder="Enter receiver"
          />
          <datalist id="allUsersList">
            <option
              v-for="(staff, index) in allUsersList"
              :key="index"
            >{{staff.firstName}} {{staff.lastName}}</option>
          </datalist>-->
        </div>
        <div class="flex flex-col my-2">
          <label class="my-1" for="courier_name">Courier name</label>
          <input
            class="p-2 rounded-md"
            type="text"
            v-model="courierName"
            placeholder="Enter Courrier name"
          />
        </div>
        <div class="flex flex-col my-2">
          <label class="my-1" for="courier_contact">Courier contact</label>
          <input
            class="p-2 rounded-md"
            type="text"
            v-model="courierContact"
            placeholder="Enter Courrier contact"
          />
        </div>
        <div class="flex flex-col my-2">
          <label class="my-1" for="courier_contact">Note</label>
          <textarea v-model="note" class="p-2 rounded-md" name id cols="15" rows="3"></textarea>
        </div>

        <button class="text-white bg-primary w-full p-2 my-3">Transfer Batch</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";

import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const itemsInBatch = ref([]);

    const transactionType = ref("");
    const destination = ref("");
    const sendTo = ref("");
    const courierName = ref("");
    const courierContact = ref("");

    const userDataObject = ref({});

    const success = ref("");
    const err = ref("");

    const note = ref("");

    const staffsList = ref([]);

    const allItemsInBatch = () => {
      itemsInBatch.value = store.state.batch;
      // console.log(itemsInBatch.value);
      // console.log(store);
    };

    const getAllStaffs = async () => {
      try {
        const response = await axios.get(`/api/v1/users`);
        const allStaffs = response.data.data;
        staffsList.value = allStaffs;
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    // const getAllStaffs = async () => {
    //   try {
    //     // isLoading.value = true;
    //     const response = await axios.get(`/api/v1/users`);

    //     const allUsers = response.data.data;
    //     allUsersList.value = allUsers;

    //     console.log(allUsersList.value);

    //     // isLoading.value = false;
    //     // console.log(userId.value);
    //   } catch (error) {
    //     // isLoading.value = false;
    //   }
    // };

    const handleTransferBatch = async () => {
      // console.log(store.state.user);

      console.log(userDataObject.value);
      try {
        // isLoading.value = true;
        await store.dispatch("createTransferBatch", {
          waybillDetails: {
            destination: destination.value,

            // todo later
            sent_to_id: userDataObject.value.user_id,
            sent_to_name: `${userDataObject.value.firstName} ${userDataObject.value.lastName}`,

            courier_name: courierName.value,
            courier_contact: courierContact.value,
            note: note.value,
          },

          transactionDetails: {
            transaction_type: transactionType.value,

            created_by_id: store.state.user.data.info.user_id,

            created_by_name: store.state.user.data.info.firstName,

            // todo later
            stored_in: null,
          },

          transactionItem: itemsInBatch.value.map((item) => ({
            item_id: item.item_id,
            quantity: item.quantity,
          })),
        });

        success.value = "transaction successful";

        setTimeout(() => {
          success.value = null;
        }, 3000);
        router.push("/transactions");
      } catch (error) {
        // isLoading.value = false;
        console.log(error, "add user error");
        err.value = err.value =
          error.response?.data?.message ?? "Cannot Initiate transaction";

        // error.response && error.response.data.message
        //   ? error.message
        //   : error.response;

        setTimeout(() => {
          err.value = null;
        }, 3000);
      }
    };

    return {
      transactionType,
      destination,
      sendTo,
      courierContact,
      courierName,

      userDataObject,

      success,
      err,
      note,

      staffsList,
      getAllStaffs,

      handleTransferBatch,

      itemsInBatch,
      allItemsInBatch,
    };
  },
  mounted() {
    this.allItemsInBatch();

    this.getAllStaffs();
    // this.getAllStaffs();
  },
};
</script>

<style>
</style>