import axios from 'axios'

const require = axios.create({
        baseURL: 'http://cqclqn0t.dongtaiyuming.net'
    })
    // const require = axios.create({
    //     baseURL: '/api'
    // })
export default require