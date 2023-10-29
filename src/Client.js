import axios from "axios"

const Client = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/posts"
});


export default Client;
