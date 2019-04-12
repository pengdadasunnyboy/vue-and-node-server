import axios from 'axios'

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 150000, // request timeout
})
export default service