import axios from 'axios';

const axiosProduct = axios.create({
    baseURL:'http://localhost/proyectoag/api-rest-laravel-ag/public/api'

});
export default axiosProduct;