import axios from "axios";

const instance = axios.create({
    baseURL: "https://asm-dev-api.herokuapp.com/api/v1/food",
})

export default instance;