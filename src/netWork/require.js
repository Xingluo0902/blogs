import require from '@/netWork/baseURL'
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
        url: 'user/Exit',
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
export function removeUsers(params) {
    return require({
        url: '/user/Delete',
        method: 'GET',
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


export function publishArticles(data) {
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
        params
    })
}

export function articleRemove(params) {
    return require({
        url: '/Blog/Delete',
        method: 'GET',
        params
    })
}
//back stage  management
export function backStageLoadArticle() {
    return require({
        url: '/Blog/BlogsAll',
        method: 'GET',
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
        params,
        // paramsSerializer(params) {
        //     return qs.stringify(params, { arrayFormat: 'indices' })
        // }
    })
}

export function publishComments(data) {
    return require({
        url: '/Comment/Insert',
        method: 'POST',
        data
    })
}
export function removeComments(params) {
    return require({
        url: '/Comment/Delete',
        method: 'GET',
        params
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
export function removeNotices(params) {
    return require({
        url: '/Notice/Delete',
        method: 'GET',
        params
    })
}

export function publishNewNotice(data) {
    return require({
        url: '/Notice/Insert',
        method: 'POST',
        data
    })
}





// import require from '@/netWork/baseURL'
// // import qs from 'qs'
// //user
// export function login(data) {
//     return require({
//         url: '/post',
//         method: 'POST',
//         data
//     })
// }
// export function register(data) {
//     return require({
//         url: '/post',
//         method: 'POST',
//         data
//     })
// }
// export function userExit() {
//     return require({
//         url: '/get',
//         method: 'GET'
//     })
// }
// export function sendEmailVerificationCode(data) {
//     return require({
//         url: '/post',
//         method: 'POST',
//         data
//     })
// }
// export function resetPassword(data) {
//     return require({
//         url: '/post',
//         method: 'POST',
//         data
//     })
// }

// export function updataImg(data) {
//     return require({
//         url: '/get',
//         method: 'POST',
//         data
//     })
// }
// export function getAllUser() {
//     return require({
//         url: '/get',
//         method: 'GET'
//     })
// }
// export function removeUsers(params) {
//     return require({
//         url: '/get',
//         method: 'GET',
//         params
//     })
// }
// //articles
// export function loadArticles() {
//     return require({
//         url: '/get',
//         method: 'GET'
//     })
// }

// export function loadUserArticle() {
//     return require({
//         url: '/get',
//         method: 'GET'
//     })
// }


// export function publishArticles(data) {
//     return require({
//         url: '/post',
//         method: 'POST',
//         data
//     })
// }
// export function articleAudit(params) {
//     return require({
//         url: '/get',
//         method: 'GET',
//         params
//     })
// }

// export function articleRemove(params) {
//     return require({
//         url: '/get',
//         method: 'GET',
//         params
//     })
// }
// //back stage  management
// export function backStageLoadArticle() {
//     return require({
//         url: '/get',
//         method: 'GET',
//     })
// }

// //comments
// export function getAllComments() {
//     return require({
//         url: '/get',
//         method: 'GET',
//     })
// }

// export function getOneComment(params) {
//     return require({
//         url: '/get',
//         method: 'GET',
//         params,
//         // paramsSerializer(params) {
//         //     return qs.stringify(params, { arrayFormat: 'indices' })
//         // }
//     })
// }

// export function publishComments(data) {
//     return require({
//         url: '/get',
//         method: 'POST',
//         data
//     })
// }
// export function removeComments(params) {
//     return require({
//         url: '/get',
//         method: 'GET',
//         params
//     })
// }
// //notices
// export function getAllNotice() {
//     return require({
//         url: '/get',
//         method: 'GET',
//     })
// }
// export function getLatestNotice() {
//     return require({
//         url: '/get',
//         method: 'GET'
//     })
// }
// export function removeNotices(params) {
//     return require({
//         url: '/get',
//         method: 'GET',
//         params
//     })
// }

// export function publishNewNotice(data) {
//     return require({
//         url: '/post',
//         method: 'POST',
//         data
//     })
// }