<template>
  <div class="px-3 lg:px-10 py-5">
    <CardGroup />
    <div
      class="flex w-full md:flex-row items-center justify-between px-5 mt-10 mb-5"
    >
      <h3 class="text-xl font-bold">Recent Transactions</h3>
      <h4>See all</h4>
    </div>

    <div class="hidden md:block overflow-x-auto relative">
      <table class="w-full text-center">
        <thead class="border-b border-tertiary bg-[#F1F3F8] text-left">
          <tr>
            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">
              S/N
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">
              Item
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">
              Quatity
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">
              Priority
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">
              Requested By
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">
              Status
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">
              Approved/Declined
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">
              Quantity Approved
            </th>
            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="text-left">
          <tr class="border-b border-tertiary">
            <td
              class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              1
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              Battery
            </td>
            <td
              class="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              4
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              High
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              Mr. Emmanuel
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              Pending
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              06-07-2022
            </td>
            <td
              class="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              3
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              <div class="flex justify-between">
                <button
                  class="mx-1 bg-primary hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-md"
                >
                  Review
                </button>
                <button
                  class="mx-1 bg-[#AFAFAF] disabled text-white font-bold py-2 px-4 rounded-md"
                >
                  Return
                </button>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-tertiary">
            <td
              class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              2
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              Battery
            </td>
            <td
              class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              4
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              High
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              Mr. Olaoluwa
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-[#137A83]"
            >
              Approved
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              06-07-2022
            </td>
            <td
              class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              3
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              <div class="flex justify-between">
                <button
                  class="mx-1 bg-primary hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-md"
                >
                  Review
                </button>
                <button
                  class="mx-1 bg-secondary disabled text-white font-bold py-2 px-4 rounded-md"
                >
                  Return
                </button>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-tertiary">
            <td
              class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              3
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              Battery
            </td>
            <td
              class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              4
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              High
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              Mr. Pelumi
            </td>
            <td
              class="text-sm font-light px-6 py-4 whitespace-nowrap text-[#FF0000]"
            >
              Declined
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              06-07-2022
            </td>
            <td
              class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              0
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              <div class="flex justify-between">
                <button
                  @click="toggleModal"
                  class="mx-1 bg-primary hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-md"
                >
                  Review
                </button>
                <button
                  @click="toggleModal"
                  class="mx-1 bg-[#AFAFAF] disabled text-white font-bold py-2 px-4 rounded-md"
                >
                  Return
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
                    <h1 class="my-2">Mr. Emmanuel</h1>
                    <h1 class="my-2">4</h1>
                    <h1 class="my-2">06-07-2022</h1>
                    <h1 class="my-2">12 Days</h1>
                    <h1 class="my-2">Solar Installation</h1>
                    <h1 class="my-2">High</h1>
                    <h1 class="my-2">Pending</h1>
                    <div class="w-8 h-8 bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-end gap-4 mt-10">
              <button
                @click="toggleModal"
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
import CardGroup from "../../components/dashboard/CardGroup.vue";

import Modal from "../../components/ui/Modal.vue";

import { ref } from "vue";
export default {
  components: { CardGroup, Modal },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
};
</script>

<style></style>
