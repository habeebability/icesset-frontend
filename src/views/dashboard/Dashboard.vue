<template>
  <div class="flex flex-col px-3 md:px-10 lg:px-10 py-5">
    <CardGroup />

    <section class="bg-tertiary transaction px-3 md:px-10 my-10 py-5">
      <div>
        <h1 class="text-2xl font-bold mb-5">Recent Transactions</h1>

        <div class="flex justify-center" v-if="isLoading">
          <TheLoader />
        </div>

        <div class="transactions">
          <ul>
            <li class="my-2" v-for="(transaction, index) in transactionsList" :key="index">
              <div class="card grid md:grid-cols-1 lg:grid-cols-4 gap-5 p-5 bg-white rounded-lg">
                <div class="status">
                  <h2 class>
                    <span
                      v-if="transaction.created_by_id == $store.state.user.data.info.user_id"
                      class="text-red-700 my-5 mr-2"
                    >Outgoing:</span>
                    <span class="text-primary" v-else>Incoming:</span>
                    <span class="mx-4">{{transaction.destination}}</span>
                  </h2>
                  <h2 class>
                    <span class="my-5 mr-2">Status:</span>
                    <span
                      :class="transaction.transaction_status == 'pending' || 'Pending' ? 'text-red-700' : 'text-primary'"
                      class="mx-4 my-3"
                    >{{transaction.transaction_status}}</span>
                  </h2>
                </div>
                <div class="custody">
                  <h2>
                    <span class="my-5 mr-2">To:</span>
                    <span class>{{transaction.sent_to_name}}</span>
                  </h2>
                  <h2>
                    <span class="mr-2">From:</span>
                    <span class>{{transaction.created_by_name}}</span>
                  </h2>
                </div>
                <div class="date">
                  <h2>
                    <span class="mr-2">Sent:</span>
                    <span>{{new Date(transaction.transactionDate).toLocaleDateString()}}</span>
                  </h2>
                  <h2>
                    <span>Recieved By:</span>
                    <span class></span>
                  </h2>
                </div>
                <div class="mt-auto ml-auto">
                  <h2 class="mt-5 cursor-pointer">
                    <span @click="getTransaction(transaction.transaction_id)" class>see more</span>

                    <span>
                      <i class="fas fa-caret-right mx-1"></i>
                    </span>
                  </h2>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div v-if="modalActive">
      <Modal @close="toggleModal" :modalActive="modalActive">
        <div class="modal-content p-5">
          <h1>Review Request</h1>
          <div>
            <div class="flex flex-col md:flex-row md:justify-start md:items-center md:gap-4">
              <div class="img-div">
                <img src="../../assets/request-img.png" alt />
                <h4>Luminous Electronics</h4>
              </div>

              <div class="request-div">
                <div class="request-info flex md:justify-between gap-5">
                  <div class="requests">
                    <h1 class="my-2">Requested By</h1>
                    <h1 class="my-2">Quantity Requested</h1>
                    <h1 class="my-2">Requested on</h1>
                    <h1 class="my-2">Duration of use</h1>
                    <h1 class="my-2">Purpose of use</h1>
                    <h1 class="my-2">Priority</h1>
                    <h1 class="my-2">Status</h1>
                    <h1 class="my-2">Quantity approved</h1>
                  </div>
                  <div class="infos">
                    <!-- <h1 class="my-2">{{ request.requested_by }}</h1> -->
                    <!-- <h1 class="my-2">{{ request.quantity }}</h1> -->
                    <!-- <h1 class="my-2">{{ request.requested_on }}</h1>
                    <h1 class="my-2">12 Days</h1>
                    <h1 class="my-2">{{ request.itemName }}</h1>
                    <h1 class="my-2">{{ request.priority }}</h1>
                    <h1 class="my-2">{{ request.status }}</h1>
                    <div class="w-8 h-8 bg-black"></div>-->
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-end gap-4 mt-10">
              <button
                @click="getItemRequest(id)"
                class="mx-1 bg-primary hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-md"
              >Approve</button>
              <button
                @click="toggleModal"
                class="mx-1 bg-secondary text-white font-bold py-2 px-4 rounded-md"
              >Decline</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";

import CardGroup from "../../components/dashboard/CardGroup.vue";

import Modal from "../../components/ui/Modal.vue";
import TheLoader from "../../components/ui/TheLoader.vue";
// import router from "../../router";

import { useRouter } from "vue-router";

export default {
  components: { CardGroup, Modal, TheLoader },
  setup() {
    const router = useRouter();
    const itemName = ref("");
    const condition = ref("");
    const submitted_by = ref("");
    const image = ref("");
    const acquired = ref("");
    const location = ref("");
    const quantity = ref("");
    const description = ref("");
    const category = ref("");
    const maker = ref("");
    const requestId = ref("");
    const transactionsList = ref([]);

    const isLoading = ref(false);
    const success = ref("");
    const err = ref("");

    const store = useStore();

    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    const getAllTransactions = async () => {
      try {
        isLoading.value = true;
        const response = await axios.get(
          `/api/v1/transactions/user/${store.state.user.data.info.user_id}`
        );
        const allTransactions = response.data.data;
        transactionsList.value = allTransactions;

        isLoading.value = false;
      } catch (error) {
        isLoading.value = false;
        console.log(error);
      }
    };

    const getTransaction = async (id) => {
      router.push(`/transaction/${id}`);
    };

    return {
      modalActive,
      toggleModal,
      getAllTransactions,
      getTransaction,
      itemName,
      requestId,
      condition,
      submitted_by,
      image,

      isLoading,
      acquired,
      location,
      quantity,
      description,
      category,
      maker,
      transactionsList,
      success,
      err,
    };
  },
  mounted() {
    this.getAllTransactions();
  },
};
</script>

<style></style>
