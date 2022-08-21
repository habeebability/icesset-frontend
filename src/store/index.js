import { createStore } from "vuex";

import axios from "axios";
import router from "../router.js";

// import user from '../store/modules/user.js'
let getItemDetails = null;
try {
  getItemDetails = JSON.parse(localStorage.getItem("getItemDetails"));
} catch (error) {}


let user = null;
try {
  user = JSON.parse(localStorage.getItem("user"));
} catch (error) {}

const store = createStore({
  state: {
    user,
    item: null,
    stores: null,
    batch: null,
    showLoading: false,
    getItemDetails,
    ItemDetails: [],

    // showLoading: false,

    token: localStorage.getItem("token") || null,
    // message: "",
  },

  mutations: {
    createItem(state, payload) {
      state.item = payload;
    },


    getItemDetails(state, payload) {
      state.user = payload;
    },

    // updateUser(state, payload) {
    //   state.user = payload;
    // },


    createNewStore(state, payload) {
      state.stores = payload;
    },

    createBatch(state, payload) {
      state.batch = payload;
    },

    setUser(state, payload) {
      state.user = payload;
      window.localStorage.user = JSON.stringify(payload);
    },

    // showLoading(state, payload) {
    //   state.showLoading = payload;
    // },

    

    saveToken(state, token) {
      state.token = token;
      console.log("new user token:", state.token);
    },
    userLogout(state) {
      state.user = null;
      window.localStorage.user = JSON.stringify(null);
    },
  },

  actions: {
    async signIn(context, { email, password }) { 
    

      const response = await axios.post("/api/v1/users/login", {
        email,
        password,
      });

      const token = response.data.data.accessToken;
      // headers.authorization;

      // console.log(response);

      // console.log(token);


      const user = response.data;
      console.log(user);

      if (user) {
        localStorage.setItem("token", token);
        context.commit("saveToken", token);

        context.commit("setUser", user);
        // router.push("/main");
      } else {
        throw new Error("invalid credentials");
      }
    },


    //  const getItemDetails = 
     async getItemDetails(context, {category, dateCreated, description, item_id, item_name, quantity, qyt_loc_id, store_id, store_name, supplier, supplierContact, user_id, user_name}) {
       const response = await axios.get(`/api/v1/inventory/${id}`, {
        category,
        dateCreated, 
        description, 
        item_id, 
        item_name, 
        quantity, 
        qyt_loc_id, 
        store_id, 
        store_name, 
        supplier, 
        supplierContact, 
        user_id, 
        user_name
       });
       
       const itemDetails = response.data.data;
      //  ItemDetails.value = itemDetails;
       console.log(itemDetails);
       if (itemDetails) {
          context.commit("getItemDetails", itemDetails);
          // router.push("/item-review")
  
        } else {
          throw new Erroe ("Could not fetch data")
        }
      },

    // async createItem(context, { item_name, category, locations, description }) {

    async createItem(
      context,
      { item_name, category, supplier, supplierContact, locations, description }
    ) {

      const response = await axios.post("/api/v1/inventory", {
        item_name,
        category,
        supplier,
        supplierContact,
        locations,
        description,
      });

      const item = response.data;

      if (item) {
        context.commit("createItem", item);
        router.push("/items");
      } else {
        throw new Error("Could not add job");
      }
    },

    async createTransferBatch(context, payload) {
      const response = await axios.post("/api/v1/transaction", payload);
      // waybillDetails, transactionDetails, transactionItem;
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
        // context.commit("createUser", user);
        router.push("/staffs");
      } else {
        throw new Error("Could not create user");
      }
    },
    async updateUser(
      _context,
      {
        id,
        firstName,
        lastName,
        password,
        role,
        email,
        mobilePhone,
        // user_status,
        // date,
      }
    ) {
      const response = await axios.put(`/api/v1/users/${id}`, {
        // id,
        firstName,
        lastName,
        email,
        mobilePhone,
        password,
        role,
      });

      const user = response.data;

      if (user) {
        // context.commit("updateUser", user);
        router.push("/staffs");
      } else {
        throw new Error("Could not add job");
      }
    },
    async suspendUser(_context, id) {
      const response = await axios.put(`/api/v1/users/suspend/${id}`);

      const user = response.data;

      if (user) {
        // context.commit("updateUser", user);
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

    // logout({ commit }) {
    //   commit("userLogout");
    // },
    logout(state, payload) {
      state.user = null;
      state.token = null;
      state.getItemDetails = null;
      state.isLoggedIn = false;

      localStorage.setItem("token", null);
      localStorage.setItem("user", null);

      // router.replace("/login");
    },
  },
});

//export store
export default store;
