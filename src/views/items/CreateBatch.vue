<template>
  <div
    v-if="err"
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded"
    role="alert"
  >
    <span class="block sm:inline">{{ err }}</span>
  </div>
  <div
    v-if="success"
    class="bg-green text-white border border-green-400 px-4 py-2 rounded"
    role="alert"
  >
    <!-- <strong class="font-bold mr-2">OOPS!!!</strong> -->
    <span class="block sm:inline">{{ success }}</span>
  </div>
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
            <td>{{item.selectedQuantity}}</td>
            <!-- <td>
              <button class="bg-secondary text-tertiary">Review</button>
            </td>-->
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-tertiary p-5 w-2/3">
      <h3 class="border-b mb-3 text-sm">Waybill details</h3>

      <form @submit.prevent="handleTransferBatch">
        <div class="grid md:grid-cols-2 gap-5">
          <div class="flex flex-col my-2">
            <label class="my-1" for="transaction-type">Transaction</label>
            <select class="p-2 rounded-md" name="transaction-type" v-model="transactionType">
              <option value="transfer">Transfer</option>
              <option value="consume">Consumption</option>
              <option value="external">External</option>
            </select>
          </div>
          <div class="flex flex-col my-2">
            <label class="my-1" for="destination">Destination</label>
            <input
              class="p-2 rounded-md"
              type="text"
              v-model="destination"
              placeholder="Enter Destination"
              required
            />
          </div>

          <div class="my-2">
            <label class="my-1" for="send-to">Send to</label>

            <div class="flex space-x-5" v-if="transactionType == 'external'">
              <input
                class="my-2 bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 py-3"
                type="tel"
                placeholder="Enter Name"
                required
                v-model="externalDataObject.external_name"
              />

              <input
                class="my-2 bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 py-3"
                placeholder="phone number"
                required
                v-model="externalDataObject.external_phone"
                type="tel"
                inputmode="numeric"
                pattern="[0-9\s]{10,11}"
                autocomplete="cc-number"
                maxlength="11"
              />
            </div>

            <select
              v-if="transactionType != 'external'"
              class="bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 py-3.5"
              v-model="userDataObject"
              id="allUsersList"
              required
            >
              <option
                :value="userData"
                v-for="(userData, index) in staffsList"
                :key="index"
              >{{userData.firstName}} {{userData.lastName}}</option>
            </select>
          </div>
          <div class="flex flex-col my-2">
            <label class="my-1" for="delivery_dte">Expected Delivery date</label>
            <input
              class="p-2 rounded-md"
              type="date"
              v-model="deliveryDate"
              placeholder="Enter Courrier name"
              required
            />
            <!-- :min="new Date()" -->
          </div>
          <div class="flex flex-col my-2">
            <label class="my-1" for="courier_name">Courier name</label>
            <input
              class="p-2 rounded-md"
              type="text"
              v-model="courierName"
              placeholder="Enter Courrier name"
              required
            />
          </div>
          <div class="flex flex-col my-2">
            <label class="my-1" for="courier_contact">Courier Phone number</label>
            <input
              class="p-2 rounded-md"
              type="tel"
              v-model="courierContact"
              placeholder="Enter Phone Number"
              required
            />
          </div>
          <div class="flex flex-col my-2">
            <label class="my-1" for="courier_contact">Note</label>
            <textarea v-model="note" class="p-2 rounded-md" name id cols="15" rows="2" required></textarea>
          </div>
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

    const externalDataObject = {
      external_name: "",
      external_phone: "",
    };

    const deliveryDate = ref("");
    const transactionType = ref("");
    const destination = ref("");
    const sendTo = ref("");
    const courierName = ref("");
    const courierContact = ref("");

    // const selectedQuantity = ref("");

    const userDataObject = ref({});

    const success = ref("");
    const err = ref("");

    const note = ref("");

    const staffsList = ref([]);

    const allItemsInBatch = () => {
      itemsInBatch.value = store.state.batch;
      // console.log(itemsInBatch.value[0].quantity);

      // selectedQuantity.value = itemsInBatch.value.map((item) => ({
      //   // qyt_loc_id: item.qyt_loc_id,
      //   // item_id: item.item_id,
      //   quantity: item.quantity,
      // }));
      // console.log(selectedQuantity);
    };

    const getAllStaffs = async () => {
      try {
        const response = await axios.get(`/api/v1/users`);
        const allStaffs = response.data.data.result;
        staffsList.value = allStaffs;
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

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
            // sent_to_name: `
            // ${!externalDataObject.external_name ?
            //   userDataObject.value.firstName + userDataObject.value.
            //   lastName : externalDataObject  } `,

            sent_to_name: externalDataObject.external_name
              ? externalDataObject.external_name
              : `${userDataObject.value.firstName} ${userDataObject.value.lastName}`,
            sent_to_phone: externalDataObject.external_phone,

            courier_name: courierName.value,
            courier_contact: courierContact.value,
            note: note.value,
          },

          transactionDetails: {
            transaction_type: transactionType.value,
            exp_delivery_date: deliveryDate.value,

            created_by_id: store.state.user.data.info.user_id,

            created_by_name: store.state.user.data.info.firstName,

            // todo later
            stored_in: null,
          },

          transactionItem: itemsInBatch.value.map((item) => ({
            qyt_loc_id: item.qyt_loc_id,
            item_id: item.item_id,
            quantity: item.selectedQuantity,
          })),
        });

        success.value = "transaction successful";

        setTimeout(() => {
          success.value = null;
          router.push("/transactions");
        }, 3000);
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
      deliveryDate,
      destination,
      sendTo,
      courierContact,
      courierName,

      externalDataObject,

      // external_phone,

      // selectedQuantity,

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
  },

  computed: {
    fullName() {
      return this.userDataObject.firstName + " " + this.userDataObject.lastName;
    },
  },
};
</script>

<style>
</style>