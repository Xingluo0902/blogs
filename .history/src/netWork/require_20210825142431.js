import require from '@/netWork/baseURL'

export function login(data) {
    return require({
        url: '/user/Login',
        method: 'POST',
        data
    })
}
export function register(data) {
    console.log(data);
    return require({
        url: '/user/Register',
        method: 'POST',
        data
    })
}
export function loadArticles() {
    return require({
        url: '/Blog/FindAll',
        method: 'GET'
    })
}

export function loadUserArticle() {
    return require({
        url: '/Blog/FindOne',
        method: 'GET'
    })
}


export function publishArticle(data) {
    return require({
        url: '',
        method: 'GET',
        data
    })
}

export function articleAudit() {
    return require({
        url: '',
        method: 'GET',
    })
}
export function articleRemove() {
    return require({
        url: '',
        method: 'GET',
    })
}

export function upaDataUserPhoto(data) {
    return require({
        url: '',
        methods: 'POST',
        data
    })
}