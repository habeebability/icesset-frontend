import axios from "axios";

axios.defaults.baseURL = "https://icesset.herokuapp.com";

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
