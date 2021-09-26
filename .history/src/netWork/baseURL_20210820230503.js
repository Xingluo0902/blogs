import axios from 'axios'

const require = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 10000
})

export default require