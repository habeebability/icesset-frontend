<template>
  <div class="flex flex-col px-3 lg:px-10">
    <h1 class="font-semibold lg:text-2xl text-sm mt-5 ml-5">Shipment > Approved Items</h1>
    <div class="bg-gray-light ml-4 my-5 mr-6 w-[30rem] lg:w-auto h-auto px-3 py-6">
      <div class="flex items-center bg-white h-16 p-2 lg:px-3 lg:py-1 rounded-lg">
        <div class="relative w-full mr-6">
          <input
            type="text"
            class="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 block w-full lg:pl-10 lg:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
          />
        </div>
        <button
          type="submit"
          class="inline-flex justify-center items-center p-1 w-32 lg:ml-2 lg:mr-6 lg:text-xl font-medium text-primary rounded-lg border-2 lg:border-4 border-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >search</button>
      </div>
      <div class="flex lg:m-4 m-2 text-sm">
        <label for="number_disabled">show</label>
        <select
          id="number_disabled"
          class="bg-white text-gray-900 text-sm mx-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 lg:w-16 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <!-- <option value="five">5</option> -->
          <option selected>10</option>
          <option value="fifteen">20</option>
          <option value="twenty">30</option>
          <option value="twenty-five">40</option>
          <option value="thirty">50</option>
        </select>
        <label>entries</label>
      </div>

      <div class="overflow-x-auto relative shadow-md bg-white">
        <table
          class="w-full h-auto text-xs lg:text-xl text-center lg:text-left text-gray-50 dark:text-gray-400"
        >
          <thead class="lg:text-xl text-xs text-gray-700">
            <tr>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4"></th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">SN</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Item</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Quantity</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Priority</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Requested by</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Status</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Q Approved</th>
              <th scope="col" class="text-sm font-bold text-gray-900 px-3 lg:px-6 py-4">Approved</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr
              class="bg-white dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700"
            >
              <th
                scope="row"
                class="lg:py-4 lg:px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <input
                  type="checkbox"
                  class="checked:bg-primary lg:h-5 lg:w-5 bg-primary checked:border-primary border-2 lg:border-4 border-primary"
                />
              </th>
              <td class="lg:py-4 lg:px-6">01</td>
              <td class="lg:py-4 lg:px-6">Battery</td>
              <td class="lg:py-4 lg:px-6">5</td>
              <td class="lg:py-4 lg:px-6">High</td>
              <td class="lg:py-4 lg:px-6">Mr Emmanuel</td>
              <td class="lg:py-4 lg:px-6">Approved</td>
              <td class="lg:py-4 lg:px-6">4</td>
              <td class="lg:py-4 lg:px-6">12-07-2022</td>
            </tr>-->
            <tr class="bg-white dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700">
              <th
                scope="row"
                class="lg:py-4 lg:px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <input
                  type="checkbox"
                  class="checked:bg-primary lg:h-5 lg:w-5 checked:border-primary bg-primary border-2 lg:border-4 border-primary"
                />
              </th>
              <td class="text-sm text-gray-900 font-light lg:px-6 py-4 whitespace-nowrap">1</td>
              <td class="text-sm text-gray-900 font-light lg:px-6 py-4 whitespace-nowrap">Battery</td>
              <td class="text-sm text-gray-900 font-light lg:px-6 py-4 whitespace-nowrap">5</td>
              <td class="text-sm text-gray-900 font-light lg:px-6 py-4 whitespace-nowrap">High</td>
              <td
                class="text-sm text-gray-900 font-light lg:px-6 py-4 whitespace-nowrap"
              >Mr Emmanuel</td>
              <td class="text-sm text-gray-900 font-light lg:px-6 py-4 whitespace-nowrap">Approved</td>
              <td class="text-sm text-gray-900 font-light lg:px-6 py-4 whitespace-nowrap">4</td>
              <td class="text-sm text-gray-900 font-light lg:px-6 py-4 whitespace-nowrap">12-07-2022</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-end m-2 lg:m-10">
          <button
            type="submit"
            class="inline-flex justify-center items-center p-2 lg:w-40 mt-8 text-xs lg:text-xl font-medium text-white rounded-lg border-2 bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Waybill Item</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { components: {} };
</script>

<style scoped>
/* table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(odd) {
  background-color: rgb(244, 244, 244);
} */
</style>
