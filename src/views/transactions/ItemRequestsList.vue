<template>
  <div class="px-20 py-5">
    <div class="mt-10 mb-5">
      <h3 class="text-xl font-bold">All requests</h3>
    </div>

    <div class="overflow-x-auto relative">
      <table class="w-full text-center table-auto">
        <thead class="border-b border-tertiary bg-tertiary text-left">
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
          <tr class="bg-white border-b border-tertiary">
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
        </tbody>
      </table>
    </div>

    <!-- <div class="flex flex-col">
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            
          </div>
        </div>
      </div> -->
  </div>
</template>

<script>
import CardGroup from "../../components/dashboard/CardGroup.vue";
export default {
  components: { CardGroup },
};
</script>

<style></style>
