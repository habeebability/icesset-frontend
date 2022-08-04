<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-5 px-5 lg:p-10">
    <div class="overflow-x-auto">
      <table class="table-auto">
        <thead class>
          <tr class>
            <th class="bg-tertiary">SN</th>
            <th class="bg-tertiary">Name</th>
            <th class="bg-tertiary">Category</th>
            <th class="bg-tertiary">Location</th>
            <th class="bg-tertiary">Qty</th>
            <th class="bg-tertiary">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Solar battery</td>
            <td>Electronics</td>
            <td>JoceyB Store</td>
            <td>15</td>
            <td>
              <button class="bg-secondary text-tertiary">Review</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="overflow-x-auto">
      <table class="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Solar Battery</td>
            <td>JoceyB Store, Ibadan</td>
            <td>
              <input class="w-20 h-5" type="number" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>