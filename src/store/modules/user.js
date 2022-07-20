// import axios from "axios";

// export default {
//   state: () => {},
//   getters: {},
//   state: {
//     user: null,
//   },
//   mutations: {
//     mutations: {
//       setUser(state, payload) {
//         state.user = payload;
//         console.log("user state change:", state.user);
//       },

//       setCourse(state, payload) {
//         state.course = payload;
//       },
//       // updatePoints(state, payload) {
//       //     state.points = state.points + payload
//       // }
//     },
//   },
//   actions: {
//     async signIn(context, { email, password }) {
//       const data = await axios.post("http://localhost:3000/api/v1/users", {
//         password: password,
//         email: email,
//       });
//       if (data) {
//         console.log(data);
//         context.commit("setUser", "i am good");
//       } else {
//         console.log("err");
//         throw new Error("could not complete signup");
//       }
//     },
//   },
// };
