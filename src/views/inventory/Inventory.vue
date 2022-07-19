<template>
  <div class="flex flex-col ml-6 lg:ml-0 px-10">
    <h1 class="font-semibold lg:text-2xl text-sm mt-5 ml-5">Inventory</h1>
    <div class="bg-gray-light ml-4 my-5 mr-6 w-64 lg:w-auto h-auto px-3 py-6">
      <div class="search-and-add flex justify-between items-center">
        <div
          class="flex w-1/2 items-center bg-white h-16 p-2 lg:px-3 lg:py-1 rounded-lg"
        >
          <div class="relative w-full mr-6">
            <input
              type="text"
              class="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg p-2 block w-full lg:pl-10 lg:p-2.5"
              placeholder="Search"
            />
          </div>
          <button
            type="submit"
            class="inline-flex justify-center items-center p-1 w-32 lg:ml-2 lg:mr-6 lg:text-xl font-medium text-primary rounded-lg border-2 lg:border-4 border-primary hover:bg-primary hover:border-none hover:text-tertiary"
          >
            search
          </button>
        </div>
        <button
          class="inline-flex justify-center items-center p-1 w-32 lg:ml-2 lg:mr-6 lg:text-xl font-medium text-primary rounded-lg border-1 lg:border-4 hover:bg-primary hover:border-none hover:text-tertiary"
        >
          + Add New
        </button>
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
              <!-- <th scope="col" class="lg:py-3 lg:px-6"></th> -->
              <th scope="col" class="lg:py-3 lg:px-6">SN</th>
              <th scope="col" class="lg:py-3 lg:px-6">Name</th>
              <th scope="col" class="lg:py-3 lg:px-6">Quantity</th>
              <th scope="col" class="lg:py-3 lg:px-6">Category</th>
              <th scope="col" class="lg:py-3 lg:px-6">Maker</th>
              <th scope="col" class="lg:py-3 lg:px-6">Location</th>
              <th scope="col" class="lg:py-3 lg:px-6">Added on</th>
              <th scope="col" class="lg:py-3 lg:px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700"
            >
              <td class="lg:py-4 lg:px-6">1</td>
              <td class="lg:py-4 lg:px-6">Battery</td>
              <td class="lg:py-4 lg:px-6">5</td>
              <td class="lg:py-4 lg:px-6">Electronics</td>
              <td class="lg:py-4 lg:px-6">Tiger</td>
              <td class="lg:py-4 lg:px-6">Ibadan</td>
              <td class="lg:py-4 lg:px-6">10-07-2022</td>
              <td class="lg:py-4 lg:px-6">
                <button
                  class="inline-flex justify-center items-center p-1 w-32 lg:ml-2 lg:mr-6 lg:text-xl font-medium hover:bg-purple-400 bg-secondary text-tertiary rounded-lg focus:outline-none"
                >
                  Review
                </button>
              </td>
            </tr>
            <tr
              class="bg-white dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700"
            >
              <td class="lg:py-4 lg:px-6">2</td>
              <td class="lg:py-4 lg:px-6">Battery</td>
              <td class="lg:py-4 lg:px-6">5</td>
              <td class="lg:py-4 lg:px-6">Electronics</td>
              <td class="lg:py-4 lg:px-6">Tiger</td>
              <td class="lg:py-4 lg:px-6">Ibadan</td>
              <td class="lg:py-4 lg:px-6">10-07-2022</td>
              <td class="lg:py-4 lg:px-6">
                <button
                  class="inline-flex justify-center items-center p-1 w-32 lg:ml-2 lg:mr-6 lg:text-xl font-medium hover:bg-purple-400 bg-secondary text-tertiary rounded-lg focus:outline-none"
                >
                  Review
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
table {
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
}
</style>
