import require from '@/netWork/baseURL'
import qs from 'qs'
//user
export function login(data) {
    return require({
        url: '/user/Login',
        method: 'POST',
        data
    })
}
export function register(data) {
    return require({
        url: '/user/Register',
        method: 'POST',
        data
    })
}
export function userExit() {
    return require({
        url: 'usr/Exit',
        method: 'GET'
    })
}
export function sendEmailVerificationCode(data) {
    return require({
        url: '/user/EmailSend',
        method: 'POST',
        data
    })
}
export function resetPassword(data) {
    return require({
        url: '/user/RepeatPassword',
        method: 'POST',
        data
    })
}

export function updataImg(data) {
    return require({
        url: '/user/UploadImage',
        method: 'POST',
        data
    })
}
export function getAllUser() {
    return require({
        url: '/user/FindAll',
        method: 'GET'
    })
}
export function removeUser(params) {
    return require({
        url: '/user/Delete',
        method: 'DeLETE',
        params
    })
}
//articles
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
        url: '/Blog/Insert',
        method: 'POST',
        data
    })
}
export function articleAudit(params) {
    return require({
        url: '/Blog/Check',
        method: 'GET',
        params,
        paramsSerializer(params) {
            return qs.stringify(params, { arrayFormat: 'indices' })
        }
    })
}

export function articleRemove(params) {
    return require({
        url: '/Blog/Delete',
        method: 'DeLETE',
        params
    })
}

//comments
export function getAllComments() {
    return require({
        url: '/Comment/FindAll',
        method: 'GET',
    })
}

export function getOneComment(params) {
    return require({
        url: '/Comment/FindOne',
        method: 'GET',
        params
    })
}

export function publishComment(data) {
    return require({
        url: '/Commet/Insert',
        method: 'POST',
        data
    })
}
export function removeComments(params) {
    return require({
        url: '/Comment/Delete',
        method: 'DELETE',
        data
    })
}
//notices
export function getAllNotice() {
    return require({
        url: '/Notice/FindAll',
        method: 'GET',
    })
}
export function getLatestNotice() {
    return require({
        url: '/Notice/FindOne',
        method: 'GET'
    })
}
export function removeNotice(data) {
    return require({
        url: '/Notice/Delete',
        method: 'DELETE',
        data
    })
}

export function publishNewNotice(data) {
    return require({
        url: '/Notice/Insert',
        method: 'POST',
        data
    })
}