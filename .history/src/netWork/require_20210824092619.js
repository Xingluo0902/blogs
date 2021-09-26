import require from '@/netWork/baseURL'

export function login(params) {
    return require({
        url: '/basic-auth/163%40163.com/000000',
        method: 'GET',
        params
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
        url: '/Blog/Hot',
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
        url: '//Blog/Hot',
        method: 'GET',
    })
}
export function articleRemove() {
    return require({
        url: '/Blog/Hot',
        method: 'GET',
    })
}