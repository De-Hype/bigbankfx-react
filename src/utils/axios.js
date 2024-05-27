import axios from "axios";

const Axios = axios.create({
    baseURL:"https://bigbankfx.onrender.com/v1/api",
    // timeout:"100s",
    headers:{
        "Content-Type":"application/json"
    },
    withCredentials:true
})
export default Axios;