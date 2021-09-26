import require from '@/netWork/baseURL'

export function login(data) {
    return require({
        url: '/basic-auth/163%40163.com/25800',
        method: 'GET',
        params: data
    })
}

export function swiperImg() {
    return require({
        url: '/get',
        method: 'GET',
    })
}

export function loadArticles() {
    return require({
        url: '/get',
        method: 'GET'
    })
}

export function publishArticle(data) {
    return require({
        url: '/post',
        method: 'POST',
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