import require from '@/netWork/baseURL'

export function login(data) {
    return require({
        url: '/user/Login',
        method: 'GET',
        data
    })
}

export function swiperImg() {
    return require({
        url: '/Blog/Hot',
        method: 'GET',
    })
}

export function loadArticles() {
    return require({
        url: '/Blog/FindAll',
        method: 'GET'
    })
}

export function publishArticle(data) {
    return require({
        url: '/Blog/Hot',
        method: 'GET',
        data
    })
}

export function articleAudit() {
    return require({
        url: '/Blog/Hot',
        method: 'GET',
    })
}
export function articleRemove() {
    return require({
        url: '/Blog/Hot',
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