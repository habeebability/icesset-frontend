<template>
  <div class="flex flex-col px-3 md:px-10 lg:px-10 py-5">
    <CardGroup />
    <!-- <div
      class="flex md:w-full md:flex-row items-center justify-between px-5 mt-10 mb-5"
    >
      <h3 class="text-xl font-bold">Recent Transactions</h3>
      <h4>See all</h4>
    </div> -->

    <!-- <div class="w-[30rem] lg:w-full overflow-x-auto relative">
      <table class="text-center table-auto">
        <thead class="border-b border-purple-200 bg-[#F1F3F8] text-left">
          <tr>
            <th scope="col" class="text-sm font-bold text-gray-900 px-4 py-4">
              S/N
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-4 py-4">
              Item
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-4 py-4">
              Quatity
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-4 py-4">
              Priority
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-4 py-4">
              Requested By
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-4 py-4">
              Status
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-4 py-4">
              Approved/Declined
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-4 py-4">
              Quantity Approved
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-4 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="text-left">
          <tr
            class=""
            v-for="(request, index) in allRequestsList"
            :key="request.id"
          >
            <td
              class="text-center px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              {{ index + 1 }}
            </td>
            <td
              class="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap"
            >
              {{ request.item }}
            </td>
            <td
              class="text-sm text-center text-gray-900 font-light px-4 py-4 whitespace-nowrap"
            >
              {{ request.quantity }}
            </td>
            <td
              class="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap"
            >
              {{ request.priority }}
            </td>
            <td
              class="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap"
            >
              {{ request.requested_by }}
            </td>
            <td
              :class="`${
                request.status === 'Approved'
                  ? 'text-green'
                  : request.status === 'Declined'
                  ? 'text-red-500'
                  : 'text-black'
              } `"
              class="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap"
            >
              {{ request.status }}
            </td>
            <td
              class="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap"
            >
              {{ request.approval }}
            </td>
            <td
              class="text-sm text-center text-gray-900 font-light px-4 py-4 whitespace-nowrap"
            >
              {{ request.q_approved }}
            </td>
            <td
              class="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap"
            >
              <div class="flex justify-between">
                <button
                  @click="getItemRequest(request.id)"
                  class="mx-1 bg-primary hover:bg-purple-200 text-white font-bold py-2 px-4 rounded-md"
                >
                  Review
                </button>
                <button
                  :class="`${
                    request.status === 'Approved'
                      ? 'bg-secondary hover:bg-purple-200'
                      : 'bg-[#AFAFAF]'
                  }`"
                  class="mx-1 disabled text-white font-bold py-2 px-4 rounded-md"
                >
                  Return
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->

    <section class=" bg-tertiary transaction px-3 md:px-10 my-10 py-5">
      <div>
        <h1 class="text-2xl font-bold mb-5">Recent Transactions</h1>

        <div class="transactions">
          <ul>
            <li class="my-2">
              <div class="card grid md:grid-cols-1 lg:grid-cols-4 gap-5 p-5 bg-white rounded-lg">
                <div class="status">
                  <h2 class="">
                    <span class="text-red-700 my-5">Outgoing:</span>
                    <span class="mx-4">Warri Delta store</span>
                  </h2>
                  <h2 class="">
                    <span class=" my-5">Status:</span>
                    <span class="text-red-700 mx-4 my-3">Pending</span>
                  </h2>
                </div>
                <div class="custody">
                   <h2 >
                    <span class=" my-5">To:</span>
                    <span class="">Pelumi Charles</span>
                  </h2>
                  <h2>
                    <span>From:</span>
                    <span class="">Emmanuel Tolani</span>
                  </h2>
                </div>
                <div class="date">
                   <h2>
                    <span class="">Sent:</span>
                    <span>24-07-2022</span>
                  </h2>
                  <h2>
                    <span>Recieved By:</span>
                    <span class=""></span>
                  </h2>
                </div>
                <div class="mt-auto ml-auto">
                  <h2 class="mt-5">see more</h2>

                </div>
              </div>
            </li>
            <li class="my-2">
              <div class="card grid md:grid-cols-1 lg:grid-cols-4 gap-5 p-5 bg-white rounded-lg">
                <div class="status">
                  <h2 class="">
                    <span class="text-red-700 my-5">Outgoing:</span>
                    <span class="mx-4">Warri Delta store</span>
                  </h2>
                  <h2 class="">
                    <span class=" my-5">Status:</span>
                    <span class="text-red-700 mx-4 my-3">Pending</span>
                  </h2>
                </div>
                <div class="custody">
                   <h2 >
                    <span class=" my-5">To:</span>
                    <span class="">Pelumi Charles</span>
                  </h2>
                  <h2>
                    <span>From:</span>
                    <span class="">Emmanuel Tolani</span>
                  </h2>
                </div>
                <div class="date">
                   <h2>
                    <span class="">Sent:</span>
                    <span>24-07-2022</span>
                  </h2>
                  <h2>
                    <span>Recieved By:</span>
                    <span class=""></span>
                  </h2>
                </div>
                <div class="mt-auto ml-auto">
                  <h2 class="mt-5">see more</h2>

                </div>
              </div>
            </li>
            <li class="my-2">
              <div class="card grid md:grid-cols-1 lg:grid-cols-4 gap-5 p-5 bg-white rounded-lg">
                <div class="status">
                  <h2 class="">
                    <span class="text-red-700 my-5">Outgoing:</span>
                    <span class="mx-4">Warri Delta store</span>
                  </h2>
                  <h2 class="">
                    <span class=" my-5">Status:</span>
                    <span class="text-red-700 mx-4 my-3">Pending</span>
                  </h2>
                </div>
                <div class="custody">
                   <h2 >
                    <span class=" my-5">To:</span>
                    <span class="">Pelumi Charles</span>
                  </h2>
                  <h2>
                    <span>From:</span>
                    <span class="">Emmanuel Tolani</span>
                  </h2>
                </div>
                <div class="date">
                   <h2>
                    <span class="">Sent:</span>
                    <span>24-07-2022</span>
                  </h2>
                  <h2>
                    <span>Recieved By:</span>
                    <span class=""></span>
                  </h2>
                </div>
                <div class="mt-auto ml-auto">
                  <h2 class="mt-5">see more</h2>

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
            <div
              class="flex flex-col md:flex-row md:justify-start md:items-center md:gap-4"
            >
              <div class="img-div">
                <img src="../../assets/request-img.png" alt="" />
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
                    <div class="w-8 h-8 bg-black"></div> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-end gap-4 mt-10">
              <button
                @click="getItemRequest(id)"
                class="mx-1 bg-primary hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-md"
              >
                Approve
              </button>
              <button
                @click="toggleModal"
                class="mx-1 bg-secondary text-white font-bold py-2 px-4 rounded-md"
              >
                Decline
              </button>
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

export default {
  components: { CardGroup, Modal },
  setup() {
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
    const allRequestsList = ref([]);

    const success = ref("");
    const err = ref("");

    // const store = useStore();

    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    const getItemRequest = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:4000/requests/${id}`
        );
        // console.log(store.state.item);

        const request_id = response.data;
        requestId.value = request_id;

        toggleModal();

        // console.log(requestId.value);
      } catch (error) {}
      // console.log(id);
    };

    const getAllRequests = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/requests`);

        const allRequests = response.data;
        allRequestsList.value = allRequests;

        console.log(requestId.value);
      } catch (error) {}
    };

    return {
      modalActive,
      toggleModal,
      getItemRequest,
      getAllRequests,
      itemName,
      requestId,
      condition,
      submitted_by,
      image,
      acquired,
      location,
      quantity,
      description,
      category,
      maker,
      allRequestsList,
      success,
      err,
    };
  },
  mounted() {
    this.getAllRequests(), this.getItemRequest();
  },
};
</script>

<style></style>
