import axios from 'axios'

const require = axios.create({
    baseURL: 'http://cqclqn0t.dongtaiyuming.net',
    timeout: 10000
})

export default require