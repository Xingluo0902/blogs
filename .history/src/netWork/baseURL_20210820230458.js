import axios from 'axios'

const require = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 5000
})

export default require