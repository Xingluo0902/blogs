import require from '@/netWork/baseURL'

export function login() {
    return require({
        url: '/post',
        method: 'POST',
    })
}