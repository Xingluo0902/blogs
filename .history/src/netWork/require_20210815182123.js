import baseURL from '@/netWork/baseURL'

export function login() {
    return require({
        url: '/post',
        method: 'POST',

    })
}