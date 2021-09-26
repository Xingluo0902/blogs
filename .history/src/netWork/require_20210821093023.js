// import require from '@/netWork/baseURL'

// export function login(data) {
//     return require({
//         url: '/post',
//         method: 'POST',
//         data: data
//     })
// }

// export function swiperImg() {
//     return require({
//         url: '/Blog/Hot',
//         method: 'GET',
//     })
// }

export function loadArticles() {
    return require({
        url: '/Blog/Hot',
        method: 'GET'
    })
}