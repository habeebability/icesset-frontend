import axios from "axios";

axios.defaults.baseURL = "https://icesset.herokuapp.com";
// axios.defaults.baseURL = "http://64.227.122.155:9000";

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
