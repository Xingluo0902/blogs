import require from '@/netWork/baseURL'

export function login(data) {
    return require({
        url: '/post',
        method: 'POST',
        data: data
    })
}