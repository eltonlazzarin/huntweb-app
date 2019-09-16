import axios from 'axios'

// creating the API variable with the API link that we will consume
const api = axios.create({ 
    baseURL: 'https://api-product-hunt-app.herokuapp.com/api/' 
});

export default api;