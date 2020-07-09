import axios from 'axios';

const url = 'https://reqres.in'
export default axios.create({
    baseURL: url,
    headers: {
        Authorization: ''
    }
})