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
const Creation = () =>
    import ('views/Creation')
const Person = () =>
    import ('views/Person')
const FileDetails = () =>
    import ('views/Profile/FileDetails')
const Settings = () =>
    import ('views/Profile/Settings')
const ChangePassword = () =>
    import ('views/Profile/ChangePassword')
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/details',
        name: 'Details',
        component: Details
    },
    {
        path: '/creation',
        name: 'Creation',
        component: Creation
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
    },
    {
        path: '/person',
        name: 'Person',
        component: Person,
        children: [{
                path: 'filedetails',
                name: 'FileDetails',
                component: FileDetails
            },
            {
                path: 'settings',
                name: 'Settings',
                component: Settings,

            },
            {
                path: 'changepassword',
                name: 'ChangePassword',
                component: ChangePassword
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router