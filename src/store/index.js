import { createStore } from "vuex";

import axios from "axios";
import router from "../router.js";

// import user from '../store/modules/user.js'
let user = null;
try {
  user = JSON.parse(localStorage.getItem("user"));
} catch (error) {}

const store = createStore({
  state: {
    user,
    item: null,
    stores: null,
    // message: "",
  },

  mutations: {
    createItem(state, payload) {
      state.item = payload;
    },
    createUser(state, payload) {
      state.user = payload;
    },
    createNewStore(state, payload) {
      state.stores = payload;
    },

    // setMessage(state, payload) {
    //   state.message = payload;
    // },
    setUser(state, payload) {
      state.user = payload;
      window.localStorage.user = JSON.stringify(payload);
    },
    userLogout(state) {
      state.user = null;
      window.localStorage.user = JSON.stringify(null);
    },

    // setLoginErrors(state, errors) {
    //   state.errors = errors;
    // },
    // setInvalidCredentials(state, invalidCredentials) {
    //   state.invalidCredentials = invalidCredentials;
    // },
  },

  actions: {
    async signIn(context, { email, password }) {
      const response = await axios.post(
        "/api/v1/users/login",
        {
          email,
          password,
        }
      );
      const user = response.data;
      console.log(user);

      if (user) {
        context.commit("setUser", user);
        router.push("/main");
      } else {
        throw new Error("invalid credentials");
      }
    },

    async createItem(
      context,
      {
        name,
        category,
        location,
        maker,
        description,
        quantity,
        item_condition,
        submitted_by,
        // image,
        acquired,
      }
    ) {
      const response = await axios.post("http://localhost:4000/inventory", {
        name,
        category,
        location,
        maker,
        description,
        quantity,
        item_condition,
        submitted_by,
        // image,
        acquired,
      });

      const item = response.data;

      if (item) {
        context.commit("createItem", item);
        router.push("/inventory");
      } else {
        throw new Error("Could not add job");
      }
    },
    async createUser(
      context,
      {
        firstName,
        lastName,
        password,
        role,
        email,
        mobilePhone,
        // user_status,
        // dateCreated,
      }
    ) {
      const response = await axios.post("/api/v1/users", {
        firstName,
        lastName,
        email,
        mobilePhone,
        password,
        role,
        // dateCreated
      });

      const user = response.data;

      if (user) {
        context.commit("createUser", user);
        router.push("/staffs");
      } else {
        throw new Error("Could not add job");
      }
    },

    async createNewStore(context, { store_name }) {
      const response = await axios.post("/api/v1/locations", {
        store_name,
      });

      const storeInfo = response.data;

      if (storeInfo) {
        context.commit("createNewStore", storeInfo);
      } else {
        throw new Error("Could not add new store");
      }
    },

    logout({ commit }) {
      commit("userLogout");
    },
  },
});

//export store
export default store;
