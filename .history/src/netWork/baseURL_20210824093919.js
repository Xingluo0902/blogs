import axios from 'axios'

const require = axios.create({
    baseURL: 'http://httpbin.org'
})

export default require