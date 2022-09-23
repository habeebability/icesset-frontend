<template>
  <section class="p-5 lg:px-10">
    <div class="bg-tertiary p-5">
      <div class>
        <h1>Transactions Details</h1>
      </div>

      <div class="transactions my-5">
        <div class="flex justify-center" v-if="isLoading">
          <TheLoader />
        </div>
        <div class="card bg-white rounded-lg" v-if="!isLoading">
          <div class="p-5">
            <div class="transaction-header flex justify-between border-b pb-3">
              <div>
                <h3>
                  <span
                    v-if="transactionObject.created_by_id == $store.state.user.data.info.user_id"
                    class="text-red-700 my-5 mr-2"
                  >Outgoing:</span>
                  <span class="text-primary" v-else>Incoming Transaction</span>
                  <span
                    v-if="transactionObject.created_by_id == $store.state.user.data.info.user_id"
                    class="mx-4"
                  >{{transactionObject.destination}}</span>
                </h3>
                <h3 class="flex my-3">
                  <span class>Status:</span>
                  <span
                    :class="transactionObject.transaction_status ==  'Pending' ? 'text-red-700' : 'text-primary'"
                    class="mx-3"
                  >{{transactionObject.transaction_status}}</span>
                </h3>
              </div>
              <div>
                <h3 class="flex my-3">
                  <span class>To:</span>
                  <span class="mx-3">{{transactionObject.sent_to_name}}</span>

                  <span
                    v-if="transactionObject.transaction_type == 'external'"
                  >({{transactionObject.sent_to_phone}})</span>
                </h3>
                <h3 class="flex my-3">
                  <span class>From:</span>
                  <span class="mx-3">{{transactionObject.created_by_name}}</span>
                </h3>
              </div>

              <div class="flex md:space-x-5">
                <div>
                  <h3 class="flex flex-col lg:flex-row my-3">
                    <span class>Exp. Arrival Date:</span>
                    <span
                      class="mx-3"
                    >{{new Date(transactionObject.transactionDate).toLocaleDateString() }}</span>
                  </h3>
                  <h3 class="flex my-3">
                    <span class>Transaction type:</span>
                    <span class="mx-3">{{transactionObject.transaction_type}}</span>
                  </h3>
                </div>

                <div>
                  <h3 class="flex flex-col lg:flex-row my-3">
                    <span class>Sent:</span>
                    <span
                      class="mx-3"
                    >{{new Date(transactionObject.transactionDate).toLocaleDateString() }}</span>
                    <span>{{new Date(transactionObject.transactionDate).toLocaleTimeString()}}</span>
                    <!-- new Date(user.dateCreated).toLocaleDateString() -->
                  </h3>
                  <h3 class="flex my-3">
                    <span class>Received By:</span>
                    <span class="mx-3">{{transactionObject.receivedBy}}</span>
                  </h3>
                </div>
              </div>
              <div
                class="cursor-pointer scale-90 hover:scale-100 ease-in duration-300"
                @click="handlePrint"
              >
                <span class="cursor-pointer">
                  <svg
                    width="25"
                    height="31"
                    viewBox="0 0 25 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0V31H25V7.86923L24.625 7.51154L17.125 0.357692L16.75 0H0ZM2.5 2.38462H15V9.53846H22.5V28.6154H2.5V2.38462ZM17.5 4.05385L20.75 7.15385H17.5V4.05385ZM11.25 11.9231V17.8846H7.5L12.5 22.6538L17.5 17.8846H13.75V11.9231H11.25ZM7.5 23.8462V26.2308H17.5V23.8462H7.5Z"
                      fill="#540D6E"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div class="transaction-body py-5 border-b-4 border-purple-200 border-dashed">
              <div class="grid grid-cols-5 my-3">
                <span class>QTY</span>
                <span class>Name</span>
                <span class="col-span-2">DESCRIPTION</span>
                <span class>LOCATION</span>
              </div>

              <div
                class="grid grid-cols-5"
                v-for="(transactionItem, index) in transactionObject.data"
                :key="index"
              >
                <span>{{transactionItem.trans_quantity}}</span>
                <span class>{{transactionItem.item_name}}</span>
                <span class="col-span-2">{{transactionItem.description}}</span>
                <span>{{transactionItem.store_name}}</span>
              </div>

              <!-- <div class="flex justify-end items-center m-5 cursor-pointer">
                <span @click="getTransaction(transactionObject.transaction_id)" class>see more</span>
                <span>
                  <i class="fas fa-caret-right mx-1"></i>
                </span>
              </div>-->
            </div>
            <div class="transaction-footer flex justify-between border-b pb-3">
              <div class>
                <h3 class="flex my-3">
                  <span class>Courier name:</span>
                  <span class="mx-3">{{transactionObject.courier_name}}</span>
                </h3>
                <h3 class="flex my-3">
                  <span class>Note:</span>
                  <span class="mx-3">{{transactionObject.note}}</span>
                </h3>
              </div>
              <div>
                <h3 class="flex my-3">
                  <span class>Courier contact:</span>
                  <span class="mx-3">{{transactionObject.courier_contact}}</span>
                </h3>
              </div>

              <div>
                <div class="my-3">
                  <span class="mx-3">Waybill ID:</span>
                  <span class="text-primary">ICE-{{transactionObject.waybill_id}}</span>

                  <div class="flex justify-end">
                    <qrcode-vue
                      :value="`https://icesset.netlify.app/transaction/${transactionObject.transaction_id}`"
                      :size="80"
                      level="H"
                    />
                  </div>
                </div>
                <div class="flex justify-end">
                  <button
                    @click="toggleCollectModal"
                    class="px-4 py-1 bg-primary text-white rounded-md"
                    v-if="transactionObject.sent_to_id == $store.state.user.data.info.user_id 
                          && transactionObject.transaction_status == 'Pending'  
                          && transactionObject.created_by_id != $store.state.user.data.info.user_id"
                  >collect</button>
                </div>
              </div>
            </div>

            <div>
              <p>Batch stored in: {{transactionObject.stored_in}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div v-show="collectModal">
    <Modal :modalActive="collectModal" class="relative" @close="toggleCollectModal">
      <h1 class="border-b-2 border-gray-light px-2 md:px-5 text-2xl font-bold pb-3">Put Batch in</h1>
      <div class="mx-auto bg-[#f1f3f8] p-5">
        <div
          v-if="err"
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">OOPS!</strong>
          <span class="block sm:inline">{{ err }}</span>
        </div>

        <!-- <div
          v-if="success"
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">YAY!</strong>
          <span class="block sm:inline">{{ success }}</span>
        </div>-->

        <form @submit.prevent="handleCollect">
          <div class="input-form">
            <div class>
              <div class="mb-6">
                <div class="my-3">
                  <label
                    for="location"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Location</label>
                  <select
                    class="bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    v-model="oneStore"
                    id="storesList"
                  >
                    <option
                      :value="storeData"
                      v-for="(storeData, index) in storesList"
                      :key="index"
                    >{{storeData.store_name}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="my-5 flex gap-4">
            <button
              type="submit"
              class="text-white bg-primary hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-md text-sm px-10 py-2.5 text-center"
            >Save</button>
            <button
              @click="toggleCollectModal"
              type="button"
              class="text-white bg-gray hover:bg-red-800 focus:outline-none focus:ring-red-300 font-medium rounded-md text-sm px-10 py-2.5 text-center"
            >cancel</button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import { ref } from "vue";

import QrcodeVue from "qrcode.vue";

import { useRoute } from "vue-router";

import { useRouter } from "vue-router";

import { useStore } from "vuex";

import axios from "axios";

import Modal from "../../components/ui/Modal.vue";

import TheLoader from "../../components/ui/TheLoader.vue";

export default {
  components: {
    TheLoader,
    Modal,
    QrcodeVue,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const router = useRouter();

    const err = ref("");

    const success = ref("");

    const transactionId = route.params.id;

    const transactionObject = ref([]);

    const transactionItems = ref([]);

    const collectModal = ref(false);

    const toggleCollectModal = () => {
      collectModal.value = !collectModal.value;

      console.log("collect modal");
    };
    const oneStore = ref({});

    const storesList = ref([]);

    const isLoading = ref(false);

    const handlePrint = () => {
      window.print();
      return false;
    };

    const getTransaction = async () => {
      // store.state.itemsInStore = [];

      console.log("transaction");

      try {
        isLoading.value = true;
        const response = await axios.get(
          `/api/v1/transactions/${transactionId}`
        );

        console.log(response);
        const transaction = response.data.data;

        transactionObject.value = transaction[0];

        transactionItems.value = response.data.data[0].data;

        isLoading.value = false;
      } catch (error) {
        isLoading.value = false;
      }
    };

    const handleCollect = async () => {
      // console.log(store.state.user);

      // console.log(userDataObject.value);
      try {
        // isLoading.value = true;
        await store.dispatch("collectLot", {
          batchInfo: {
            receivedBy: `${store.state.user.data.info.firstName} ${store.state.user.data.info.lastName}`,
            storedIn: oneStore.value.store_name,
            transaction_id: transactionId,
          },

          newLotDetails: transactionItems.value.map((item) => ({
            // item_id: item.item_id,
            qyt_loc_id: item.qyt_loc_id,
            store_id: oneStore.value.store_id,
            store_name: oneStore.value.store_name,
            // quantity: item.trans_quantity,
            user_id: store.state.user.data.info.user_id,
            user_name: `${store.state.user.data.info.firstName} ${store.state.user.data.info.lastName}`,
          })),
        });

        success.value = "items collected successful";
        getTransaction();
        toggleCollectModal();
        setTimeout(() => {
          success.value = null;
        }, 3000);
      } catch (error) {
        // isLoading.value = false;
        console.log(error, " error");
        err.value = err.value =
          error.response?.data?.message ?? "Cannot Complete transaction";

        setTimeout(() => {
          err.value = null;
        }, 3000);
      }
    };

    const getAllStores = async () => {
      try {
        const response = await axios.get(`/api/v1/locations`);
        const allStores = response.data.data;
        // console.log(response.data.data);
        storesList.value = allStores;
      } catch (error) {}
    };

    return {
      getTransaction,
      transactionObject,
      transactionItems,
      collectModal,

      oneStore,
      getAllStores,
      storesList,
      handlePrint,

      handleCollect,

      toggleCollectModal,
      transactionId,
      isLoading,
      err,
      success,
    };
  },

  mounted() {
    this.getTransaction();
    this.getAllStores();
  },
};
</script>

<style>
</style>