import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () =>
    import ('views/login-register/Login')
const Register = () =>
    import ('views/login-register/Register')
const Home = () =>
    import ('views/Home/Home')
const Details = () =>
    import ('views/details/Details')
const Profile = () =>
    import ('views/Profile/Profile')
const Creation = () =>
    import ('views/creation/Creation')
const Person = () =>
    import ('views/Profile/Person')
const FileDetails = () =>
    import ('views/Profile/FileDetails')
const Settings = () =>
    import ('views/Profile/Settings')
const ChangePassword = () =>
    import ('views/Profile/ChangePassword')
const BackStageManagement = () =>
    import ('views/backStageManagement/BackStageManagement')
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
        path: '/backstagemanagement',
        name: 'BackStageManagement',
        component: BackStageManagement,
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
                path: 'settings',
                name: 'Settings',
                component: Settings,
            },
            {
                path: 'filedetails',
                name: 'FileDetails',
                component: FileDetails,

            },
            {
                path: 'changepassword',
                name: 'ChangePassword',
                component: ChangePassword,
            }
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router