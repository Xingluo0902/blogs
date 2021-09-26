import axios from 'axios'
import qs from 'qs';
const require = axios.create({
    baseURL: 'api'
})

export default require