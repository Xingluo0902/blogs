import axios from 'axios'

const require = axios.create({
    baseURL: 'api'
})

export default require