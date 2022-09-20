import { createApp } from "vue";

import App from "./App.vue";

import "./interceptors/axios";

// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

import "./index.css";
import router from "./router.js";
import store from "./store/index.js";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueAwesomePaginate);
app.mount("#app");
