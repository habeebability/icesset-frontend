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
    // job: null,
    // message: "",
  },

  mutations: {
    // createJob(state, payload) {
    //   state.job = payload;
    // },

    // setMessage(state, payload) {
    //   state.message = payload;
    // },
    setUser(state, payload) {
      state.user = payload;
      window.localStorage.user = JSON.stringify(payload);
    },
    // userLogout(state) {
    //   state.user = null;
    //   window.localStorage.user = JSON.stringify(null);
    // },

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
        "http://localhost:5000/api/users/login",
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

    // async createJob(
    //   context,
    //   { title, company, location, type, description, date, employerId }
    // ) {
    //   const response = await axios.post("http://localhost:5000/api/jobs", {
    //     title,
    //     company,
    //     location,
    //     type,
    //     description,
    //     date,
    //     employerId,
    //   });

    //   const job = response.data;

    //   if (job) {
    //     context.commit("createJob", job);
    //     // router.push('/employer-dashboard')
    //   } else {
    //     throw new Error("Could not add job");
    //   }
    // },

    // logout({ commit }) {
    //   commit("userLogout");
    // },
  },
});

//export store
export default store;
