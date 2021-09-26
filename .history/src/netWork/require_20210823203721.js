import require from '@/netWork/baseURL'

export function login(data) {
    return require({
        url: 'user/Login',
        method: 'POST',
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
        url: '/get',
        method: 'GET',
    })
}
export function articleRemove() {
    return require({
        url: '/delete',
        method: 'DELETE',
    })
}