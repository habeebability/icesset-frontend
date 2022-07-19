<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <!-- <router-link to="/transactions">{{ title }}</router-link> -->
    <router-link
      class="flex items-center text-xl py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
      to="/transactions"
    >
      <svg
        class="w-4 h-4 mr-3 icon"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class=""
          d="M26.1818 8L20.3636 16H24.7273C24.7273 22.62 20.8145 28 16 28C14.5309 28 13.1345 27.5 11.9273 26.6L9.80364 29.52C11.5927 31.08 13.7164 32 16 32C22.4291 32 27.6364 24.84 27.6364 16H32L26.1818 8ZM7.27273 16C7.27273 9.38 11.1855 4 16 4C17.4691 4 18.8655 4.5 20.0727 5.4L22.1964 2.48C20.4073 0.92 18.2836 0 16 0C9.57091 0 4.36364 7.16 4.36364 16H0L5.81818 24L11.6364 16H7.27273Z"
          fill="white"
        />
      </svg>
      {{ title }}
    </router-link>
  </div>
  <div
    v-if="isOpen"
    class="sub-menu ml-5 pl-4 text-xl text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
  >
    <div v-for="(item, index) in items" :key="index">
      <a class="ml-5 mb-3" :href="item.link">{{ item.title }} > </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ["title", "items"],

  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
a:active,
a:hover,
a.router-link-active,
a.router-link-active svg path {
  width: 250px;
  margin-left: 5px;
  margin-top: 2px;
  margin-bottom: 2px;
  border-radius: 10px;
  background-color: #fff;
  color: #540d6e;
  fill: #540d6e;
  stroke: #540d6e;
}

li a:active svg path g defs clipPath,
li a:hover svg path {
  fill: #540d6e;
  color: #540d6e;
  stroke: #540d6e;
}
</style>
