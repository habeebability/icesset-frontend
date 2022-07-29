<template>
  <!-- <router-view></router-view> -->
  <section class="p-5 lg:px-10">
    <div class="  bg-tertiary p-5">
      <div class="flex justify-between ">
        <h1>My Transactions</h1>
        <div><h3>Filter by</h3></div>
      </div>

      <div class="transactions my-5">
        <ul>
          <li class="my-3">
            <div class="card bg-white rounded-lg">
              <div class="p-5">
                <div class="transaction-header flex justify-between border-b pb-3">
                  <div class="">
                    <h3 class="flex my-3">
                      <span class="text-red-400">Outgoing:</span>
                      <span class="mx-3">Warri, Delta store</span>
                    </h3>
                    <h3 class="flex my-3">
                      <span class="">Status:</span>
                      <span class="mx-3">Pending</span>
                    </h3>
                  </div>
                  <div>
                    <h3 class="flex my-3">
                      <span class="">To:</span>
                      <span class="mx-3">Pelumi Charles</span>
                    </h3>
                    <h3 class="flex my-3">
                      <span class="">From:</span>
                      <span class="mx-3">Emmanuel Tolani</span>
                    </h3>
                  </div>
                  
                  <div>
                    <h3 class="flex my-3">
                    <span class="">Sent:</span>
                    <span class="mx-3">24-07-2022</span>
                    </h3>
                    <h3 class="flex my-3">
                    <span class="">Received By:</span>
                    <span class="mx-3">Pending</span>
                  </h3>
                  </div>
                  <div>
                    <h2>pdf</h2>
                  </div>
                </div>
                <div class="transaction-body py-5 border-b-4 border-purple-200 border-dashed">
                  <div class="grid grid-cols-5 my-3">
                    <span class="">QTY</span>
                    <span class="">Name</span>
                    <span class="col-span-2">DESCRIPTION</span>
                    <span class="">LOCATION</span>
                  </div>
             
                  <div class="grid grid-cols-5">
                    <span>1</span>
                    <span class="">solar battery</span>
                    <span class="col-span-2">Litium 5KVa super powered</span>
                    <span>JoceyB, Ibadan store</span>
                  </div>
                  <div class="grid grid-cols-5">
                    <span>7</span>
                    <span class="">solar battery</span>
                    <span class="col-span-2">Metered 12kg multidimentional cylinder</span>
                    <span>JoceyB, Ibadan store</span>
                  </div>
                  <div class="grid grid-cols-5">
                    <span>3</span>
                    <span class="">solar battery</span>
                    <span class="col-span-2">Metered 12kg multidimentional cylinder</span>
                    <span>Warri, Delta store</span>
                  </div>
                </div>
                 <div class="transaction-footer flex justify-between border-b pb-3">
                  <div class="">
                    <h3 class="flex my-3">
                      <span class="">Courier name:</span>
                      <span class="mx-3">Mrs. Aminat</span>
                    </h3>
                    <h3 class="flex my-3">
                      <span class="">Note:</span>
                      <span class="mx-3"></span>
                    </h3>
                  </div>
                  <div>
                     <h3 class="flex my-3">
                      <span class="">Courier contact:</span>
                      <span class="mx-3">07080182736</span>
                    </h3>
                    

                  </div>
                  
                  <div>
                    <h3 class="flex my-3">
                  <h3 class="flex my-3">
                      <span class="">Email:</span>
                      <span class="mx-3">wande@gmail.com</span>
                    </h3>
                  </h3>
                  </div>

                </div>

              </div>
            </div>
          </li>
          <li class="my-3">
            <div class="card bg-white rounded-lg">
              <div class="p-5">
                <div class="transaction-header flex justify-between border-b pb-3">
                  <div class="">
                    <h3 class="flex my-3">
                      <span class="text-red-400">Outgoing:</span>
                      <span class="mx-3">Warri, Delta store</span>
                    </h3>
                    <h3 class="flex my-3">
                      <span class="">Status:</span>
                      <span class="mx-3">Pending</span>
                    </h3>
                  </div>
                  <div>
                    <h3 class="flex my-3">
                      <span class="">To:</span>
                      <span class="mx-3">Pelumi Charles</span>
                    </h3>
                    <h3 class="flex my-3">
                      <span class="">From:</span>
                      <span class="mx-3">Emmanuel Tolani</span>
                    </h3>
                  </div>
                  
                  <div>
                    <h3 class="flex my-3">
                    <span class="">Sent:</span>
                    <span class="mx-3">24-07-2022</span>
                    </h3>
                    <h3 class="flex my-3">
                    <span class="">Received By:</span>
                    <span class="mx-3">Pending</span>
                  </h3>
                  </div>
                  <div>
                    <h2>pdf</h2>
                  </div>
                </div>
                <div class="transaction-body py-5 border-b-4 border-purple-200 border-dashed">
                  <div class="grid grid-cols-5 my-3">
                    <span class="">QTY</span>
                    <span class="">Name</span>
                    <span class="col-span-2">DESCRIPTION</span>
                    <span class="">LOCATION</span>
                  </div>
             
                  <div class="grid grid-cols-5">
                    <span>1</span>
                    <span class="">solar battery</span>
                    <span class="col-span-2">Litium 5KVa super powered</span>
                    <span>JoceyB, Ibadan store</span>
                  </div>
                  <div class="grid grid-cols-5">
                    <span>7</span>
                    <span class="">solar battery</span>
                    <span class="col-span-2">Metered 12kg multidimentional cylinder</span>
                    <span>JoceyB, Ibadan store</span>
                  </div>
                  <div class="grid grid-cols-5">
                    <span>3</span>
                    <span class="">solar battery</span>
                    <span class="col-span-2">Metered 12kg multidimentional cylinder</span>
                    <span>Warri, Delta store</span>
                  </div>
                </div>
                 <div class="transaction-footer flex justify-between border-b pb-3">
                  <div class="">
                    <h3 class="flex my-3">
                      <span class="">Courier name:</span>
                      <span class="mx-3">Mrs. Aminat</span>
                    </h3>
                    <h3 class="flex my-3">
                      <span class="">Note:</span>
                      <span class="mx-3"></span>
                    </h3>
                  </div>
                  <div>
                     <h3 class="flex my-3">
                      <span class="">Courier contact:</span>
                      <span class="mx-3">07080182736</span>
                    </h3>
                    

                  </div>
                  
                  <div>
                    <h3 class="flex my-3">
                  <h3 class="flex my-3">
                      <span class="">Email:</span>
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
export default {};
</script>

<style></style>
