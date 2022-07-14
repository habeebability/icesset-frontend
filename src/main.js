import { createApp } from "vue";

import { createStore } from "vuex";
import App from "./App.vue";
import "./index.css";
import router from "./router.js";

const store = createStore();

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
