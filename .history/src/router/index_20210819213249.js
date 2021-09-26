import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () =>
    import ('views/Login')
const Register = () =>
    import ('views/Register')
const Home = () =>
    import ('views/Home')
const Details = () =>
    import ('views/Details')
const Profile = () =>
    import ('views/Profile')
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [{
            path: '/profile',
            name: 'Profile',
            component: Profile
        }, ]
    },


    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router