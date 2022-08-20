<template>
  <!-- <router-view></router-view> -->
  <section class="p-5 lg:px-10">
    <div class="bg-tertiary p-5">
      <div class="flex justify-between">
        <h1>My Transactions</h1>
        <div>
          <h3>Filter by</h3>
        </div>
      </div>

      <div class="transactions my-5">
        <ul>
          <li class="my-5" v-for="(transaction,index) in transactionsList" :key="index">
            <div class="card bg-white rounded-lg">
              <div class="p-5">
                <div class="transaction-header flex justify-between border-b pb-3">
                  <div class>
                    <h3 class="flex my-3">
                      <span class="text-red-400">Outgoing:</span>
                      <span class="mx-3">{{transaction.destination}}</span>
                    </h3>
                    <h3 class="flex my-3">
                      <span class>Status:</span>
                      <span class="mx-3">{{transaction.transaction_status}}</span>
                    </h3>
                  </div>
                  <div>
                    <h3 class="flex my-3">
                      <span class>To:</span>
                      <span class="mx-3">{{transaction.sent_to_name}}</span>
                    </h3>
                    <h3 class="flex my-3">
                      <span class>From:</span>
                      <span class="mx-3">{{transaction.created_by_name}}</span>
                    </h3>
                  </div>

                  <div>
                    <h3 class="flex my-3">
                      <span class>Sent:</span>
                      <span class="mx-3">{{new Date(transaction.dateCreated).toLocaleDateString()}}</span>
                      <!-- new Date(user.dateCreated).toLocaleDateString() -->
                    </h3>
                    <h3 class="flex my-3">
                      <span class>Received By:</span>
                      <span class="mx-3">{{"Pending" || transaction.receivedBy}}</span>
                    </h3>
                  </div>
                  <div>
                    <span>
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
                    v-for="(transactionItem, index) in transaction.data"
                    :key="index"
                  >
                    <span>{{transactionItem.quantity}}</span>
                    <span class>{{transaction.item_name}}</span>
                    <span class="col-span-2">{{transaction.description}}</span>
                    <span>JoceyB, Ibadan store</span>
                  </div>
                </div>
                <div class="transaction-footer flex justify-between border-b pb-3">
                  <div class>
                    <h3 class="flex my-3">
                      <span class>Courier name:</span>
                      <span class="mx-3">{{transaction.courier_name}}</span>
                    </h3>
                    <h3 class="flex my-3">
                      <span class>Note:</span>
                      <span class="mx-3">{{transaction.note}}</span>
                    </h3>
                  </div>
                  <div>
                    <h3 class="flex my-3">
                      <span class>Courier contact:</span>
                      <span class="mx-3">{{transaction.courier_contact}}</span>
                    </h3>
                  </div>

                  <div>
                    <h3 class="flex my-3">
                      <h3 class="flex my-3">
                        <span class>Email:</span>
                        <span class="mx-3">wande@gmail.com</span>
                      </h3>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const transactionsList = ref([]);

    const getAllTransactions = async () => {
      try {
        const response = await axios.get(`/api/v1/transactions/all`);
        const allTransactions = response.data.data;
        transactionsList.value = allTransactions;

        console.log(transactionsList.value);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    return { transactionsList, getAllTransactions };
  },

  mounted() {
    this.getAllTransactions();
  },
};
</script>

<style></style>
