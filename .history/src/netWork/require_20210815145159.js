import axios from 'axios'

const require = axios.create({
    baseURL: 'httpbin.org'
})